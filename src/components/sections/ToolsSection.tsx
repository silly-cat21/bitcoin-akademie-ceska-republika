
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Repeat, BarChart, Wallet, Lock, ExternalLink, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "Bitcoin Kalkulačka",
    description: "Převádějte mezi BTC a CZK nebo EUR v reálném čase s aktuálními kurzy.",
    icon: Calculator,
    path: "/nastroje/kalkulacka"
  },
  {
    title: "Konvertor jednotek",
    description: "Přepočítávejte mezi satoshi, bits, mBTC a BTC jednoduchým způsobem.",
    icon: Repeat,
    path: "/nastroje/konvertor"
  },
  {
    title: "Cenový graf",
    description: "Interaktivní grafy cen Bitcoinu s historickými daty a technickými indikátory.",
    icon: BarChart,
    path: "/nastroje/grafy"
  },
  {
    title: "Lightning peněženky",
    description: "Porovnání a hodnocení nejlepších Lightning Network peněženek.",
    icon: Zap,
    path: "/nastroje/lightning-wallets"
  },
  {
    title: "Generátor peněženky",
    description: "Vytvořte si papírovou peněženku pro dlouhodobé a bezpečné uchovávání Bitcoinu.",
    icon: Wallet,
    path: "/nastroje/penezenka"
  }
];

const ToolsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bitcoin-blue mb-4">
            Praktické Bitcoin Nástroje
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Využijte naše bezplatné nástroje, které vám pomohou lépe pracovat s Bitcoinem a porozumět jeho ekosystému.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                  <tool.icon className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <CardTitle className="text-xl text-bitcoin-blue">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600">{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={tool.path} className="w-full">
                  <Button variant="outline" className="w-full border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
                    Použít nástroj
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-bitcoin-blue mb-2">Blockchain Explorer</h3>
              <p className="text-gray-600 mb-4">
                Potřebujete prozkoumat transakce nebo adresy přímo na blockchainu? Využijte náš propojený blockchain explorer.
              </p>
              <Link to="/nastroje/explorer">
                <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
                  Otevřít Explorer <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative w-full md:w-96 h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <Lock className="h-16 w-16 text-gray-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
