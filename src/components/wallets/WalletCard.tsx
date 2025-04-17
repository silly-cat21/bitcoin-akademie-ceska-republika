
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

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

interface WalletCardProps {
  wallet: WalletType;
}

const WalletCard = ({ wallet }: WalletCardProps) => {
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

export default WalletCard;
