
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { BarChart3, PlayCircle, FileText } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";

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

const recommendedTools = [
  { text: "Bitcoin DCA kalkulačka" },
  { text: "Glassnode (on-chain metriky)" },
  { text: "TradingView (technická analýza)" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <BarChart3 className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const TradingCourse = () => {
  useEffect(() => {
    document.title = "Investice do Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Investice do Bitcoinu"
            description="Naučte se, jak inteligentně investovat do Bitcoinu, správně řešit rizika a vytvořit dlouhodobou strategii."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Investování do Bitcoinu"
            >
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
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "purple-500", text: "Pokročilý" }}
              duration="7 lekcí (480 minut)"
              format="Video lekce, praktické workshopy, testy"
            />
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <CourseRecommendation
            title="Investorské nástroje"
            description="Pro efektivní investování do Bitcoinu doporučujeme následující nástroje:"
            items={recommendedTools}
            buttonText="Vyzkoušet naše nástroje"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Investorské nástroje"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default TradingCourse;
