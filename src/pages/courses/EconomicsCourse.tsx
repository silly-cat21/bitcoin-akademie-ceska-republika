
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Coins, ChevronRight, PlayCircle, FileText, CheckCircle, Award, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Historie peněz a monetární teorie",
    description: "Od barterového obchodu k digitálním penězům",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "Inflace a její dopady na společnost",
    description: "Proč centrální banky vytváří inflaci a kdo na tom získává",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Bitcoin jako tvrdé peníze",
    description: "Definice tvrdých peněz a proč Bitcoin splňuje jejich charakteristiky",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Austrian School of Economics",
    description: "Základní principy rakouské ekonomické školy a její relevance pro Bitcoin",
    duration: "120 min",
    type: "Video"
  },
  {
    title: "Stock-to-flow model a cenové predikce",
    description: "Analytické modely pro predikci hodnoty Bitcoinu",
    duration: "60 min",
    type: "Workshop"
  },
  {
    title: "Bitcoin v kontextu současné ekonomické krize",
    description: "Analýza aktuální ekonomické situace a role Bitcoinu",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Test ekonomických znalostí",
    description: "Ověřte si své znalosti o ekonomických principech Bitcoinu",
    duration: "45 min",
    type: "Test"
  }
];

const EconomicsCourse = () => {
  useEffect(() => {
    document.title = "Ekonomické principy Bitcoinu | Bitcoin Akademie";
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
              Ekonomické principy Bitcoinu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Pochopte monetární politiku Bitcoinu, jeho roli v současném finančním systému a potenciální dopad na budoucnost ekonomiky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Ekonomické principy Bitcoinu" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
                <h2>O tomto kurzu</h2>
                <p>
                  Když jsem v roce 2013 začal studovat Bitcoin, rychle jsem pochopil, že nejde jen o technologii, ale především o ekonomickou revoluci. 
                  Jako člověk, který studoval ekonomii na VŠE, jsem byl fascinován tím, jak Bitcoin přirozeně zapadá do principů rakouské ekonomické školy 
                  a zároveň zpochybňuje mnohé "pravdy", které nás učili o současném měnovém systému.
                </p>
                <p>
                  V tomto kurzu jsem se rozhodl sdílet své poznatky z let studia monetární teorie, inflace a role centrálních bank. Nečekejte učebnicové 
                  definice - spíš pohled z reálného světa, který reflektuje aktuální ekonomickou situaci a vysvětluje, proč je Bitcoin mnohem víc 
                  než jen spekulativní aktivum.
                </p>
                <p>
                  Za posledních deset let jsem absolvoval desítky konferencí, přečetl stovky knih a článků, a měl tu čest diskutovat s předními ekonomy 
                  jako je Saifedean Ammous nebo Peter Šurda. Tyto zkušenosti mi daly unikátní perspektivu na to, jak Bitcoin mění naše chápání peněz.
                </p>
                <h2>Co se naučíte</h2>
                <ul>
                  <li>Historický vývoj peněz a proč vznikla potřeba centrálních bank</li>
                  <li>Jak inflace přerozděluje bohatství a proč je to problém</li>
                  <li>Proč je Bitcoin tvrdá měna a co to znamená v dlouhodobém horizontu</li>
                  <li>Základní principy rakouské ekonomické školy a jak se liší od mainstreamové ekonomie</li>
                  <li>Jak analyzovat Bitcoin z makroekonomické perspektivy</li>
                  <li>Proč současná ekonomická krize favorizuje Bitcoin jako rezervní aktivum</li>
                </ul>
                <h2>Můj názor na ekonomickou situaci v kontextu Bitcoinu</h2>
                <p>
                  Osobně jsem přesvědčen, že žijeme v historickém okamžiku - konci éry fiat měn. Současný finanční systém založený na neomezeném 
                  tisku peněz se blíží ke svému logickému závěru. Po pandemii COVID-19 a následných stimulačních balíčcích je inflace nevyhnutelná, 
                  a to navzdory tomu, co tvrdí centrální bankéři.
                </p>
                <p>
                  Bitcoin v této situaci představuje jedinečnou alternativu - systém s pevně danou nabídkou, který není manipulovatelný vládami ani 
                  centrálními bankami. Je to první skutečně neutrální, globální rezervní aktivum, které může sloužit jako bezpečný přístav v době 
                  ekonomické nejistoty.
                </p>
                <p>
                  Samozřejmě, nejsem věštec a nemohu předpovídat budoucnost s jistotou. Bitcoin je stále mladý experiment. Ale jeho ekonomické 
                  principy jsou založeny na tisíciletích zkušeností s tím, co dělá peníze dobrými penězi. A v tom vidím jeho největší sílu.
                </p>
                <h2>Pro koho je kurz určen</h2>
                <p>
                  Kurz je ideální pro:
                </p>
                <ul>
                  <li>Bitcoinery, kteří chtějí lépe porozumět ekonomickému pozadí Bitcoinu</li>
                  <li>Investory hledající hlubší pochopení makroekonomických trendů</li>
                  <li>Ekonomy a finanční profesionály zajímající se o alternativní monetární systémy</li>
                  <li>Kohokoliv, kdo chce pochopit, proč je současný finanční systém neudržitelný</li>
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
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
                      <span className="font-medium">Středně pokročilý</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Délka kurzu</p>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>7 lekcí (540 minut)</span>
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
                        {lesson.type === "Workshop" && <Coins className="h-4 w-4" />}
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
                  Doporučená literatura
                </h2>
                <p className="text-gray-600 mb-6">
                  Chcete-li prohloubit své znalosti ekonomických principů Bitcoinu, doporučuji tyto knihy:
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Bitcoin Standard (Saifedean Ammous)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Ekonomie dobra a zla (Tomáš Sedláček)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Jak fungují peníze (Dominik Stroukal)</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Koupit doporučené knihy
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Doporučená literatura" 
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

export default EconomicsCourse;

// Lock component definition
const Lock = (props: any) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
};
