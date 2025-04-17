
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background patterns */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-bitcoin-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bitcoin-blue mb-6">
              Naučte se <span className="text-bitcoin-orange">Bitcoin</span> od základů
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Komplexní vzdělávání o Bitcoinu v českém jazyce. Kvalitní kurzy, praktické nástroje a komunita nadšenců.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/kurzy/zaklady">
                <Button className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  Začít zdarma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/kurzy">
                <Button variant="outline" className="border-bitcoin-blue text-bitcoin-blue hover:bg-bitcoin-blue hover:text-white px-8 py-6 text-lg w-full sm:w-auto transition-all duration-300">
                  Prozkoumat kurzy
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="rounded-full bg-bitcoin-orange/10 p-2 mr-3">
                  <BookOpen className="h-5 w-5 text-bitcoin-orange" />
                </div>
                <span className="text-gray-700">6+ unikátních kurzů</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-bitcoin-orange/10 p-2 mr-3">
                  <Shield className="h-5 w-5 text-bitcoin-orange" />
                </div>
                <span className="text-gray-700">100% česky</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-bitcoin-orange/10 p-2 mr-3">
                  <Zap className="h-5 w-5 text-bitcoin-orange" />
                </div>
                <span className="text-gray-700">Praktické projekty</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-bitcoin-blue/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-bitcoin-orange/20 rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-7 -right-7 w-28 h-28 bg-bitcoin-blue/20 rounded-lg -rotate-12 animate-pulse delay-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bitcoin ilustrace" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 animate-float border-4 border-white" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
