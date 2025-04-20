
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { detectAddressType, convertAddress } from "@/utils/addressUtils";

const AddressConverter = () => {
  const [address, setAddress] = useState("");
  const [targetFormat, setTargetFormat] = useState<"legacy" | "segwit" | "taproot">("segwit");
  const [convertedAddress, setConvertedAddress] = useState("");
  const [sourceType, setSourceType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    setError(null);
    setConvertedAddress("");
    
    if (value) {
      const type = detectAddressType(value);
      setSourceType(type);
      
      if (!type) {
        setError("Neplatný formát Bitcoin adresy");
      } else if (type === targetFormat) {
        setError("Cílový formát je stejný jako zdrojový formát");
      }
    } else {
      setSourceType(null);
    }
  };
  
  const handleTargetFormatChange = (value: string) => {
    setTargetFormat(value as "legacy" | "segwit" | "taproot");
    setConvertedAddress("");
    setError(null);
    
    if (sourceType && sourceType === value) {
      setError("Cílový formát je stejný jako zdrojový formát");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address) {
      setError("Prosím zadejte Bitcoin adresu");
      return;
    }
    
    if (!sourceType) {
      setError("Neplatný formát Bitcoin adresy");
      return;
    }
    
    if (sourceType === targetFormat) {
      setError("Cílový formát je stejný jako zdrojový formát");
      return;
    }
    
    try {
      const result = convertAddress(address, targetFormat);
      setConvertedAddress(result);
      toast({
        title: "Adresa byla úspěšně převedena",
        description: `Z formátu ${sourceType} na formát ${targetFormat}`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Nastala chyba při konverzi adresy";
      setError(errorMessage);
      toast({
        title: "Chyba při konverzi",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-bitcoin-blue mb-6">Bitcoin Address Converter</h1>
        
        <Alert className="mb-6 border-bitcoin-orange">
          <Info className="h-4 w-4 text-bitcoin-orange" />
          <AlertTitle>Převod Bitcoin adres</AlertTitle>
          <AlertDescription>
            Tento nástroj umožňuje konverzi mezi různými formáty Bitcoin adres: Legacy (P2PKH), Native SegWit (P2WPKH) a Taproot (P2TR).
          </AlertDescription>
        </Alert>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Bitcoin adresa
              </label>
              <Input
                id="address"
                placeholder="Vložte Bitcoin adresu..."
                value={address}
                onChange={handleAddressChange}
                className={`w-full ${error ? 'border-red-500' : sourceType ? 'border-green-500' : ''}`}
              />
              {sourceType && !error && (
                <div className="text-sm text-green-600 mt-1 flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Detekován formát: <span className="font-medium ml-1">{sourceType}</span>
                </div>
              )}
              {error && (
                <div className="text-sm text-red-600 mt-1 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {error}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Cílový formát adresy
              </label>
              <RadioGroup 
                value={targetFormat} 
                onValueChange={handleTargetFormatChange}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="legacy" id="legacy" />
                  <Label htmlFor="legacy" className="cursor-pointer">Legacy (začíná 1)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="segwit" id="segwit" />
                  <Label htmlFor="segwit" className="cursor-pointer">Native SegWit (začíná bc1q)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="taproot" id="taproot" />
                  <Label htmlFor="taproot" className="cursor-pointer">Taproot (začíná bc1p)</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-bitcoin-orange hover:bg-bitcoin-orange/90"
              disabled={!sourceType || !!error}
            >
              Převést adresu
            </Button>
          </form>
          
          {convertedAddress && (
            <div className="mt-6 p-4 bg-green-50 rounded-md border border-green-200">
              <h3 className="font-medium text-green-800 mb-2">Převedená adresa:</h3>
              <div className="p-3 bg-white border border-green-300 rounded flex items-center break-all">
                {convertedAddress}
              </div>
            </div>
          )}
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
