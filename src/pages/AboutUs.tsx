
import PageLayout from "@/components/layout/PageLayout";
import { Bitcoin, Award, Users, BookOpen, Calendar } from "lucide-react";

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
              O Bitcoin Akademii
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jsme tým nadšenců a odborníků na Bitcoin, kteří se rozhodli vytvořit komplexní vzdělávací platformu v českém jazyce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-bitcoin-blue mb-6">Naše mise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Bitcoin Akademie vznikla s jasným cílem - demystifikovat Bitcoin a učinit kvalitní vzdělávání o této technologii dostupné pro každého v České republice.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Věříme, že Bitcoin představuje významnou technologickou inovaci s potenciálem změnit způsob, jakým fungují peníze a ekonomika. Proto považujeme za důležité, aby každý měl přístup ke srozumitelným a přesným informacím.
              </p>
              <p className="text-lg text-gray-700">
                Naším posláním je vytvářet vzdělávací obsah, který je zároveň jednoduchý pro začátečníky i dostatečně odborný pro pokročilé uživatele.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-bitcoin-blue/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tým Bitcoin Akademie" 
                  className="w-full h-auto rounded-2xl shadow-xl relative z-10" 
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-bold text-bitcoin-blue mb-2">Založeno 2022</h3>
              <p className="text-gray-600">
                Bitcoin Akademie funguje již od roku 2022 a neustále rozšiřujeme naše vzdělávací materiály.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-bold text-bitcoin-blue mb-2">6 kurzových kategorií</h3>
              <p className="text-gray-600">
                Od základů Bitcoinu až po pokročilé koncepty jako Lightning Network a soukromí.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-bold text-bitcoin-blue mb-2">2500+ studentů</h3>
              <p className="text-gray-600">
                Tisíce studentů již využívají naše kurzy a nástroje pro své vzdělávání v oblasti Bitcoinu.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-bold text-bitcoin-blue mb-2">Odborný tým</h3>
              <p className="text-gray-600">
                Náš tým tvoří odborníci s letitými zkušenostmi v oblasti Bitcoinu a kryptoměn.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-20">
            <h2 className="text-3xl font-bold text-bitcoin-blue mb-6 text-center">Náš tým</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Jan Novák" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-bold text-bitcoin-blue">Jan Novák</h3>
                <p className="text-bitcoin-orange">Zakladatel</p>
                <p className="text-gray-600 mt-2">
                  Bitcoiner od roku 2013, přednášející a konzultant v oblasti kryptoměn.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Petra Svobodová" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-bold text-bitcoin-blue">Petra Svobodová</h3>
                <p className="text-bitcoin-orange">Vedoucí vzdělávání</p>
                <p className="text-gray-600 mt-2">
                  Specialistka na tvorbu vzdělávacích materiálů s 8 lety praxe v oboru.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Tomáš Dvořák" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-bold text-bitcoin-blue">Tomáš Dvořák</h3>
                <p className="text-bitcoin-orange">Technický expert</p>
                <p className="text-gray-600 mt-2">
                  Vývojář a technický expert na Lightning Network a Bitcoin protokol.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-bitcoin-blue mb-6">Spolupracujeme s</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://trezor.io/static/images/trezor_logo.svg" 
                  alt="Trezor" 
                  className="h-12" 
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Bitcoin className="h-12 w-12" />
                <span className="sr-only">Bitcoin</span>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Lightning_Network_Logo.svg/1200px-Lightning_Network_Logo.svg.png" 
                  alt="Lightning Network" 
                  className="h-12" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
