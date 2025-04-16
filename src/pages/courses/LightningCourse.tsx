
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Zap, PlayCircle, FileText } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";

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

const hardwareItems = [
  { text: "Raspberry Pi 4 (min. 4GB RAM)" },
  { text: "1TB SSD úložiště" },
  { text: "UPS záložní zdroj" }
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Lightning Network"
            description="Kompletní průvodce druhou vrstvou Bitcoinu, která umožňuje bleskově rychlé a téměř bezplatné transakce."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Lightning Network"
            >
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
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "yellow-500", text: "Pokročilý" }}
              duration="7 lekcí (480 minut)"
              format="Video lekce, praktické workshopy, testy"
            />
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <CourseRecommendation
            title="Vybavte se na Lightning Network"
            description="Pro provoz vlastního Lightning nodu doporučujeme následující hardwarová řešení."
            items={hardwareItems}
            buttonText="Zobrazit doporučené vybavení"
            imageSrc="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Lightning Node Hardware"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default LightningCourse;
