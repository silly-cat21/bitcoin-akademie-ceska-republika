import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import WalletTabs from "@/components/wallets/WalletTabs";
import WalletComparisonInfo from "@/components/wallets/WalletComparisonInfo";

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

        <WalletTabs wallets={wallets} />
        <WalletComparisonInfo />

        <div className="text-center">
          <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Chcete se naučit víc o Lightning Network?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Podívejte se na náš kompletní kurz o Lightning Network, kde vás provedeme od základů až po pokročilé koncepty.
          </p>
          <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
            <Link to="/kurzy/lightning">
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
