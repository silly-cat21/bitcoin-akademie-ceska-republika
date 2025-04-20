import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { BookOpen, PlayCircle, FileText } from "lucide-react";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import CourseDetailsSidebar from "@/components/courses/CourseDetailsSidebar";
import CourseLessonList from "@/components/courses/CourseLessonList";
import CourseRecommendation from "@/components/courses/CourseRecommendation";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    title: "Co je Bitcoin a jak vznikl",
    description: "Historie a základní principy Bitcoinu",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Jak funguje blockchain",
    description: "Technické základy decentralizované účetní knihy",
    duration: "90 min",
    type: "Video"
  },
  {
    title: "Bitcoin peněženky",
    description: "Typy peněženek a jak je používat",
    duration: "75 min",
    type: "Workshop"
  },
  {
    title: "Jak nakoupit a prodat Bitcoin",
    description: "Burzy, směnárny a P2P obchodování",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Bitcoin transakce",
    description: "Jak fungují transakce a poplatky",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Bitcoin těžba",
    description: "Princip Proof of Work a těžební hardware",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Základní test znalostí",
    description: "Ověřte si, co jste se naučili o základech Bitcoinu",
    duration: "30 min",
    type: "Test"
  }
];

const recommendedBooks = [
  { text: "Bitcoin: Peníze budoucnosti (Dominik Stroukal)" },
  { text: "Mastering Bitcoin (Andreas M. Antonopoulos)" },
  { text: "Inverzní pyramida (Saifedean Ammous)" }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <BookOpen className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const BasicsCourse = () => {
  useEffect(() => {
    document.title = "Základy Bitcoinu | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CourseHeader 
            title="Základy Bitcoinu"
            description="Seznamte se s revolučním světem digitálních měn a blockchainové technologie od základů."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CourseContent
              imageSrc="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Základy Bitcoinu"
            >
              <h2>O tomto kurzu</h2>
              <p>
                Když jsem poprvé objevil Bitcoin v roce 2012, byl jsem naprosto fascinován. Digitální měna bez centrální autority, 
                která funguje na matematických principech? To znělo jako sci-fi! Postupně jsem pronikl do světa kryptoměn a zjistil, 
                že Bitcoin je mnohem víc než jen digitální peníze - je to technologická revoluce.
              </p>
              <p>
                Tento kurz jsem vytvořil s přesvědčením, že každý by měl mít možnost pochopit základy Bitcoinu bez ohledu na své 
                technické znalosti. Mým cílem není jen vysvětlit, co Bitcoin je a jak funguje, ale také ukázat, proč je tak důležitý 
                v dnešním světě centralizovaných finančních systémů.
              </p>
              <p>
                Kurz kombinuje teorii s praktickými ukázkami. Naučíte se nejen to, jak Bitcoin funguje na teoretické úrovni, 
                ale také jak jej reálně používat - od vytvoření peněženky až po první transakci. Vše je vysvětleno jednoduše a srozumitelně, 
                s důrazem na praktické využití.
              </p>
              <h2>Co se naučíte</h2>
              <ul>
                <li>Co je Bitcoin a jak vznikl - od whitepaperu Satoshiho Nakamota po současnost</li>
                <li>Základní principy blockchain technologie a jak zajišťuje bezpečnost a důvěryhodnost</li>
                <li>Jak vytvořit a bezpečně používat Bitcoin peněženku</li>
                <li>Jak a kde bezpečně nakoupit a prodat Bitcoin</li>
                <li>Jak fungují Bitcoin transakce a co jsou transakční poplatky</li>
                <li>Základy těžby Bitcoinu a role těžařů v síti</li>
              </ul>
              <h2>Můj příběh s Bitcoinem</h2>
              <p>
                Dovolte mi podělit se o svůj osobní příběh s Bitcoinem. Před více než deseti lety jsem byl skeptický, jako většina lidí. 
                "Internetové peníze bez podpory vlády? To nemůže fungovat!" Ale čím více jsem o Bitcoinu četl, tím více jsem chápal jeho revoluční potenciál.
              </p>
              <p>
                Moje první investice do Bitcoinu byla skromná - několik tisíc korun. Od té doby jsem zažil divoké výkyvy trhu, období 
                euforie i strachu. Ale co mě na Bitcoinu fascinovalo nejvíce, nebyla jeho cena, ale jeho odolnost. Navzdory všem 
                předpovědím o jeho zániku Bitcoin přežil a prosperoval.
              </p>
              <p>
                Dnes věřím, že Bitcoin je mnohem víc než spekulativní aktivum - je to technologická inovace, která má potenciál 
                transformovat náš finanční systém a posílit finanční svobody jednotlivců. A právě toto nadšení se snažím přenést i do tohoto kurzu.
              </p>
              <h2>Pro koho je kurz určen</h2>
              <p>
                Kurz je ideální pro:
              </p>
              <ul>
                <li>Úplné začátečníky, kteří o Bitcoinu vědí málo nebo nic</li>
                <li>Lidi, kteří slyšeli o Bitcoinu, ale nerozumí tomu, jak funguje</li>
                <li>Ty, kteří chtějí začít používat Bitcoin v běžném životě</li>
                <li>Potenciální investory, kteří se chtějí nejprve vzdělat</li>
              </ul>
            </CourseContent>

            <div className="md:col-span-1">
              <CourseDetailsSidebar
                level={{ color: "green-500", text: "Začátečník" }}
                duration="7 lekcí (420 minut)"
                format="Video lekce, praktické workshopy, testy"
                ctaText="Začít kurz"
                ctaSubtext="Vyzkoušejte první lekci zdarma"
              />
              <div className="mt-4">
                <Link to="/kurzy/zaklady/lekce/1" className="w-full">
                  <Button className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
                    Spustit první lekci
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <CourseLessonList lessons={lessons} typeIcons={typeIcons} />

          <CourseRecommendation
            title="Doporučená literatura"
            description="Pro další prohloubení znalostí o Bitcoinu doporučujeme tyto knihy:"
            items={recommendedBooks}
            buttonText="Kde koupit tyto knihy"
            imageSrc="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Doporučená literatura"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default BasicsCourse;
