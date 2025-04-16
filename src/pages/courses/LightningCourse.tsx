
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const LightningCourse = () => {
  useEffect(() => {
    document.title = "Lightning Network | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Lightning Network</h1>
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Připravujeme obsah</AlertTitle>
          <AlertDescription>
            Kurz o Lightning Network je aktuálně ve vývoji. Brzy zde najdete veškeré informace o této technologii.
          </AlertDescription>
        </Alert>
        <div className="prose max-w-none">
          <p>
            Tento kurz se zaměřuje na Lightning Network - druhou vrstvu Bitcoinu, která umožňuje rychlé a levné transakce.
            Pochopíte, jak Lightning Network funguje, jak si nastavit vlastní node a jak provádět platby.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Co se naučíte</h2>
          <ul>
            <li>Technické základy Lightning Network</li>
            <li>Jak si nastavit vlastní Lightning node</li>
            <li>Otevírání a správa kanálů</li>
            <li>Lightning peněženky a jejich používání</li>
            <li>Bezpečnost v Lightning Network</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default LightningCourse;
