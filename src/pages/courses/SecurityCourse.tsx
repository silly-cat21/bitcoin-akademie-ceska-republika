
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, ChevronRight, PlayCircle, FileText, CheckCircle, Award, Lock } from "lucide-react";
import { Link } from "react-router-dom";

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

const SecurityCourse = () => {
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
              Technická bezpečnost
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Naučte se, jak bezpečně skladovat své bitcoiny a chránit své soukromé klíče před možnými hrozbami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1566697471832-a5afd7512da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Technická bezpečnost" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="prose max-w-none">
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
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
                      <span className="font-medium">Středně pokročilý</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Délka kurzu</p>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
                      <span>7 lekcí (450 minut)</span>
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
                        {lesson.type === "Workshop" && <Shield className="h-4 w-4" />}
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
                  Doporučené hardwarové peněženky
                </h2>
                <p className="text-gray-600 mb-6">
                  Pro bezpečné uchovávání vašich bitcoinů doporučujeme použít hardwarovou peněženku.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Trezor Model T</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">BitBox02</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                    <span className="text-gray-700">Ledger Nano S</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
                    Zobrazit nabídku peněženek
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hardwarové peněženky" 
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

export default SecurityCourse;
