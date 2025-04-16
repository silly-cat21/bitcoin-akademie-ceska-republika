
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const TradingCourse = () => {
  useEffect(() => {
    document.title = "Investice do Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Investice do Bitcoinu</h1>
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Připravujeme obsah</AlertTitle>
          <AlertDescription>
            Kurz o investování do Bitcoinu je aktuálně ve vývoji. Brzy zde najdete veškeré informace o investičních strategiích.
          </AlertDescription>
        </Alert>
        <div className="prose max-w-none">
          <p>
            Tento kurz vás provede světem investování do Bitcoinu, od základních principů až po pokročilé strategie.
            Naučíte se, jak vyhodnotit své investiční cíle, minimalizovat rizika a vytvořit dlouhodobý investiční plán.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Co se naučíte</h2>
          <ul>
            <li>Základní investiční strategie pro Bitcoin</li>
            <li>Dollar Cost Averaging (DCA) vs. lump sum investice</li>
            <li>Jak stanovit investiční cíle a časový horizont</li>
            <li>Psychologické aspekty investování v volatilním trhu</li>
            <li>Technická a fundamentální analýza</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default TradingCourse;
