
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for the chart
const data = [
  { date: 'Jan', price: 42000 },
  { date: 'Feb', price: 44500 },
  { date: 'Mar', price: 47000 },
  { date: 'Apr', price: 53000 },
  { date: 'May', price: 49000 },
  { date: 'Jun', price: 36000 },
  { date: 'Jul', price: 38000 },
  { date: 'Aug', price: 45000 },
  { date: 'Sep', price: 55000 },
  { date: 'Oct', price: 61000 },
  { date: 'Nov', price: 68000 },
  { date: 'Dec', price: 65000 },
];

const PriceChart = () => {
  useEffect(() => {
    document.title = "Bitcoin Cenový Graf | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Bitcoin Cenový Graf</h1>
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Vývojová verze</AlertTitle>
          <AlertDescription>
            Tato verze grafu používá ukázková data. Brzy zde najdete plně funkční graf s aktuálními daty.
          </AlertDescription>
        </Alert>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Vývoj ceny Bitcoinu za poslední rok</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} USD`, 'Cena']} />
                <Line type="monotone" dataKey="price" stroke="#F7931A" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-4">* Ukázková data, nejedná se o skutečný vývoj ceny</p>
        </div>
        
        <div className="prose max-w-none">
          <p>
            Bitcoin cenový graf vám umožňuje sledovat historický vývoj ceny Bitcoinu. Kromě základního grafu
            budou brzy k dispozici také pokročilé funkce jako technické indikátory, různé časové rámce a další.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Plánované funkce</h2>
          <ul>
            <li>Zobrazení v různých časových rámcích (den, týden, měsíc, rok)</li>
            <li>Přepínání mezi různými měnami (USD, EUR, CZK)</li>
            <li>Technické indikátory (RSI, MACD, Bollinger Bands)</li>
            <li>Export dat a grafů</li>
            <li>Upozornění na cenové hladiny</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default PriceChart;
