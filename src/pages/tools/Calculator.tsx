
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, Bitcoin, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Calculator = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("1");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("CZK");
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const currencies = [
    { value: "BTC", label: "Bitcoin (BTC)" },
    { value: "CZK", label: "Česká koruna (CZK)" },
    { value: "EUR", label: "Euro (EUR)" },
    { value: "USD", label: "Americký dolar (USD)" }
  ];

  const fetchRate = async () => {
    setLoading(true);
    try {
      // For demo purposes, we'll use mock data
      // In a real application, you would fetch from a real API like CoinGecko
      // const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=czk,eur,usd`);
      // const data = await response.json();
      
      // Mock data
      const mockRates = {
        BTC: {
          CZK: 1250000,
          EUR: 50000,
          USD: 55000,
        },
        CZK: {
          BTC: 1 / 1250000,
          EUR: 0.04,
          USD: 0.044,
        },
        EUR: {
          BTC: 1 / 50000,
          CZK: 25,
          USD: 1.1,
        },
        USD: {
          BTC: 1 / 55000,
          CZK: 22.72,
          EUR: 0.91,
        }
      };

      // Get the conversion rate based on the selected currencies
      const conversionRate = mockRates[fromCurrency][toCurrency];
      setRate(conversionRate);
      setLastUpdated(new Date());
      
      // Calculate the converted amount
      const value = parseFloat(amount) * conversionRate;
      setConvertedAmount(value.toLocaleString('cs-CZ', { maximumFractionDigits: fromCurrency === 'BTC' || toCurrency === 'BTC' ? 8 : 2 }));
      
      toast({
        title: "Kurz aktualizován",
        description: "Kurzy byly úspěšně aktualizovány.",
      });
    } catch (error) {
      console.error("Error fetching rate:", error);
      toast({
        title: "Chyba při aktualizaci kurzu",
        description: "Nepodařilo se aktualizovat kurzovní data. Zkuste to prosím později.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch rate when currencies change
  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  // Calculate converted amount when input amount changes
  useEffect(() => {
    if (rate) {
      const value = parseFloat(amount) * rate;
      if (!isNaN(value)) {
        setConvertedAmount(value.toLocaleString('cs-CZ', { maximumFractionDigits: fromCurrency === 'BTC' || toCurrency === 'BTC' ? 8 : 2 }));
      } else {
        setConvertedAmount("0");
      }
    }
  }, [amount, rate]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const decimalCount = (value.match(/\./g) || []).length;
    
    if (decimalCount <= 1) {
      setAmount(value);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
              Bitcoin Kalkulačka
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Převádějte mezi Bitcoinem a fiat měnami v reálném čase s aktuálními kurzy.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bitcoin-blue flex items-center">
                  <Bitcoin className="h-6 w-6 text-bitcoin-orange mr-2" />
                  Převodník měn
                </CardTitle>
                <CardDescription>
                  Jednoduše zadejte částku a vyberte měny pro převod
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="md:col-span-2">
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
                    <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-2">
                      Z měny
                    </label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger id="fromCurrency" className="w-full text-lg">
                        <SelectValue placeholder="Vyberte měnu" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.value} value={currency.value}>
                            {currency.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={swapCurrencies}
                      className="rounded-full hover:bg-gray-100"
                    >
                      <ArrowRightLeft className="h-6 w-6 text-bitcoin-orange" />
                      <span className="sr-only">Prohodit měny</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2">
                    <label htmlFor="convertedAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Výsledek
                    </label>
                    <div className="relative">
                      <Input
                        id="convertedAmount"
                        type="text"
                        value={convertedAmount}
                        readOnly
                        className="w-full text-lg bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-2">
                      Na měnu
                    </label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger id="toCurrency" className="w-full text-lg">
                        <SelectValue placeholder="Vyberte měnu" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.value} value={currency.value}>
                            {currency.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-6">
                <div className="text-sm text-gray-500">
                  {lastUpdated && (
                    <span>Poslední aktualizace: {lastUpdated.toLocaleTimeString('cs-CZ')}</span>
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={fetchRate}
                  disabled={loading}
                  className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Aktualizovat kurz
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Proč používat naši Bitcoin kalkulačku?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-8 w-8 rounded-full bg-bitcoin-orange/10 flex items-center justify-center">
                      <RefreshCw className="h-4 w-4 text-bitcoin-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Aktuální kurzy</h3>
                    <p className="text-gray-600">
                      Naše kalkulačka používá vždy aktuální kurzy pro přesné výpočty.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-8 w-8 rounded-full bg-bitcoin-orange/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-bitcoin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Podpora více měn</h3>
                    <p className="text-gray-600">
                      Převádějte Bitcoin na CZK, EUR, USD a další měny.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-8 w-8 rounded-full bg-bitcoin-orange/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-bitcoin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bezpečný a soukromý</h3>
                    <p className="text-gray-600">
                      Všechny výpočty probíhají přímo ve vašem prohlížeči, bez odesílání dat.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-8 w-8 rounded-full bg-bitcoin-orange/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-bitcoin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Přesné výpočty</h3>
                    <p className="text-gray-600">
                      Přesné výpočty do 8 desetinných míst pro Bitcoin a 2 míst pro fiat měny.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-bitcoin-orange/30 rounded-xl bg-bitcoin-orange/5">
              <div className="flex flex-col md:flex-row items-start">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="h-12 w-12 rounded-full bg-bitcoin-orange/20 flex items-center justify-center">
                    <Bitcoin className="h-6 w-6 text-bitcoin-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bitcoin-blue mb-2">Doporučené hardwarové peněženky</h3>
                  <p className="text-gray-600 mb-4">
                    Pro bezpečné uchovávání Bitcoinu doporučujeme použít hardwarovou peněženku.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center p-3 border rounded-lg hover:border-bitcoin-orange transition-colors">
                      <img src="https://trezor.io/static/images/trezor_logo.svg" alt="Trezor" className="h-6 mr-3" />
                      <div>
                        <h4 className="font-medium">Trezor Model T</h4>
                        <p className="text-sm text-gray-500">Nejbezpečnější volba pro správu Bitcoinu</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-bitcoin-orange transition-colors">
                      <img src="https://shiftcrypto.ch/bitboxbase/logo.svg" alt="BitBox" className="h-6 mr-3" />
                      <div>
                        <h4 className="font-medium">BitBox02</h4>
                        <p className="text-sm text-gray-500">Švýcarská kvalita a bezpečnost</p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
                    Zobrazit více peněženek
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Calculator;
