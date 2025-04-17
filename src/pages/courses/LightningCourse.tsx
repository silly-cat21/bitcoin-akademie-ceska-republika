
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Zap, PlayCircle, FileText, ArrowRight } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "1. Co je Lightning Network",
    description: "Historie a důvody vzniku Lightning Network, řešení škálovatelnosti Bitcoinu",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "2. Technické základy Lightning Network",
    description: "Payment channels, HTLC, routing a další technické koncepty srozumitelně vysvětlené",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "3. Nastavení vlastního LN nodu",
    description: "Krok za krokem: praktická instalace a konfigurace Umbrel a myNode",
    duration: "120 min",
    type: "Workshop"
  },
  {
    title: "4. Lightning peněženky",
    description: "Srovnání nejlepších Lightning peněženek: Phoenix, Breez, Muun, Wallet of Satoshi",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "5. Správa kanálů a likvidita",
    description: "Strategie pro efektivní správu Lightning kanálů a řešení problémů s likviditou",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "6. Pokročilá bezpečnost v Lightning",
    description: "Identifikace a řešení bezpečnostních rizik při každodenním používání Lightning",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "7. Praktický test znalostí",
    description: "Komplexní test znalostí s praktickými úkoly a zpětnou vazbou",
    duration: "30 min",
    type: "Test"
  }
];

const hardwareItems = [
  { text: "Raspberry Pi 4 (doporučeno min. 4GB RAM)" },
  { text: "1TB SSD úložiště (Samsung T5/T7 nebo WD My Passport SSD)" },
  { text: "UPS záložní zdroj (APC Back-UPS 700VA)" },
  { text: "32GB+ microSD karta (pro bootování)" }
];

const softwareItems = [
  { text: "Umbrel OS (nejjednodušší pro začátečníky)" },
  { text: "myNode (více funkcí, placená Premium verze)" },
  { text: "RaspiBlitz (pro technicky zdatnější uživatele)" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <Zap className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const LightningCourse = () => {
  useEffect(() => {
    document.title = "Lightning Network | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Lightning Network"
            description="Kompletní průvodce druhou vrstvou Bitcoinu, která umožňuje bleskově rychlé a téměř bezplatné transakce."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1566287448830-9a3598acdd8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Lightning Network"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">O tomto kurzu</h2>
                  <div className="space-y-4">
                    <p>
                      Když jsem v roce 2017 poprvé začal experimentovat s Lightning Network, byl to stále velmi experimentální projekt. 
                      Dnes je to plně funkční řešení škálovatelnosti Bitcoinu, které používají miliony lidí po celém světě. 
                      V tomto kurzu se s vámi podělím o své zkušenosti s provozováním Lightning nodu a využíváním této technologie v každodenním životě.
                    </p>
                    <p>
                      <strong>Tento kurz je kompletně praktický.</strong> Naučíte se nejen teorii, ale hlavně jak Lightning Network skutečně používat. 
                      Vše, co vysvětluji, jsem sám v praxi vyzkoušel během více než 4 let provozování Lightning Node.
                    </p>
                    <p>
                      Musím přiznat, že Lightning Network není dokonalé řešení a má své limity. V kurzu se nebudu vyhýbat diskuzi o problémech, jako je 
                      routing, inbound kapacita nebo bezpečnostní rizika. Mým cílem je poskytnout vám realistický pohled na to, co Lightning Network dokáže 
                      a kde jsou jeho hranice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Co se naučíte</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Jak fungují payment channels a jak spolu vytvářejí síť</li>
                    <li>Jak si nastavit vlastní Lightning node (a proč byste to měli udělat)</li>
                    <li>Jak používat různé typy Lightning peněženek podle vašich potřeb</li>
                    <li>Strategie pro efektivní správu kanálů a likvidity</li>
                    <li>Jak bezpečně používat Lightning Network v každodenním životě</li>
                    <li>Jak přispět k decentralizaci Lightning Network</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                  <h3 className="text-xl font-semibold text-bitcoin-blue mb-2">Můj osobní pohled na Lightning Network</h3>
                  <p className="italic">
                    "Lightning Network je podle mě neuvěřitelná technologie, která posouvá Bitcoin blíž k vizi Satoshiho Nakamota o peer-to-peer 
                    elektronickém platebním systému. Není to sice dokonalé řešení všech problémů, ale dělá to, co má - umožňuje rychlé a levné platby."
                  </p>
                  <p className="mt-2">
                    — Tomáš Krause, zakladatel Bitcoin Akademie
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Pro koho je kurz určen</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200 flex items-start">
                      <div className="mr-3 mt-1 text-bitcoin-orange">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <p>Pokročilí uživatelé Bitcoinu, kteří chtějí více porozumět Lightning Network</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 flex items-start">
                      <div className="mr-3 mt-1 text-bitcoin-orange">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <p>Ti, kteří chtějí provozovat vlastní Lightning node</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 flex items-start">
                      <div className="mr-3 mt-1 text-bitcoin-orange">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <p>Vývojáři zajímající se o integraci Lightning plateb</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 flex items-start">
                      <div className="mr-3 mt-1 text-bitcoin-orange">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <p>Obchodníci, kteří zvažují přijímání plateb přes Lightning Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "yellow-500", text: "Pokročilý" }}
              duration="7 lekcí (480 minut)"
              format="Video lekce, praktické workshopy, testy"
              ctaText="Začít kurz zdarma"
              ctaSubtext="První 2 lekce zdarma, pak 2 490 Kč"
            />
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <CourseRecommendation
              title="Doporučený hardware"
              description="Pro provoz vlastního Lightning nodu doporučujeme následující hardwarová řešení."
              items={hardwareItems}
              buttonText="Zobrazit doporučené vybavení"
              imageSrc="https://images.unsplash.com/photo-1563770660941-10a63209412e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageAlt="Lightning Node Hardware"
            />
            
            <CourseRecommendation
              title="Doporučený software"
              description="Tyto softwarové distribuce vám usnadní provoz Lightning nodu."
              items={softwareItems}
              buttonText="Stáhnout software"
              imageSrc="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageAlt="Lightning Node Software"
            />
          </div>
          
          <div className="bg-bitcoin-blue/5 rounded-xl p-8 mb-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-bitcoin-blue mb-4">Připraveni začít s Lightning Network?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Tento kurz vás provede Lightning Network od základů až po pokročilé koncepty. Začněte dnes a buďte součástí budoucnosti Bitcoinu.
              </p>
              <Link to="/kurzy">
                <Button className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white px-8 py-6 text-lg">
                  Zpět na seznam všech kurzů
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LightningCourse;
