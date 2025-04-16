
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const EconomicsCourse = () => {
  useEffect(() => {
    document.title = "Ekonomické principy Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Ekonomické principy Bitcoinu</h1>
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Připravujeme obsah</AlertTitle>
          <AlertDescription>
            Kurz o ekonomických principech Bitcoinu je aktuálně ve vývoji. Brzy zde najdete veškeré informace o této oblasti.
          </AlertDescription>
        </Alert>
        <div className="prose max-w-none">
          <p>
            Tento kurz vás provede ekonomickými principy stojícími za Bitcoinem. Pochopíte monetární politiku Bitcoinu, 
            jeho roli v současném finančním systému a možný dopad na budoucnost ekonomiky.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Co se naučíte</h2>
          <ul>
            <li>Historie peněz a monetární teorie</li>
            <li>Bitcoin jako tvrdé peníze</li>
            <li>Inflace vs. deflace v kontextu Bitcoinu</li>
            <li>Ekonomické modely a predikce</li>
            <li>Bitcoin a současný finanční systém</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default EconomicsCourse;
