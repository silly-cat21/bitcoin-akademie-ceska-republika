
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, ChevronRight, PlayCircle, FileText, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Úvod do Bitcoinu",
    description: "Co je Bitcoin a proč vznikl?",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Historie Bitcoinu",
    description: "Od whitepaperu Satoshiho Nakamota po současnost",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Jak funguje blockchain",
    description: "Technický základ Bitcoinu - blockchain a jeho principy",
    duration: "75 min",
    type: "Video"
  },
  {
    title: "První Bitcoin transakce",
    description: "Jak poslat a přijmout Bitcoin - praktický workshop",
    duration: "90 min",
    type: "Workshop"
  },
  {
    title: "Bitcoin peněženky",
    description: "Typy peněženek a jejich bezpečnost",
    duration: "60 min",
    type: "Video"
  },
  {
    title: "Nakupování Bitcoinu",
    description: "Jak a kde bezpečně nakoupit Bitcoin",
    duration: "45 min",
    type: "Video"
  },
  {
    title: "Test znalostí",
    description: "Ověřte si své znalosti základů Bitcoinu",
    duration: "30 min",
    type: "Test"
  }
];

const BasicsCourse = () => {
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
              Základy Bitcoinu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Kurz pro úplné začátečníky, který vás seznámí s Bitcoinem, jeho historií, technickým základem a praktickým použitím.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Základy Bitcoinu" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
                <h2>O tomto kurzu</h2>
                <p>
                  Kurz Základy Bitcoinu je určen pro všechny, kteří chtějí pochopit, co to Bitcoin vlastně je a jak funguje. Nemusíte mít žádné předchozí zkušenosti s kryptoměnami ani technické znalosti.
                </p>
                <p>
                  V průběhu kurzu se dozvíte, jak Bitcoin vznikl, jaké problémy řeší a jaké jsou jeho základní vlastnosti. Naučíte se, jak Bitcoin funguje na technické úrovni, ale vysvětleno srozumitelným způsobem. Provedeme vás také prvními praktickými kroky - jak si vytvořit peněženku, jak Bitcoin bezpečně nakoupit a uchovávat.
                </p>
                <h2>Co se naučíte</h2>
                <ul>
                  <li>Historii a principy Bitcoinu</li>
                  <li>Jak Bitcoin funguje na technické úrovni</li>
                  <li>Jak vytvořit a používat Bitcoin peněženku</li>
                  <li>Jak bezpečně nakupovat a uchovávat Bitcoin</li>
                  <li>Jak provádět Bitcoin transakce</li>
                  <li>Základní bezpečnostní praktiky</li>
                </ul>
                <h2>Pro koho je kurz určen</h2>
                <p>
                  Kurz je ideální pro:
                </p>
                <ul>
                  <li>Úplné začátečníky, kteří se chtějí seznámit s Bitcoinem</li>
                  <li>Lidi, kteří chtějí pochopit principy fungování Bitcoinu</li>
                  <li>Zájemce o investování do Bitcoinu</li>
                  <li>Každého, kdo chce získat praktické znalosti pro používání Bitcoinu</li>
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
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-medium">Začátečník</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Délka kurzu</p>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>7 lekcí (405 minut)</span>
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
                      Začít kurz zdarma
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      První 3 lekce jsou zdarma
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
                        {index < 3 ? (
                          <PlayCircle className="h-6 w-6 text-bitcoin-orange" />
                        ) : (
                          <Lock className="h-6 w-6 text-gray-400" />
                        )}
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
                        {lesson.type === "Workshop" && <BookOpen className="h-4 w-4" />}
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
                  Získejte přístup ke všem kurzům
                </h2>
                <p className="text-gray-600 mb-6">
                  Staňte se členem Bitcoin Akademie a získejte přístup ke všem našim kurzům, workshopům a dalším materiálům.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Neomezený přístup ke všem kurzům</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Certifikáty o dokončení</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Prémiové nástroje a analýzy</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Začít s Premium
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Premium členství" 
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

export default BasicsCourse;

// Missing Lock component declaration
const Lock = (props: any) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
};
