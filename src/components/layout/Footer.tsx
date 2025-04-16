
import { Bitcoin, Facebook, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bitcoin className="h-8 w-8 text-bitcoin-orange" />
              <span className="font-bold text-xl">Bitcoin Akademie</span>
            </div>
            <p className="text-gray-400 mb-6">
              Komplexní vzdělávání o Bitcoinu v českém jazyce. Připojte se k naší rostoucí komunitě.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Kurzy</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kurzy/zaklady" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Základy Bitcoinu
                </Link>
              </li>
              <li>
                <Link to="/kurzy/bezpecnost" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Technická bezpečnost
                </Link>
              </li>
              <li>
                <Link to="/kurzy/investice" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Trading & Investice
                </Link>
              </li>
              <li>
                <Link to="/kurzy/lightning" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Lightning Network
                </Link>
              </li>
              <li>
                <Link to="/kurzy/ekonomie" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Ekonomické principy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Nástroje</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nastroje/kalkulacka" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Bitcoin Kalkulačka
                </Link>
              </li>
              <li>
                <Link to="/nastroje/konvertor" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Konvertor jednotek
                </Link>
              </li>
              <li>
                <Link to="/nastroje/grafy" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Cenové grafy
                </Link>
              </li>
              <li>
                <Link to="/nastroje/penezenka" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Generátor peněženky
                </Link>
              </li>
              <li>
                <Link to="/nastroje/explorer" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Blockchain Explorer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                <span className="text-gray-400">info@bitcoin-akademie.cz</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Odběr novinek</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Váš email" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900" 
                />
                <button className="bg-bitcoin-orange px-4 py-2 rounded-r-md hover:bg-bitcoin-orange/90 transition-colors">
                  Odebírat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bitcoin Akademie. Všechna práva vyhrazena.
            </p>
            <div className="flex space-x-6">
              <Link to="/podminky" className="text-gray-500 hover:text-bitcoin-orange text-sm transition-colors">
                Obchodní podmínky
              </Link>
              <Link to="/soukromi" className="text-gray-500 hover:text-bitcoin-orange text-sm transition-colors">
                Ochrana soukromí
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-bitcoin-orange text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
