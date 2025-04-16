
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ExternalLink, Copy, Info, Check, AlertTriangle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlockchainExplorer = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("address");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addressData, setAddressData] = useState<any>(null);
  const [txData, setTxData] = useState<any>(null);
  const [blockData, setBlockData] = useState<any>(null);

  const mockAddressData = {
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    balance: 2.34567891,
    totalReceived: 15.67890123,
    totalSent: 13.33322232,
    transactionCount: 47,
    transactions: [
      {
        txid: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
        amount: 0.05231456,
        timestamp: "2023-11-23T14:22:31Z",
        confirmations: 3254,
        type: "received"
      },
      {
        txid: "7f2b89b7f6016d2b67d5b39d69a78c5a3c0d3d2a1f0e4c5b6a7d8e9f0a1b2c3d",
        amount: 0.12345678,
        timestamp: "2023-11-15T09:45:12Z",
        confirmations: 4589,
        type: "sent"
      },
      {
        txid: "3a2b1c0d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1",
        amount: 1.23456789,
        timestamp: "2023-10-28T18:33:45Z",
        confirmations: 7821,
        type: "received"
      }
    ]
  };

  const mockTxData = {
    txid: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    blockHeight: 767123,
    confirmations: 3254,
    timestamp: "2023-11-23T14:22:31Z",
    size: 225,
    weight: 900,
    fee: 0.00005431,
    status: "confirmed",
    inputs: [
      {
        address: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
        value: 0.1234567
      }
    ],
    outputs: [
      {
        address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
        value: 0.05231456
      },
      {
        address: "bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf",
        value: 0.07108783
      }
    ]
  };

  const mockBlockData = {
    hash: "000000000000000000024bead8df69990852c202db0e0097c1a12ea637d7e96d",
    height: 767123,
    timestamp: "2023-11-23T14:20:12Z",
    nonce: 3851918760,
    difficulty: 53911173001054.59,
    merkleRoot: "07a43723b7bc67f8b99ec3df72c4ddb51f58861fd0c022cd9da148124786bbdd",
    version: "0x2000e000",
    bits: "17053894",
    size: 1327405,
    weight: 3993416,
    transactionCount: 2876,
    miner: "AntPool",
    reward: 6.25
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!searchQuery.trim()) {
      setError("Prosím zadejte adresu, hash transakce nebo výšku bloku");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        // Check if it's a block height (only numbers)
        if (/^\d+$/.test(searchQuery)) {
          setActiveTab("block");
          setBlockData(mockBlockData);
          setAddressData(null);
          setTxData(null);
        }
        // Check if it might be a transaction hash (64 char hex)
        else if (/^[a-fA-F0-9]{64}$/.test(searchQuery)) {
          setActiveTab("transaction");
          setTxData(mockTxData);
          setAddressData(null);
          setBlockData(null);
        }
        // Assume it's an address
        else {
          setActiveTab("address");
          setAddressData(mockAddressData);
          setTxData(null);
          setBlockData(null);
        }
        
        toast({
          title: "Vyhledávání dokončeno",
          description: "Data byla úspěšně načtena.",
        });
      } catch (err) {
        setError("Nepodařilo se načíst data. Zkontrolujte prosím zadaný dotaz.");
        toast({
          title: "Chyba při vyhledávání",
          description: "Nepodařilo se načíst data. Zkontrolujte prosím zadaný dotaz.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }, 1500);
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
                      <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                        Zobrazit všechny transakce
                      </Button>
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
                                  <button 
                                    onClick={() => copyToClipboard(input.address)} 
                                    className="ml-2 text-gray-400 hover:text-gray-700"
                                  >
                                    <Copy className="h-4 w-4" />
                                  </button>
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
                                  <button 
                                    onClick={() => copyToClipboard(output.address)} 
                                    className="ml-2 text-gray-400 hover:text-gray-700"
                                  >
                                    <Copy className="h-4 w-4" />
                                  </button>
                                </div>
                                <span className="font-medium">{output.value} BTC</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white mr-4">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zobrazit raw transakci
                      </Button>
                      <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zobrazit v Mempoolu
                      </Button>
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
                      <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white mr-4">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zobrazit transakce v bloku
                      </Button>
                      <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zobrazit v Mempoolu
                      </Button>
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
                    Náš explorer je integrován s mnoha veřejnými Bitcoin API a poskytuje data v reálném čase.
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
                    <p className="text-lg font-bold text-bitcoin-blue">767,430</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hash rate</p>
                    <p className="text-lg font-bold text-bitcoin-blue">385.4 EH/s</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Průměrný čas bloku</p>
                    <p className="text-lg font-bold text-bitcoin-blue">9.48 min</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Obtížnost</p>
                    <p className="text-lg font-bold text-bitcoin-blue">53.91 T</p>
                  </div>
                </div>
                <Button variant="outline" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                  Zobrazit více statistik
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlockchainExplorer;
