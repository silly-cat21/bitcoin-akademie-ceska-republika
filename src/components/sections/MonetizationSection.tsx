
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle, Star } from "lucide-react";

const pricingPlans = [
  {
    title: "Základní",
    price: "Zdarma",
    description: "Začněte s učením o Bitcoinu bez jakýchkoliv poplatků",
    features: [
      "Přístup k základním kurzům",
      "Komunitní fórum",
      "Základní Bitcoin nástroje",
      "Týdenní newsletter"
    ],
    buttonText: "Začít zdarma",
    buttonVariant: "outline" as const
  },
  {
    title: "Premium",
    price: "499 Kč",
    period: "měsíčně",
    description: "Kompletní vzdělávací balíček pro vážné zájemce",
    features: [
      "Neomezený přístup ke všem kurzům",
      "Premium nástroje a analýzy",
      "Mesíční webináře s experty",
      "Prioritní podpora",
      "Certifikáty o dokončení kurzů",
      "Stažení materiálů offline"
    ],
    buttonText: "Začít s Premium",
    buttonVariant: "default" as const,
    highlighted: true
  },
  {
    title: "Podnikový",
    price: "Na vyžádání",
    description: "Řešení na míru pro firmy a organizace",
    features: [
      "Vše z Premium plánu",
      "Školení pro zaměstnance",
      "Individuální konzultace",
      "Vlastní firemní kurzy",
      "API přístup k nástrojům"
    ],
    buttonText: "Kontaktujte nás",
    buttonVariant: "outline" as const
  }
];

const MonetizationSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bitcoin-blue mb-4">
            Cenově dostupné plány
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vyberte si plán, který nejlépe odpovídá vašim potřebám. Začněte zdarma nebo získejte plný přístup k premium obsahu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.highlighted ? 'border-bitcoin-orange shadow-lg relative' : ''}`}>
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-bitcoin-orange text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Nejpopulárnější
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bitcoin-blue">{plan.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500 ml-1">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full ${plan.buttonVariant === 'default' ? 'bg-bitcoin-orange hover:bg-bitcoin-blue text-white' : 'border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white'}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-bitcoin-blue mb-4">Bitcoin platby</h3>
              <p className="text-gray-600 mb-4">
                Podporujeme to, co učíme. Přijímáme platby v Bitcoinu přes Lightning Network i on-chain transakce s 15% slevou na všechny plány.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                  <span className="text-gray-700">Lightning Network</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                  <span className="text-gray-700">On-chain platby</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                  <span className="text-gray-700">15% sleva při platbě BTC</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bitcoin platby" 
                className="w-full max-w-xs h-auto rounded-lg shadow-sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationSection;
