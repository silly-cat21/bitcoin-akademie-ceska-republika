
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Info, Repeat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UnitOption {
  value: string;
  label: string;
  satoshis: number;
  description: string;
}

const UnitConverter = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("1");
  const [fromUnit, setFromUnit] = useState("btc");
  const [toUnit, setToUnit] = useState("satoshi");
  const [result, setResult] = useState("");

  const unitOptions: UnitOption[] = [
    { value: "satoshi", label: "Satoshi", satoshis: 1, description: "Nejmenší jednotka Bitcoinu (0.00000001 BTC)" },
    { value: "bit", label: "Bit", satoshis: 100, description: "100 satoshi nebo 0.00000100 BTC" },
    { value: "mbtc", label: "mBTC", satoshis: 100000, description: "Mili-Bitcoin (0.001 BTC)" },
    { value: "btc", label: "BTC", satoshis: 100000000, description: "Celý Bitcoin" }
  ];

  const convert = () => {
    try {
      const inputAmount = parseFloat(amount);
      if (isNaN(inputAmount)) {
        setResult("");
        return;
      }

      const fromOption = unitOptions.find(option => option.value === fromUnit);
      const toOption = unitOptions.find(option => option.value === toUnit);

      if (!fromOption || !toOption) {
        setResult("");
        return;
      }

      // Convert to satoshis first
      const satoshis = inputAmount * fromOption.satoshis;
      
      // Then convert from satoshis to target unit
      const converted = satoshis / toOption.satoshis;
      
      // Format the result based on the unit
      let formattedResult = converted.toString();
      
      if (toUnit === "satoshi") {
        formattedResult = Math.floor(converted).toLocaleString('cs-CZ');
      } else if (toUnit === "bit") {
        formattedResult = converted.toLocaleString('cs-CZ', { maximumFractionDigits: 2 });
      } else if (toUnit === "mbtc") {
        formattedResult = converted.toLocaleString('cs-CZ', { maximumFractionDigits: 5 });
      } else if (toUnit === "btc") {
        formattedResult = converted.toLocaleString('cs-CZ', { maximumFractionDigits: 8 });
      }
      
      setResult(formattedResult);
    } catch (error) {
      console.error("Conversion error:", error);
      toast({
        title: "Chyba při převodu",
        description: "Nepodařilo se provést převod. Zkontrolujte zadané hodnoty.",
        variant: "destructive",
      });
    }
  };

  // Convert when inputs change
  useEffect(() => {
    convert();
  }, [amount, fromUnit, toUnit]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const decimalCount = (value.match(/\./g) || []).length;
    
    if (decimalCount <= 1) {
      setAmount(value);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(
      () => {
        toast({
          title: "Zkopírováno",
          description: "Výsledek byl zkopírován do schránky",
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
        toast({
          title: "Chyba při kopírování",
          description: "Nepodařilo se zkopírovat výsledek do schránky",
          variant: "destructive",
        });
      }
    );
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
              Konvertor Bitcoin jednotek
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jednoduše převádějte mezi různými jednotkami Bitcoinu.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bitcoin-blue flex items-center">
                  <Repeat className="h-6 w-6 text-bitcoin-orange mr-2" />
                  Konvertor jednotek
                </CardTitle>
                <CardDescription>
                  Převod mezi satoshi, bits, mBTC a BTC
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Částka
                    </label>
                    <Input
                      id="amount"
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      className="w-full text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="fromUnit" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Z jednotky
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">{unitOptions.find(option => option.value === fromUnit)?.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger id="fromUnit" className="w-full text-lg">
                        <SelectValue placeholder="Vyberte jednotku" />
                      </SelectTrigger>
                      <SelectContent>
                        {unitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={swapUnits}
                      className="rounded-full hover:bg-gray-100"
                    >
                      <Repeat className="h-6 w-6 text-bitcoin-orange" />
                      <span className="sr-only">Prohodit jednotky</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2">
                    <label htmlFor="result" className="block text-sm font-medium text-gray-700 mb-2">
                      Výsledek
                    </label>
                    <div className="relative">
                      <Input
                        id="result"
                        type="text"
                        value={result}
                        readOnly
                        className="w-full text-lg bg-gray-50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        <Copy className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="toUnit" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Na jednotku
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">{unitOptions.find(option => option.value === toUnit)?.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Select value={toUnit} onValueChange={setToUnit}>
                      <SelectTrigger id="toUnit" className="w-full text-lg">
                        <SelectValue placeholder="Vyberte jednotku" />
                      </SelectTrigger>
                      <SelectContent>
                        {unitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-bitcoin-blue mb-6">Jednotky Bitcoinu</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Jednotka</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Hodnota v BTC</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Popis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Satoshi</td>
                      <td className="py-3 px-4">0.00000001 BTC</td>
                      <td className="py-3 px-4">Nejmenší jednotka Bitcoinu, pojmenovaná po tvůrci Bitcoinu Satoshi Nakamoto</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Bit</td>
                      <td className="py-3 px-4">0.00000100 BTC</td>
                      <td className="py-3 px-4">100 satoshi, užitečná jednotka pro mikroplatby</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">mBTC (mili-bitcoin)</td>
                      <td className="py-3 px-4">0.001 BTC</td>
                      <td className="py-3 px-4">Tisícina bitcoinu, vhodná pro běžné denní transakce</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">BTC</td>
                      <td className="py-3 px-4">1 BTC</td>
                      <td className="py-3 px-4">Celý bitcoin, základní jednotka</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 bg-bitcoin-orange/5 border border-bitcoin-orange/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-bitcoin-blue mb-4">Proč jsou jednotky Bitcoinu důležité?</h3>
              <p className="text-gray-700 mb-4">
                Vzhledem k vysoké hodnotě Bitcoinu je užitečné mít různé jednotky pro různé účely. Celé bitcoiny (BTC) jsou vhodné pro vyjádření větších hodnot, zatímco satoshi a bity jsou užitečné pro mikroplatby a každodenní transakce.
              </p>
              <p className="text-gray-700">
                S rostoucí adopcí Bitcoinu v budoucnosti může být běžnější používat menší jednotky jako satoshi namísto celých bitcoinů, podobně jako používáme haléře a koruny. Proto je důležité se s těmito jednotkami seznámit již nyní.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UnitConverter;
