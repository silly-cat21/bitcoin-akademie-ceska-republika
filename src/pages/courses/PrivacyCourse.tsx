
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, LockKeyhole, ChevronRight, PlayCircle, FileText, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Proč je soukromí v Bitcoinu důležité",
    description: "Základní principy finanční svobody a soukromí v digitálním věku",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Analýza blockchainu a její rizika",
    description: "Jak lze analyzovat veřejný blockchain a sledovat transakce",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Pseudonymita vs. anonymita",
    description: "Důležité rozdíly a jejich praktické dopady pro uživatele",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "CoinJoin a jeho implementace",
    description: "Techniky mixování Bitcoinů pro větší soukromí",
    duration: "90 min",
    type: "Workshop"
  },
  {
    title: "Lightning Network a soukromí",
    description: "Jak Lightning zvyšuje soukromí uživatelů Bitcoinu",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Samosprávné peněženky a KYC",
    description: "Jak si zachovat soukromí při nákupu a prodeji Bitcoinu",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "Praktický test znalostí",
    description: "Ověřte si své znalosti o soukromí v Bitcoinu",
    duration: "30 min",
    type: "Test"
  }
];

const PrivacyCourse = () => {
  useEffect(() => {
    document.title = "Soukromí v Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/kurzy" className="text-bitcoin-orange hover:text-bitcoin-blue flex items-center mb-4">
              <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
              Zpět na všechny kurzy
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
              Soukromí v Bitcoinu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Naučte se praktické techniky pro ochranu svého finančního soukromí v transparentním světě blockchainu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Soukromí v Bitcoinu" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
                <h2>O tomto kurzu</h2>
                <p>
                  Téma soukromí v Bitcoinu je pro mě osobně velmi důležité. Když jsem začínal s Bitcoinem, naivně jsem předpokládal, 
                  že anonymita je jednou z jeho hlavních vlastností. Postupem času a po několika vlastních chybách jsem pochopil, 
                  že Bitcoin je ve skutečnosti extrémně transparentní systém, kde každá transakce je navždy veřejně dostupná.
                </p>
                <p>
                  Tento kurz vznikl z mé frustrace nad tím, jak málo zdrojů v češtině existuje na téma bitcoinového soukromí. 
                  Většina uživatelů dělá základní chyby, které mohou vést k odhalení jejich identity a ohrozit jejich finanční 
                  soukromí. Přitom existují jednoduché techniky, jak si soukromí v Bitcoinu zachovat.
                </p>
                <p>
                  Musím zdůraznit, že nejsem zastáncem naprosté anonymity pro nelegální činnosti. Věřím však, že finanční soukromí 
                  je základním právem, stejně jako je soukromí naší komunikace nebo našeho domova. V době, kdy nás vlády a korporace 
                  stále více sledují, je ochrana finančního soukromí důležitější než kdy jindy.
                </p>
                <h2>Co se naučíte</h2>
                <ul>
                  <li>Proč je finanční soukromí důležité pro každého, nejen pro "kriminálníky"</li>
                  <li>Jak blockchain analýza ohrožuje vaše soukromí a jak fungují firmy jako Chainalysis</li>
                  <li>Praktické techniky pro oddělení vaší identity od vašich Bitcoinů</li>
                  <li>Jak používat CoinJoin pro zvýšení fungibility vašich mincí</li>
                  <li>Strategie pro nákup Bitcoinu bez KYC identifikace (a právní aspekty tohoto přístupu)</li>
                  <li>Jak využít Lightning Network pro zvýšení soukromí</li>
                </ul>
                <h2>Můj osobní pohled na soukromí v Bitcoinu</h2>
                <p>
                  Bitové mince nejsou tak anonymní, jak si mnoho lidí myslí. Dokonce bych řekl, že bez správných technik je Bitcoin 
                  jedním z nejméně soukromých platebních systémů. Každá transakce je navždy zaznamenána na blockchainu a je přístupná 
                  komukoliv s internetovým připojením.
                </p>
                <p>
                  Před několika lety jsem se sám přesvědčil o tom, jak snadné je sledovat pohyb Bitcoinů. Použil jsem stejnou peněženku 
                  pro příjem Bitcoinů z burzy a pro platbu za službu, kterou jsem chtěl držet v soukromí. Netrvalo dlouho a spojil jsem si, 
                  jak snadno by poskytovatel služby mohl identifikovat moji osobu prostřednictvím burzy. Od té doby studuji techniky 
                  bitcoinového soukromí a sdílím je s komunitou.
                </p>
                <p>
                  Vidím rostoucí tlak na regulaci Bitcoinu a omezování soukromí uživatelů. Věřím, že příští velká bitva o Bitcoin nebude 
                  technologická, ale politická - bude se týkat práva na finanční soukromí. Proto je klíčové, aby co nejvíce uživatelů pochopilo 
                  a začalo používat nástroje pro ochranu soukromí dříve, než budou zakázány nebo omezeny.
                </p>
                <h2>Pro koho je kurz určen</h2>
                <p>
                  Kurz je ideální pro:
                </p>
                <ul>
                  <li>Pokročilé uživatele Bitcoinu, kteří si cení svého finančního soukromí</li>
                  <li>Lidi, kteří se obávají sledování ze strany vlád nebo třetích stran</li>
                  <li>Ty, kteří chtějí pochopit technické aspekty bitcoinového soukromí</li>
                  <li>Obchodníky, kteří chtějí chránit soukromí svých zákazníků</li>
                </ul>
              </div>
            </div>
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-bitcoin-blue">Detaily kurzu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-2">Úroveň</p>
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="font-medium">Pokročilý</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Délka kurzu</p>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>7 lekcí (405 minut)</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Formát</p>
                    <div className="flex items-center">
                      <PlayCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>Video lekce, praktické workshopy, testy</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Certifikát</p>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>Po dokončení kurzu</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
                      Začít kurz
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      K dispozici v Premium členství
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-bitcoin-blue mb-6">
              Obsah kurzu
            </h2>
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-bitcoin-orange transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Lock className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{lesson.title}</h3>
                        <p className="text-gray-600">{lesson.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{lesson.duration}</span>
                      <div className="px-2 py-1 bg-gray-100 rounded">
                        {lesson.type === "Video" && <PlayCircle className="h-4 w-4" />}
                        {lesson.type === "Workshop" && <LockKeyhole className="h-4 w-4" />}
                        {lesson.type === "Test" && <FileText className="h-4 w-4" />}
                        <span className="sr-only">{lesson.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold text-bitcoin-blue mb-4">
                  Doporučený software pro soukromí
                </h2>
                <p className="text-gray-600 mb-6">
                  Pro maximální soukromí při používání Bitcoinu doporučujeme následující nástroje:
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Wasabi Wallet (CoinJoin)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Samourai Wallet (pokročilé funkce)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Bisq (decentralizovaná burza)</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Stáhnout doporučený software
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1502570974076-c03132e94094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Software pro soukromí" 
                  className="w-full h-auto rounded-lg shadow-sm" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyCourse;

// Lock component definition
const Lock = (props: any) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
};
