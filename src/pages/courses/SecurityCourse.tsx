
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Shield, PlayCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";

const lessons = [
  {
    title: "Základy bezpečnosti v kryptoměnách",
    description: "Proč je bezpečnost u Bitcoinu tak důležitá",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Veřejné a soukromé klíče",
    description: "Pochopení principů kryptografie veřejných klíčů",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "Typy Bitcoin peněženek",
    description: "Hot, cold a hardware peněženky - srovnání a bezpečnostní aspekty",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Seed fráze a její zabezpečení",
    description: "Jak bezpečně uchovávat recovery seed",
    duration: "60 min",
    type: "Workshop"
  },
  {
    title: "Multisignature peněženky",
    description: "Pokročilé zabezpečení pomocí více podpisů",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Zabezpečení proti fyzickým hrozbám",
    description: "Ochrana před fyzickým přístupem k vašim zařízením a klíčům",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Test bezpečnostních znalostí",
    description: "Ověřte si své znalosti o zabezpečení Bitcoinu",
    duration: "30 min",
    type: "Test"
  }
];

const recommendedHardware = [
  { text: "Trezor Model T" },
  { text: "BitBox02" },
  { text: "Ledger Nano S" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <Shield className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const SecurityCourse = () => {
  useEffect(() => {
    document.title = "Technická bezpečnost | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Technická bezpečnost"
            description="Naučte se, jak bezpečně skladovat své bitcoiny a chránit své soukromé klíče před možnými hrozbami."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1566697471832-a5afd7512da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Technická bezpečnost"
            >
              <h2>O tomto kurzu</h2>
              <p>
                Kurz Technická bezpečnost je určen pro všechny, kteří chtějí pochopit, jak bezpečně uchovávat Bitcoin a další kryptoměny. Bezpečnost je jedním z nejdůležitějších aspektů při práci s kryptoměnami - "Not your keys, not your coins" není jen fráze, ale základní princip.
              </p>
              <p>
                V tomto kurzu se dozvíte o různých typech peněženek, o tom, jak fungují soukromé a veřejné klíče, jak zabezpečit své seed fráze, a jak se bránit proti různým typům útoků. Kurz je vhodný pro středně pokročilé uživatele, kteří již mají základní znalosti o Bitcoinu.
              </p>
              <h2>Co se naučíte</h2>
              <ul>
                <li>Principy kryptografie veřejných klíčů v kontextu Bitcoinu</li>
                <li>Jak fungují různé typy Bitcoin peněženek a jaké jsou jejich silné a slabé stránky</li>
                <li>Jak bezpečně generovat a uchovávat seed fráze</li>
                <li>Jak vytvářet a používat multisignature peněženky</li>
                <li>Jak se chránit před různými typy útoků, včetně phishingu a malwaru</li>
                <li>Jak vytvořit komplexní bezpečnostní strategii pro své bitcoiny</li>
              </ul>
              <h2>Pro koho je kurz určen</h2>
              <p>
                Kurz je ideální pro:
              </p>
              <ul>
                <li>Středně pokročilé uživatele Bitcoinu</li>
                <li>Ty, kteří chtějí zvýšit bezpečnost svých kryptoměnových aktiv</li>
                <li>Investory, kteří plánují dlouhodobě držet větší množství Bitcoinu</li>
                <li>Vývojáře a IT profesionály, kteří chtějí porozumět bezpečnostním aspektům Bitcoinu</li>
              </ul>
            </CourseContent>

            <CourseDetailsSidebar
              level={{ color: "blue-500", text: "Středně pokročilý" }}
              duration="7 lekcí (450 minut)"
              format="Video lekce, praktické workshopy, testy"
              ctaText="Začít kurz"
              ctaSubtext="K dispozici v Premium členství"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-bitcoin-blue mb-6">Přehled lekcí</h2>
            <CourseLessonList lessons={lessons} typeIcons={typeIcons} />
            <div className="flex justify-center mt-8">
              <Link to="/kurzy/bezpecnost/lekce/1">
                <Button className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Začít kurz zdarma
                </Button>
              </Link>
            </div>
          </div>

          <CourseRecommendation
            title="Doporučené hardwarové peněženky"
            description="Pro bezpečné uchovávání vašich bitcoinů doporučujeme použít hardwarovou peněženku."
            items={recommendedHardware}
            buttonText="Zobrazit nabídku peněženek"
            imageSrc="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Hardwarové peněženky"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default SecurityCourse;
