
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Děkujeme za přihlášení k odběru novinek!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-16 bg-bitcoin-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zůstaňte informováni
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Přihlaste se k odběru našeho newsletteru a získejte týdenní přehled novinek ze světa Bitcoinu, 
            exkluzivní obsah a oznámení o nových kurzech.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Váš email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-bitcoin-orange text-white hover:bg-white hover:text-bitcoin-blue"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Odesílání..." : "Přihlásit se"}
            </Button>
          </form>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
              <span>Týdenní přehled</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
              <span>Exkluzivní obsah</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
              <span>Žádný spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
