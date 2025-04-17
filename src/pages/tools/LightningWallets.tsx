
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Zap, Check, Smartphone, Globe, Server, ShieldCheck, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const wallets = [
  {
    id: "phoenix",
    name: "Phoenix",
    description: "Uživatelsky přívětivá peněženka s automatickým správcem kanálů",
    developer: "ACINQ",
    platforms: ["Android", "iOS"],
    custodial: false,
    features: ["Automatické otevírání kanálů", "Jednoduché UX", "Splicing", "Backup", "Tor podpora"],
    pros: ["Velmi jednoduchá na používání", "Automatický management kanálů", "Kvalitní vývojářský tým"],
    cons: ["Méně pokročilých funkcí", "Vyšší poplatky za otevření kanálu"],
    rating: 4.5,
    tags: ["začátečníci", "střední bezpečnost", "nízké poplatky"],
    imageUrl: "https://images.unsplash.com/photo-1626163616138-a9c9edc39ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "breez",
    name: "Breez",
    description: "Všestranná non-custodial LN peněženka s integrovaným POS systémem",
    developer: "Breez Technology",
    platforms: ["Android", "iOS"],
    custodial: false,
    features: ["Podcast player", "POS systém", "Submarine swaps", "LNURL", "Neutrino"],
    pros: ["Mnoho integrovaných funkcí", "Skvělé pro obchodníky", "Otevřený zdrojový kód"],
    cons: ["Občasné problémy s konektivitou", "Pro začátečníky může být komplikovaná"],
    rating: 4.3,
    tags: ["pokročilí", "střední bezpečnost", "obchodníci"],
    imageUrl: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "muun",
    name: "Muun",
    description: "Hybridní peněženka s podporou on-chain i Lightning transakcí",
    developer: "Muun",
    platforms: ["Android", "iOS"],
    custodial: false,
    features: ["On-chain i LN transakce", "Vlastní řešení pro obnovu", "Multi-sig", "Nízké poplatky"],
    pros: ["Velmi jednoduché UX", "Bezpečnostní model", "Dobrá podpora"],
    cons: ["Není plně Lightning", "Omezená kontrola nad poplatky"],
    rating: 4.4,
    tags: ["začátečníci", "vysoká bezpečnost", "hybridní"],
    imageUrl: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "wos",
    name: "Wallet of Satoshi",
    description: "Nejjednodušší způsob, jak začít používat Lightning Network",
    developer: "Wallet of Satoshi",
    platforms: ["Android", "iOS", "Web"],
    custodial: true,
    features: ["Okamžitý setup", "Žádná správa kanálů", "Intuitivní UX", "Instant platby"],
    pros: ["Extrémně jednoduchá", "Žádná údržba", "Ideální pro začátečníky"],
    cons: ["Custodial (třetí strana spravuje klíče)", "Limitované částky", "Nižší soukromí"],
    rating: 4.2,
    tags: ["začátečníci", "nízká bezpečnost", "nulová údržba"],
    imageUrl: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "zeus",
    name: "Zeus",
    description: "Mobilní peněženka pro pokročilé uživatele s vlastním LN nodem",
    developer: "Zeus",
    platforms: ["Android", "iOS"],
    custodial: false,
    features: ["Napojení na vlastní node", "MPP platby", "Keysend", "LNURL", "Vysoce konfigurovatelná"],
    pros: ["Plná kontrola", "Propojení s vlastním nodem", "Komunita vývojářů"],
    cons: ["Vyžaduje technické znalosti", "Nutný vlastní node", "Složitější setup"],
    rating: 4.7,
    tags: ["experti", "vysoká bezpečnost", "vlastní node"],
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "bluewallet",
    name: "BlueWallet",
    description: "Všestranná Bitcoin a Lightning peněženka s mnoha funkcemi",
    developer: "BlueWallet Services S.R.L",
    platforms: ["Android", "iOS"],
    custodial: true,
    features: ["On-chain i LN podporra", "Vlastní LNDHub", "Watch-only účty", "Více peněženek"],
    pros: ["Mnoho pokročilých funkcí", "Dobrá dokumentace", "Možnost vlastního LNDHub"],
    cons: ["Lightning je custodial ve výchozím nastavení", "Občasné problémy se stabilitou"],
    rating: 4.1,
    tags: ["pokročilí", "střední bezpečnost", "multi-wallet"],
    imageUrl: "https://images.unsplash.com/photo-1608614815778-56d3488aa7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

type WalletType = (typeof wallets)[0];

const WalletCard = ({ wallet }: { wallet: WalletType }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-bitcoin-blue">{wallet.name}</CardTitle>
          <Badge variant={wallet.custodial ? "destructive" : "default"}>
            {wallet.custodial ? "Custodial" : "Non-custodial"}
          </Badge>
        </div>
        <CardDescription className="text-sm">{wallet.description}</CardDescription>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <div className="aspect-video mb-4 overflow-hidden rounded-md bg-gray-100">
          <img src={wallet.imageUrl} alt={wallet.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500 flex items-center mb-1">
            <Globe className="h-4 w-4 mr-2 text-bitcoin-orange" />
            <span><strong>Vývojář:</strong> {wallet.developer}</span>
          </p>
          <p className="text-sm text-gray-500 flex items-center mb-1">
            <Smartphone className="h-4 w-4 mr-2 text-bitcoin-orange" />
            <span><strong>Platformy:</strong> {wallet.platforms.join(", ")}</span>
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            <ShieldCheck className="h-4 w-4 mr-2 text-bitcoin-orange" />
            <span><strong>Hodnocení:</strong> {wallet.rating}/5</span>
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {wallet.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Zap className="h-4 w-4 mr-1 text-bitcoin-orange" /> Klíčové funkce
            </h4>
            <ul className="text-sm space-y-1">
              {wallet.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
          Zobrazit detaily
        </Button>
      </CardFooter>
    </Card>
  );
};

const LightningWallets = () => {
  useEffect(() => {
    document.title = "Lightning Peněženky | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4 flex items-center justify-center">
            <Zap className="h-8 w-8 md:h-10 md:w-10 text-bitcoin-orange mr-3" />
            Porovnání Lightning Peněženek
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Přehled a srovnání nejlepších Lightning Network peněženek. Najděte tu, která nejlépe vyhovuje vašim potřebám.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">Všechny</TabsTrigger>
              <TabsTrigger value="beginners">Pro začátečníky</TabsTrigger>
              <TabsTrigger value="advanced">Pro pokročilé</TabsTrigger>
              <TabsTrigger value="non-custodial">Non-custodial</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallets.map((wallet) => (
                <WalletCard key={wallet.id} wallet={wallet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="beginners">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallets.filter(w => w.tags.includes("začátečníci")).map((wallet) => (
                <WalletCard key={wallet.id} wallet={wallet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="advanced">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallets.filter(w => w.tags.includes("pokročilí") || w.tags.includes("experti")).map((wallet) => (
                <WalletCard key={wallet.id} wallet={wallet} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="non-custodial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallets.filter(w => !w.custodial).map((wallet) => (
                <WalletCard key={wallet.id} wallet={wallet} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Custodial vs. Non-custodial: Jaký je rozdíl?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Server className="h-5 w-5 mr-2 text-red-500" />
                Custodial peněženky
              </h3>
              <p className="text-gray-700 mb-3">
                U custodial peněženek spravuje vaše prostředky třetí strana. To znamená, že nemáte plnou kontrolu nad svými bitcoiny.
              </p>
              <div className="space-y-2">
                <p className="text-sm flex items-start">
                  <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Výhody:</strong> Jednoduché používání, žádná správa záloh, okamžité platby</span>
                </p>
                <p className="text-sm flex items-start text-red-700">
                  <Check className="h-4 w-4 mr-2 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Nevýhody:</strong> "Not your keys, not your coins", riziko hacků, závislost na třetí straně</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-green-500" />
                Non-custodial peněženky
              </h3>
              <p className="text-gray-700 mb-3">
                U non-custodial peněženek máte plnou kontrolu nad svými bitcoiny. Pouze vy vlastníte privátní klíče.
              </p>
              <div className="space-y-2">
                <p className="text-sm flex items-start">
                  <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Výhody:</strong> Plná kontrola, vyšší bezpečnost, větší soukromí</span>
                </p>
                <p className="text-sm flex items-start text-red-700">
                  <Check className="h-4 w-4 mr-2 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Nevýhody:</strong> Složitější použití, nutnost zálohování, větší zodpovědnost uživatele</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Chcete se naučit víc o Lightning Network?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Podívejte se na náš kompletní kurz o Lightning Network, kde vás provedeme od základů až po pokročilé koncepty.
          </p>
          <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
            <Link className="flex items-center" to="/kurzy/lightning">
              Zobrazit Lightning kurz
              <Zap className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default LightningWallets;
