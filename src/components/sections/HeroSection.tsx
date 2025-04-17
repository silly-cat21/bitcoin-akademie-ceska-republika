
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BookOpen, BarChart3, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background patterns */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-bitcoin-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-bitcoin-blue/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <motion.div 
                className="absolute -top-8 -left-8 w-28 h-28 bg-bitcoin-orange/20 rounded-lg"
                animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-36 h-36 bg-bitcoin-blue/20 rounded-lg"
                animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bitcoin ilustrace" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 border-4 border-white" 
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-bitcoin-blue mb-6 text-center">
            Nejnovější nástroje a kurzy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/nastroje/lightning-wallets" className="block">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex border border-gray-100">
                <div className="mr-4 bg-bitcoin-orange/10 p-3 rounded-lg">
                  <Zap className="h-8 w-8 text-bitcoin-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-bitcoin-blue">Lightning Peněženky</h3>
                  <p className="text-gray-600 mb-2">Porovnání a hodnocení nejlepších Lightning peněženek</p>
                  <div className="flex items-center text-bitcoin-orange text-sm">
                    Prozkoumat nástroj
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/kurzy/lightning" className="block">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex border border-gray-100">
                <div className="mr-4 bg-bitcoin-blue/10 p-3 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-bitcoin-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-bitcoin-blue">Lightning Network Kurz</h3>
                  <p className="text-gray-600 mb-2">Naučte se používat a provozovat Lightning Network</p>
                  <div className="flex items-center text-bitcoin-orange text-sm">
                    Zobrazit kurz
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
