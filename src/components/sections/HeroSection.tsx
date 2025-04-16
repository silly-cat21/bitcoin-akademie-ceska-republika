
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bitcoin-blue mb-6">
              Naučte se <span className="text-bitcoin-orange">Bitcoin</span> od základů
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Komplexní vzdělávání o Bitcoinu v českém jazyce. Kvalitní kurzy, praktické nástroje a komunita nadšenců.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kurzy/zaklady">
                <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg w-full sm:w-auto">
                  Začít zdarma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/kurzy">
                <Button variant="outline" className="border-bitcoin-blue text-bitcoin-blue hover:bg-bitcoin-blue hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Prozkoumat kurzy
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-bitcoin-blue/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bitcoin ilustrace" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 animate-float" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
