
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, ChevronRight, PlayCircle, FileText, CheckCircle, Award, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Co je Lightning Network",
    description: "Historie a důvody vzniku Lightning Network",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Technické základy Lightning Network",
    description: "Payment channels, HTLC a routing - jak to všechno funguje",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "Nastavení vlastního LN nodu",
    description: "Praktická instalace a konfigurace Umbrel/myNode",
    duration: "120 min",
    type: "Workshop"
  },
  {
    title: "Lightning peněženky",
    description: "Přehled a srovnání nejlepších Lightning peněženek",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Správa kanálů a likvidita",
    description: "Strategie pro efektivní správu Lightning kanálů",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Pokročilá bezpečnost v Lightning",
    description: "Rizika a jejich řešení v každodenním používání",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Praktický test znalostí",
    description: "Ověřte si své znalosti o Lightning Network",
    duration: "30 min",
    type: "Test"
  }
];

const LightningCourse = () => {
  useEffect(() => {
    document.title = "Lightning Network | Bitcoin Akademie";
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
              Lightning Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Kompletní průvodce druhou vrstvou Bitcoinu, která umožňuje bleskově rychlé a téměř bezplatné transakce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Lightning Network" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
                <h2>O tomto kurzu</h2>
                <p>
                  Když jsem v roce 2017 poprvé začal experimentovat s Lightning Network, byl to stále velmi experimentální projekt. 
                  Dnes je to plně funkční řešení škálovatelnosti Bitcoinu, které používají miliony lidí po celém světě. 
                  V tomto kurzu se s vámi podělím o své zkušenosti s provozováním Lightning nodu a využíváním této technologie v každodenním životě.
                </p>
                <p>
                  Kurz jsem vytvořil na základě vlastních zkušeností s provozováním Lightning Node již více než 4 roky. Za tu dobu jsem se naučil, 
                  jak efektivně spravovat kanály, řešit problémy s likviditou a používat Lightning pro každodenní platby. A především - naučil jsem 
                  se, jak vysvětlit technicky složité koncepty jednoduše a srozumitelně.
                </p>
                <p>
                  Musím přiznat, že Lightning Network není dokonalé řešení a má své limity. V kurzu se nebudu vyhýbat diskuzi o problémech, jako je 
                  routing, inbound kapacita nebo bezpečnostní rizika. Mým cílem je poskytnout vám realistický pohled na to, co Lightning Network dokáže 
                  a kde jsou jeho hranice.
                </p>
                <h2>Co se naučíte</h2>
                <ul>
                  <li>Jak fungují payment channels a jak spolu vytvářejí síť</li>
                  <li>Jak si nastavit vlastní Lightning node (a proč byste to měli udělat)</li>
                  <li>Jak používat různé typy Lightning peněženek podle vašich potřeb</li>
                  <li>Strategie pro efektivní správu kanálů a likvidity</li>
                  <li>Jak bezpečně používat Lightning Network v každodenním životě</li>
                  <li>Jak přispět k decentralizaci Lightning Network</li>
                </ul>
                <h2>Můj osobní pohled na Lightning Network</h2>
                <p>
                  Lightning Network je podle mě neuvěřitelná technologie, která posouvá Bitcoin blíž k vizi Satoshiho Nakamota o peer-to-peer 
                  elektronickém platebním systému. Není to sice dokonalé řešení všech problémů, ale dělá to, co má - umožňuje rychlé a levné platby.
                </p>
                <p>
                  Za ta léta provozu mého Lightning nodu jsem se naučil, že nejdůležitější aspekt není technická dokonalost, 
                  ale praktická použitelnost. A v tomto ohledu Lightning Network za posledních pár let udělal obrovský pokrok. 
                  Aplikace jako Phoenix, Breez nebo Wallet of Satoshi zpřístupnily Lightning i běžným uživatelům.
                </p>
                <p>
                  Osobně vidím budoucnost Bitcoinu jako vícevrstvý systém, kde base layer slouží jako "vypořádací vrstva" a Lightning jako "platební vrstva". 
                  Tento model dává smysl a připomíná tradiční finanční systém, jen bez centrálních autorit a s výhodami Bitcoinu.
                </p>
                <h2>Pro koho je kurz určen</h2>
                <p>
                  Kurz je ideální pro:
                </p>
                <ul>
                  <li>Pokročilé uživatele Bitcoinu, kteří chtějí více porozumět Lightning Network</li>
                  <li>Ty, kteří chtějí provozovat vlastní Lightning node</li>
                  <li>Vývojáře zajímající se o integraci Lightning plateb</li>
                  <li>Obchodníky, kteří zvažují přijímání plateb přes Lightning Network</li>
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
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div>
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
                        {lesson.type === "Workshop" && <Zap className="h-4 w-4" />}
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
                  Vybavte se na Lightning Network
                </h2>
                <p className="text-gray-600 mb-6">
                  Pro provoz vlastního Lightning nodu doporučujeme následující hardwarová řešení.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Raspberry Pi 4 (min. 4GB RAM)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">1TB SSD úložiště</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">UPS záložní zdroj</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Zobrazit doporučené vybavení
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Lightning Node Hardware" 
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

export default LightningCourse;

