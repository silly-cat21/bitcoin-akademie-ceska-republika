
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const PrivacyCourse = () => {
  useEffect(() => {
    document.title = "Soukromí v Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Soukromí v Bitcoinu</h1>
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Připravujeme obsah</AlertTitle>
          <AlertDescription>
            Kurz o soukromí v Bitcoinu je aktuálně ve vývoji. Brzy zde najdete veškeré informace o této důležité oblasti.
          </AlertDescription>
        </Alert>
        <div className="prose max-w-none">
          <p>
            Tento kurz se zaměřuje na techniky a nástroje pro zvýšení soukromí při používání Bitcoinu. 
            Naučíte se, jak chránit svou finanční soukromí v transparentním světě blockchainu.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Co se naučíte</h2>
          <ul>
            <li>Základní principy soukromí v Bitcoinu</li>
            <li>Rozdíl mezi anonymitou a pseudonymitou</li>
            <li>Coinjoin a další techniky mixování</li>
            <li>Používání Lightning Network pro zvýšení soukromí</li>
            <li>Bezpečné praktiky pro zachování soukromí</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyCourse;
