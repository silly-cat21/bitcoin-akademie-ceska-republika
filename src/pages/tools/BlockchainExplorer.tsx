
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ExternalLink, Copy, Info, Check, AlertTriangle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Base URL for the Mempool API
const MEMPOOL_API_BASE_URL = "https://mempool.space/api";

const BlockchainExplorer = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("address");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addressData, setAddressData] = useState<any>(null);
  const [txData, setTxData] = useState<any>(null);
  const [blockData, setBlockData] = useState<any>(null);
  const [networkStats, setNetworkStats] = useState<any>(null);

  // Fetch network statistics on component mount
  useEffect(() => {
    fetchNetworkStats();
  }, []);

  const fetchNetworkStats = async () => {
    try {
      const [blockchainResponse, difficultyResponse] = await Promise.all([
        fetch(`${MEMPOOL_API_BASE_URL}/v1/blocks/tip/height`),
        fetch(`${MEMPOOL_API_BASE_URL}/v1/difficulty-adjustment`)
      ]);

      if (!blockchainResponse.ok || !difficultyResponse.ok) {
        throw new Error("Failed to fetch network stats");
      }

      const blockHeight = await blockchainResponse.text();
      const difficultyData = await difficultyResponse.json();

      setNetworkStats({
        height: parseInt(blockHeight),
        difficulty: difficultyData.difficulty,
        hashrate: difficultyData.currentHashrate,
        avgBlockTime: difficultyData.timeAvg
      });
    } catch (err) {
      console.error("Error fetching network stats:", err);
      // Don't show error toast for background fetch
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!searchQuery.trim()) {
      setError("Prosím zadejte adresu, hash transakce nebo výšku bloku");
      return;
    }
    
    setLoading(true);
    
    try {
      // Check if it's a block height (only numbers)
      if (/^\d+$/.test(searchQuery)) {
        await fetchBlockData(searchQuery);
      }
      // Check if it might be a transaction hash (64 char hex)
      else if (/^[a-fA-F0-9]{64}$/.test(searchQuery)) {
        await fetchTransactionData(searchQuery);
      }
      // Assume it's an address
      else {
        await fetchAddressData(searchQuery);
      }
      
      toast({
        title: "Vyhledávání dokončeno",
        description: "Data byla úspěšně načtena.",
      });
    } catch (err: any) {
      setError(err.message || "Nepodařilo se načíst data. Zkontrolujte prosím zadaný dotaz.");
      toast({
        title: "Chyba při vyhledávání",
        description: err.message || "Nepodařilo se načíst data. Zkontrolujte prosím zadaný dotaz.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAddressData = async (address: string) => {
    try {
      const [addressResponse, txsResponse] = await Promise.all([
        fetch(`${MEMPOOL_API_BASE_URL}/address/${address}`),
        fetch(`${MEMPOOL_API_BASE_URL}/address/${address}/txs`)
      ]);

      if (!addressResponse.ok || !txsResponse.ok) {
        throw new Error("Adresa nenalezena nebo došlo k chybě při načítání dat");
      }

      const addressInfo = await addressResponse.json();
      const transactions = await txsResponse.json();

      // Process the first 10 transactions
      const processedTxs = transactions.slice(0, 10).map((tx: any) => {
        // Calculate if this is a received or sent transaction
        // This is simplified logic - in reality, more complex calculation would be needed
        const received = tx.vout.some((out: any) => out.scriptpubkey_address === address);
        
        // Calculate the amount (simplified)
        let amount = 0;
        if (received) {
          amount = tx.vout
            .filter((out: any) => out.scriptpubkey_address === address)
            .reduce((sum: number, out: any) => sum + out.value, 0) / 100000000;
        } else {
          const inputsFromAddress = tx.vin.some((input: any) => 
            input.prevout && input.prevout.scriptpubkey_address === address
          );
          
          if (inputsFromAddress) {
            amount = tx.vin
              .filter((input: any) => input.prevout && input.prevout.scriptpubkey_address === address)
              .reduce((sum: number, input: any) => sum + input.prevout.value, 0) / 100000000;
          }
        }

        return {
          txid: tx.txid,
          amount: amount,
          timestamp: new Date(tx.status.block_time * 1000).toISOString(),
          confirmations: tx.status.confirmed ? networkStats.height - tx.status.block_height + 1 : 0,
          type: received ? 'received' : 'sent'
        };
      });

      // Format the address data
      const formattedData = {
        address: address,
        balance: addressInfo.chain_stats.funded_txo_sum / 100000000 - addressInfo.chain_stats.spent_txo_sum / 100000000,
        totalReceived: addressInfo.chain_stats.funded_txo_sum / 100000000,
        totalSent: addressInfo.chain_stats.spent_txo_sum / 100000000,
        transactionCount: addressInfo.chain_stats.tx_count,
        transactions: processedTxs
      };

      setAddressData(formattedData);
      setTxData(null);
      setBlockData(null);
      setActiveTab("address");
    } catch (error) {
      console.error("Error fetching address data:", error);
      throw new Error("Nepodařilo se načíst data adresy. Zkontrolujte, zda je adresa platná.");
    }
  };

  const fetchTransactionData = async (txid: string) => {
    try {
      const response = await fetch(`${MEMPOOL_API_BASE_URL}/tx/${txid}`);
      
      if (!response.ok) {
        throw new Error("Transakce nenalezena nebo došlo k chybě při načítání dat");
      }
      
      const txInfo = await response.json();
      
      // Calculate fee
      const inputSum = txInfo.vin.reduce((sum: number, input: any) => 
        sum + (input.prevout ? input.prevout.value : 0), 0
      );
      const outputSum = txInfo.vout.reduce((sum: number, output: any) => sum + output.value, 0);
      const fee = (inputSum - outputSum) / 100000000;

      // Format inputs
      const inputs = txInfo.vin.map((input: any) => ({
        address: input.prevout ? input.prevout.scriptpubkey_address : 'Coinbase',
        value: input.prevout ? input.prevout.value / 100000000 : 0
      }));

      // Format outputs
      const outputs = txInfo.vout.map((output: any) => ({
        address: output.scriptpubkey_address || 'OP_RETURN',
        value: output.value / 100000000
      }));

      // Format the transaction data
      const formattedData = {
        txid: txInfo.txid,
        blockHeight: txInfo.status.block_height || 'Unconfirmed',
        confirmations: txInfo.status.confirmed ? networkStats.height - txInfo.status.block_height + 1 : 0,
        timestamp: txInfo.status.block_time ? new Date(txInfo.status.block_time * 1000).toISOString() : new Date().toISOString(),
        size: txInfo.size,
        weight: txInfo.weight,
        fee: fee,
        status: txInfo.status.confirmed ? 'confirmed' : 'unconfirmed',
        inputs: inputs,
        outputs: outputs
      };

      setTxData(formattedData);
      setAddressData(null);
      setBlockData(null);
      setActiveTab("transaction");
    } catch (error) {
      console.error("Error fetching transaction data:", error);
      throw new Error("Nepodařilo se načíst data transakce. Zkontrolujte, zda je hash transakce platný.");
    }
  };

  const fetchBlockData = async (height: string) => {
    try {
      // First get the block hash from height
      const hashResponse = await fetch(`${MEMPOOL_API_BASE_URL}/block-height/${height}`);
      
      if (!hashResponse.ok) {
        throw new Error("Blok nenalezen nebo došlo k chybě při načítání dat");
      }
      
      const blockHash = await hashResponse.text();
      
      // Then get the block details using the hash
      const blockResponse = await fetch(`${MEMPOOL_API_BASE_URL}/block/${blockHash}`);
      
      if (!blockResponse.ok) {
        throw new Error("Nepodařilo se načíst detaily bloku");
      }
      
      const blockInfo = await blockResponse.json();
      
      // Format the block data
      const formattedData = {
        hash: blockInfo.id,
        height: blockInfo.height,
        timestamp: new Date(blockInfo.timestamp * 1000).toISOString(),
        nonce: blockInfo.nonce,
        difficulty: blockInfo.difficulty,
        merkleRoot: blockInfo.merkle_root,
        version: `0x${blockInfo.version.toString(16)}`,
        bits: blockInfo.bits,
        size: blockInfo.size,
        weight: blockInfo.weight,
        transactionCount: blockInfo.tx_count,
        miner: getMinerFromCoinbaseText(blockInfo.extras?.coinbase_text || "Unknown"),
        reward: 6.25 // This should be calculated based on block height
      };

      setBlockData(formattedData);
      setAddressData(null);
      setTxData(null);
      setActiveTab("block");
    } catch (error) {
      console.error("Error fetching block data:", error);
      throw new Error("Nepodařilo se načíst data bloku. Zkontrolujte, zda je výška bloku platná.");
    }
  };

  // Helper function to identify miners from coinbase text
  const getMinerFromCoinbaseText = (coinbaseText: string): string => {
    const minerSignatures: Record<string, string> = {
      "/Antpool/": "AntPool",
      "/F2Pool/": "F2Pool",
      "/Poolin/": "Poolin",
      "/ViaBTC/": "ViaBTC",
      "/Foundry/": "Foundry USA",
      "/Binance/": "Binance Pool",
      "/SlushPool/": "SlushPool",
      "/MARA/": "Marathon",
      "/SBI/": "SBI Crypto"
    };

    for (const [signature, miner] of Object.entries(minerSignatures)) {
      if (coinbaseText.includes(signature.replace(/\//g, ""))) {
        return miner;
      }
    }

    return "Unknown";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Zkopírováno",
          description: "Text byl zkopírován do schránky",
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('cs-CZ');
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
              Blockchain Explorer
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prozkoumejte transakce, adresy a bloky přímo na Bitcoin blockchainu.
            </p>
          </div>

          <Card className="shadow-lg mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Zadejte Bitcoin adresu, hash transakce nebo výšku bloku"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 text-lg py-6"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue md:w-auto"
                  disabled={loading}
                >
                  {loading ? "Vyhledávání..." : "Vyhledat"}
                </Button>
              </form>
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {error}
                </div>
              )}
            </CardContent>
          </Card>

          {(addressData || txData || blockData) && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="address" disabled={!addressData}>Adresa</TabsTrigger>
                <TabsTrigger value="transaction" disabled={!txData}>Transakce</TabsTrigger>
                <TabsTrigger value="block" disabled={!blockData}>Blok</TabsTrigger>
              </TabsList>

              <TabsContent value="address">
                {addressData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-bitcoin-blue flex items-center mb-2">
                        Detaily adresy
                      </CardTitle>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 font-mono mr-2">{addressData.address}</span>
                        <button 
                          onClick={() => copyToClipboard(addressData.address)} 
                          className="text-gray-400 hover:text-gray-700"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Zůstatek</p>
                          <p className="text-2xl font-bold text-bitcoin-blue">{addressData.balance} BTC</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Počet transakcí</p>
                          <p className="text-2xl font-bold text-bitcoin-blue">{addressData.transactionCount}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Celkem přijato</p>
                          <p className="text-2xl font-bold text-green-600">{addressData.totalReceived} BTC</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Celkem odesláno</p>
                          <p className="text-2xl font-bold text-red-600">{addressData.totalSent} BTC</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-bitcoin-blue mb-4">Poslední transakce</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="py-3 px-4 text-left font-semibold text-gray-700">Hash transakce</th>
                              <th className="py-3 px-4 text-left font-semibold text-gray-700">Datum</th>
                              <th className="py-3 px-4 text-left font-semibold text-gray-700">Částka</th>
                              <th className="py-3 px-4 text-left font-semibold text-gray-700">Potvrzení</th>
                            </tr>
                          </thead>
                          <tbody>
                            {addressData.transactions.map((tx: any, index: number) => (
                              <tr key={index} className="border-b">
                                <td className="py-3 px-4">
                                  <div className="flex items-center">
                                    <span className="font-mono text-sm truncate max-w-xs">{tx.txid}</span>
                                    <button 
                                      onClick={() => copyToClipboard(tx.txid)} 
                                      className="ml-2 text-gray-400 hover:text-gray-700"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </button>
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-sm">{formatDate(tx.timestamp)}</td>
                                <td className={`py-3 px-4 ${tx.type === 'received' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                                  {tx.type === 'received' ? '+' : '-'}{tx.amount} BTC
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center">
                                    <Check className={`h-4 w-4 mr-1 ${tx.confirmations > 6 ? 'text-green-600' : 'text-yellow-600'}`} />
                                    {tx.confirmations}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <a 
                        href={`https://mempool.space/cs/address/${addressData.address}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                          Zobrazit na Mempool.space <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="transaction">
                {txData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-bitcoin-blue flex items-center mb-2">
                        Detaily transakce
                      </CardTitle>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 font-mono mr-2">{txData.txid}</span>
                        <button 
                          onClick={() => copyToClipboard(txData.txid)} 
                          className="text-gray-400 hover:text-gray-700"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Status</p>
                          <div className="flex items-center">
                            <div className={`h-2.5 w-2.5 rounded-full ${txData.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'} mr-2`}></div>
                            <span className="font-medium capitalize">{txData.status}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Datum a čas</p>
                          <p>{formatDate(txData.timestamp)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Výška bloku</p>
                          <p>{txData.blockHeight}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Potvrzení</p>
                          <p>{txData.confirmations}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Velikost</p>
                          <p>{txData.size} bytes</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Poplatek</p>
                          <p>{txData.fee} BTC</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-bitcoin-blue mb-4">Vstupy</h3>
                        <div className="space-y-3">
                          {txData.inputs.map((input: any, index: number) => (
                            <div key={index} className="p-3 border rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <span className="font-mono text-sm truncate max-w-xs">{input.address}</span>
                                  {input.address !== 'Coinbase' && (
                                    <button 
                                      onClick={() => copyToClipboard(input.address)} 
                                      className="ml-2 text-gray-400 hover:text-gray-700"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </button>
                                  )}
                                </div>
                                <span className="font-medium">{input.value} BTC</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-bitcoin-blue mb-4">Výstupy</h3>
                        <div className="space-y-3">
                          {txData.outputs.map((output: any, index: number) => (
                            <div key={index} className="p-3 border rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <span className="font-mono text-sm truncate max-w-xs">{output.address}</span>
                                  {output.address !== 'OP_RETURN' && (
                                    <button 
                                      onClick={() => copyToClipboard(output.address)} 
                                      className="ml-2 text-gray-400 hover:text-gray-700"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </button>
                                  )}
                                </div>
                                <span className="font-medium">{output.value} BTC</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <a 
                        href={`https://mempool.space/cs/tx/${txData.txid}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mr-4"
                      >
                        <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Zobrazit na Mempool.space
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="block">
                {blockData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-bitcoin-blue flex items-center mb-2">
                        Detaily bloku
                      </CardTitle>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">Výška: {blockData.height}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Hash bloku</p>
                          <div className="flex items-center">
                            <span className="font-mono text-sm truncate max-w-xs">{blockData.hash}</span>
                            <button 
                              onClick={() => copyToClipboard(blockData.hash)} 
                              className="ml-2 text-gray-400 hover:text-gray-700"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Datum a čas</p>
                          <p>{formatDate(blockData.timestamp)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Velikost</p>
                          <p>{blockData.size} bytes</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Počet transakcí</p>
                          <p>{blockData.transactionCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Odměna</p>
                          <p>{blockData.reward} BTC</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Těžař</p>
                          <p>{blockData.miner}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Nonce</p>
                          <p>{blockData.nonce}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Obtížnost</p>
                          <p>{blockData.difficulty}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Merkle Root</p>
                          <div className="flex items-center">
                            <span className="font-mono text-sm truncate max-w-xs">{blockData.merkleRoot}</span>
                            <button 
                              onClick={() => copyToClipboard(blockData.merkleRoot)} 
                              className="ml-2 text-gray-400 hover:text-gray-700"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Verze</p>
                          <p>{blockData.version}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <a 
                        href={`https://mempool.space/cs/block/${blockData.hash}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mr-4"
                      >
                        <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Zobrazit na Mempool.space
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-bitcoin-blue">Co je Blockchain Explorer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Blockchain Explorer je nástroj, který umožňuje prohlížet a vyhledávat data na Bitcoin blockchainu, 
                  včetně transakcí, adres, bloků a dalších informací.
                </p>
                <p className="text-gray-600">
                  Pomocí našeho exploreru můžete:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
                  <li>Sledovat zůstatky a historii Bitcoin adres</li>
                  <li>Ověřovat transakce a jejich status</li>
                  <li>Zkoumat bloky a jejich obsah</li>
                  <li>Analyzovat síťové statistiky</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-bitcoin-blue">Jak používat Explorer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jednoduše zadejte do vyhledávacího pole některý z následujících údajů:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Bitcoin adresu</strong> - např. bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</li>
                  <li><strong>Hash transakce</strong> - 64 znaků, např. a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d</li>
                  <li><strong>Výšku bloku</strong> - číslo bloku, např. 767123</li>
                  <li><strong>Hash bloku</strong> - 64 znaků začínajících několika nulami</li>
                </ul>
                <div className="mt-4 flex items-center p-3 bg-yellow-50 text-yellow-800 rounded-md">
                  <Info className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-sm">
                    Náš explorer využívá veřejné Mempool API pro zobrazení dat v reálném čase přímo z Bitcoinové sítě.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-bitcoin-orange/5 border border-bitcoin-orange/20 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-start">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="h-12 w-12 rounded-full bg-bitcoin-orange/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-bitcoin-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bitcoin-blue mb-2">Statistiky Bitcoin sítě</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Aktuální výška</p>
                    <p className="text-lg font-bold text-bitcoin-blue">{networkStats?.height || "Načítání..."}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hash rate</p>
                    <p className="text-lg font-bold text-bitcoin-blue">
                      {networkStats ? `${(networkStats.hashrate / 1e18).toFixed(1)} EH/s` : "Načítání..."}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Průměrný čas bloku</p>
                    <p className="text-lg font-bold text-bitcoin-blue">
                      {networkStats ? `${(networkStats.avgBlockTime / 60).toFixed(2)} min` : "Načítání..."}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Obtížnost</p>
                    <p className="text-lg font-bold text-bitcoin-blue">
                      {networkStats ? `${(networkStats.difficulty / 1e12).toFixed(2)} T` : "Načítání..."}
                    </p>
                  </div>
                </div>
                <a 
                  href="https://mempool.space/cs/mining" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                    Zobrazit více statistik <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlockchainExplorer;
