
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WalletCard from "./WalletCard";

type WalletType = {
  id: string;
  name: string;
  description: string;
  developer: string;
  platforms: string[];
  custodial: boolean;
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  tags: string[];
  imageUrl: string;
};

interface WalletTabsProps {
  wallets: WalletType[];
}

const WalletTabs = ({ wallets }: WalletTabsProps) => {
  return (
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
  );
};

export default WalletTabs;
