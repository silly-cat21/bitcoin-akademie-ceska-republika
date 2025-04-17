
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { LockKeyhole, PlayCircle, FileText } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";

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

const recommendedSoftware = [
  { text: "Wasabi Wallet (CoinJoin)" },
  { text: "Samourai Wallet (pokročilé funkce)" },
  { text: "Bisq (decentralizovaná burza)" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <LockKeyhole className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const PrivacyCourse = () => {
  useEffect(() => {
    document.title = "Soukromí v Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Soukromí v Bitcoinu"
            description="Naučte se praktické techniky pro ochranu svého finančního soukromí v transparentním světě blockchainu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Soukromí v Bitcoinu"
            >
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
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "indigo-500", text: "Pokročilý" }}
              duration="7 lekcí (405 minut)"
              format="Video lekce, praktické workshopy, testy"
            />
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <CourseRecommendation
            title="Doporučený software pro soukromí"
            description="Pro maximální soukromí při používání Bitcoinu doporučujeme následující nástroje:"
            items={recommendedSoftware}
            buttonText="Stáhnout doporučený software"
            imageSrc="https://images.unsplash.com/photo-1502570974076-c03132e94094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Software pro soukromí"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyCourse;
