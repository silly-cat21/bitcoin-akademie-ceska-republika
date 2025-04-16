
import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Copy, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const WalletGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [walletData, setWalletData] = useState({
    address: "",
    privateKey: ""
  });

  useEffect(() => {
    document.title = "Generátor Bitcoin Peněženky | Bitcoin Akademie";
  }, []);

  // This is a mock function that simulates generating a wallet
  // In a real app, this would use a proper Bitcoin library
  const generateWallet = () => {
    setIsGenerating(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Generate mock Bitcoin address and private key
      const mockAddress = "bc1q" + Array(40).fill(0).map(() => 
        "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");
      
      const mockPrivateKey = Array(64).fill(0).map(() => 
        "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");
      
      setWalletData({
        address: mockAddress,
        privateKey: mockPrivateKey
      });
      
      setIsGenerating(false);
      
      toast({
        title: "Peněženka vygenerována",
        description: "Nová Bitcoin peněženka byla úspěšně vygenerována.",
      });
    }, 1500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Zkopírováno do schránky",
      description: `${label} byl zkopírován do vaší schránky.`,
    });
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Generátor Bitcoin Peněženky</h1>
        
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Pouze pro vzdělávací účely</AlertTitle>
          <AlertDescription>
            Tento nástroj slouží pouze pro vzdělávací účely. Pro skutečné použití doporučujeme hardwarovou peněženku jako Trezor nebo BitBox.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Generátor papírové peněženky</h2>
            <p className="text-gray-700 mb-6">
              Tento nástroj vám umožní vytvořit papírovou Bitcoin peněženku. Vygenerovanou adresu a privátní klíč si můžete vytisknout a bezpečně uschovat.
            </p>
            <Button 
              onClick={generateWallet} 
              disabled={isGenerating}
              className="bg-bitcoin-orange hover:bg-bitcoin-blue text-white w-full md:w-auto"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generuji...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Vygenerovat novou peněženku
                </>
              )}
            </Button>
          </div>

          <Card className={`border-2 ${walletData.address ? 'border-bitcoin-orange' : 'border-gray-200'}`}>
            <CardHeader>
              <CardTitle>Vaše vygenerovaná peněženka</CardTitle>
              <CardDescription>
                Tyto údaje si bezpečně uložte a nikomu nesdělujte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Bitcoin adresa:</div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-3 rounded flex-1 overflow-x-auto text-sm font-mono">
                      {walletData.address || "Zatím není vygenerováno"}
                    </div>
                    {walletData.address && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => copyToClipboard(walletData.address, "Bitcoin adresa")}
                        className="ml-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Privátní klíč:</div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-3 rounded flex-1 overflow-x-auto text-sm font-mono">
                      {walletData.privateKey ? "****************************************" : "Zatím není vygenerováno"}
                    </div>
                    {walletData.privateKey && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => copyToClipboard(walletData.privateKey, "Privátní klíč")}
                        className="ml-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-xs text-red-500">
                {walletData.privateKey && "UPOZORNĚNÍ: Nikdy nesdílejte svůj privátní klíč!"}
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold">Proč používat papírovou peněženku?</h2>
          <p>
            Papírová peněženka je jedním z typů tzv. "cold storage" - způsobu uchovávání Bitcoinu offline, mimo dosah potenciálních hackerů.
            Je vhodná zejména pro dlouhodobé uchovávání Bitcoinu bez potřeby častého přístupu.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Bezpečnostní doporučení</h2>
          <ul>
            <li>Vygenerujte peněženku na zařízení, které není připojeno k internetu</li>
            <li>Nikdy neuchovávejte digitální kopie svých privátních klíčů online</li>
            <li>Vytiskněte více kopií a uložte je na bezpečná místa</li>
            <li>Zvažte laminování vytištěných peněženek pro ochranu před poškozením</li>
            <li>Pro větší částky zvažte použití hardwarové peněženky</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default WalletGenerator;
