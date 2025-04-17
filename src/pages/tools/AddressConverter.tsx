
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AddressConverter = () => {
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // V této vývojové verzi pouze zobrazíme informační toast
    toast({
      title: "Vývojová verze",
      description: "Konverze adres bude brzy k dispozici. Zatím je nástroj ve vývoji.",
    });
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Bitcoin Address Converter</h1>
        
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Vývojová verze</AlertTitle>
          <AlertDescription>
            Tento nástroj je ve vývoji. Brzy umožní konverzi mezi různými formáty Bitcoin adres.
          </AlertDescription>
        </Alert>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Bitcoin adresa
              </label>
              <Input
                id="address"
                placeholder="Vložte Bitcoin adresu..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-bitcoin-orange hover:bg-bitcoin-orange/90">
              Převést adresu
            </Button>
          </form>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Podporované formáty</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Legacy adresy (začínají číslem 1)</li>
            <li>Native SegWit adresy (začínají bc1q)</li>
            <li>Taproot adresy (začínají bc1p)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">K čemu slouží různé formáty adres?</h2>
          <p>
            Bitcoin má několik formátů adres, každý s vlastními výhodami:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Legacy adresy jsou původní formát, ale mají vyšší poplatky</li>
            <li>Native SegWit adresy nabízí nižší poplatky a lepší škálovatelnost</li>
            <li>Taproot adresy jsou nejnovější formát s vylepšeným soukromím a efektivitou</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddressConverter;
