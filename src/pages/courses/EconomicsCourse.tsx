
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Coins, PlayCircle, FileText } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";

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

const recommendedBooks = [
  { text: "Bitcoin Standard (Saifedean Ammous)" },
  { text: "Ekonomie dobra a zla (Tomáš Sedláček)" },
  { text: "Jak fungují peníze (Dominik Stroukal)" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <Coins className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const EconomicsCourse = () => {
  useEffect(() => {
    document.title = "Ekonomické principy Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Ekonomické principy Bitcoinu"
            description="Pochopte monetární politiku Bitcoinu, jeho roli v současném finančním systému a potenciální dopad na budoucnost ekonomiky."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Ekonomické principy Bitcoinu"
            >
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
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "blue-500", text: "Středně pokročilý" }}
              duration="7 lekcí (540 minut)"
              format="Video lekce, praktické workshopy, testy"
            />
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <CourseRecommendation
            title="Doporučená literatura"
            description="Chcete-li prohloubit své znalosti ekonomických principů Bitcoinu, doporučuji tyto knihy:"
            items={recommendedBooks}
            buttonText="Koupit doporučené knihy"
            imageSrc="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Doporučená literatura"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default EconomicsCourse;
