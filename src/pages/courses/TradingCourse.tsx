
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BarChart3, ChevronRight, PlayCircle, FileText, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Investiční filozofie pro Bitcoin",
    description: "Dlouhodobá vs. krátkodobá perspektiva a váš investiční horizont",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Dollar Cost Averaging (DCA)",
    description: "Jak a proč pravidelně investovat malé částky do Bitcoinu",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Technická analýza Bitcoinu",
    description: "Základní nástroje a indikátory pro analyzování cenových grafů",
    duration: "120 min",
    type: "Video"
  },
  {
    title: "Fundamentální analýza",
    description: "Metriky on-chain analýzy a jejich interpretace",
    duration: "90 min",
    type: "Workshop"
  },
  {
    title: "Psychologie investování",
    description: "Jak zvládat volatilitu a emoce při investování do Bitcoinu",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Portfolio strategie a diverzifikace",
    description: "Jak Bitcoin zapadá do širší investiční strategie",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "Praktický test znalostí",
    description: "Ověřte si své znalosti o investování do Bitcoinu",
    duration: "30 min",
    type: "Test"
  }
];

const TradingCourse = () => {
  useEffect(() => {
    document.title = "Investice do Bitcoinu | Bitcoin Akademie";
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
              Investice do Bitcoinu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Naučte se, jak inteligentně investovat do Bitcoinu, správně řešit rizika a vytvořit dlouhodobou strategii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Investování do Bitcoinu" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
                <h2>O tomto kurzu</h2>
                <p>
                  Investování do Bitcoinu je téma, které se mě osobně velmi dotýká. V roce 2014 jsem udělal svou první investici, 
                  a od té doby jsem zažil několik býčích i medvědích trhů. Tyto zkušenosti - včetně chyb, které jsem udělal - 
                  jsou základem tohoto kurzu.
                </p>
                <p>
                  Když jsem začínal, neexistoval žádný ucelený zdroj informací v češtině o tom, jak k Bitcoinu přistupovat z investičního hlediska. 
                  Mnoho lidí se nechalo strhnout FOMO (strachem z promeškání), nebo naopak prodalo své bitcoiny v panice během korekce. 
                  Tento kurz jsem vytvořil, abych pomohl českým investorům vyhnout se běžným chybám a vybudovat zdravou investiční strategii.
                </p>
                <p>
                  Musím zdůraznit, že nejsem licencovaný finanční poradce a nic v tomto kurzu by nemělo být považováno za investiční radu. 
                  Sdílím své osobní zkušenosti a strategie, které fungují pro mě. Každý investor by měl zvážit svou vlastní situaci a 
                  případně konzultovat své rozhodnutí s odborníkem.
                </p>
                <h2>Co se naučíte</h2>
                <ul>
                  <li>Jak stanovit svůj investiční horizont a cíle pro Bitcoin</li>
                  <li>Proč je DCA (Dollar Cost Averaging) efektivní strategií pro většinu investorů</li>
                  <li>Základy technické analýzy pro porozumění cenovým grafům Bitcoinu</li>
                  <li>Jak číst on-chain metriky a co nám říkají o fundamentech Bitcoinu</li>
                  <li>Psychologické aspekty investování a jak zvládat strach a chamtivost</li>
                  <li>Jak zahrnout Bitcoin do širší investiční strategie</li>
                </ul>
                <h2>Moje investiční filozofie</h2>
                <p>
                  Za ta léta jsem si vytvořil určitou investiční filozofii, kterou bych chtěl sdílet. Především věřím, že Bitcoin je 
                  primárně dlouhodobá investice. Pokud hledáte rychlé zbohatnutí, tento kurz pravděpodobně není pro vás.
                </p>
                <p>
                  Osobně jsem zastáncem přístupu "buy and hold" (nakup a drž) s pravidelným dokupováním v pravidelných intervalech bez 
                  ohledu na aktuální cenu (DCA). Tento přístup mi pomohl překonat období extrémní volatility bez impulzivních rozhodnutí.
                </p>
                <p>
                  Zároveň si myslím, že je rozumné mít určitou část portfolia v Bitcoinu, ale ne všechno. Diverzifikace je stále důležitá, 
                  i když jsem dlouhodobě velmi optimistický ohledně Bitcoinu. To, jaké procento by měl Bitcoin tvořit ve vašem portfoliu, 
                  závisí na vašem osobním rizikovém profilu a investičním horizontu.
                </p>
                <h2>Pro koho je kurz určen</h2>
                <p>
                  Kurz je ideální pro:
                </p>
                <ul>
                  <li>Začínající investory, kteří uvažují o první investici do Bitcoinu</li>
                  <li>Stávající držitele Bitcoinu, kteří chtějí zlepšit svou investiční strategii</li>
                  <li>Tradiční investory, kteří chtějí pochopit, jak Bitcoin zapadá do širšího portfolia</li>
                  <li>Kohokoliv, kdo chce lépe porozumět cenovým cyklům Bitcoinu</li>
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
                      <div className="h-2.5 w-2.5 rounded-full bg-purple-500 mr-2"></div>
                      <span className="font-medium">Pokročilý</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Délka kurzu</p>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>7 lekcí (480 minut)</span>
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
                        {lesson.type === "Workshop" && <BarChart3 className="h-4 w-4" />}
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
                  Investorské nástroje
                </h2>
                <p className="text-gray-600 mb-6">
                  Pro efektivní investování do Bitcoinu doporučujeme následující nástroje:
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Bitcoin DCA kalkulačka</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Glassnode (on-chain metriky)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">TradingView (technická analýza)</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Vyzkoušet naše nástroje
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Investorské nástroje" 
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

export default TradingCourse;

// Lock component definition
const Lock = (props: any) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
};
