
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bitcoin } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Bitcoin className="h-8 w-8 text-bitcoin-orange" />
            <span className="font-bold text-xl text-bitcoin-blue">Bitcoin Akademie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Domů
            </Link>
            <Link to="/kurzy" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Kurzy
            </Link>
            <Link to="/nastroje" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Nástroje
            </Link>
            <Link to="/o-nas" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              O nás
            </Link>
            <Button variant="outline" className="ml-4 border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
              Přihlásit
            </Button>
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
              Registrovat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-bitcoin-orange focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Domů
            </Link>
            <Link to="/kurzy" className="text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Kurzy
            </Link>
            <Link to="/nastroje" className="text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Nástroje
            </Link>
            <Link to="/o-nas" className="text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              O nás
            </Link>
            <Button variant="outline" className="w-full border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
              Přihlásit
            </Button>
            <Button className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
              Registrovat
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
