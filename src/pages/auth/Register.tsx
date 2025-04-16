
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon, Bitcoin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Chyba při registraci",
        description: "Vyplňte prosím všechna povinná pole.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Hesla se neshodují",
        description: "Zadaná hesla se neshodují. Zkuste to prosím znovu.",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        title: "Podmínky použití",
        description: "Pro registraci musíte souhlasit s podmínkami použití.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registrace úspěšná",
        description: "Váš účet byl úspěšně vytvořen. Nyní se můžete přihlásit.",
      });
      navigate("/prihlasit");
      setLoading(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Bitcoin className="h-12 w-12 text-bitcoin-orange" />
                </div>
                <CardTitle className="text-2xl font-bold text-bitcoin-blue">
                  Registrace
                </CardTitle>
                <CardDescription>
                  Vytvořte si nový účet v Bitcoin Akademii
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Vaše jméno"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vas@email.cz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Heslo</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Potvrzení hesla</Label>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreeTerms}
                        onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Souhlasím s{" "}
                        <Link to="/podminky" className="text-bitcoin-orange hover:text-bitcoin-blue">
                          podmínkami použití
                        </Link>{" "}
                        a{" "}
                        <Link to="/soukromi" className="text-bitcoin-orange hover:text-bitcoin-blue">
                          zásadami ochrany soukromí
                        </Link>
                      </label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="newsletter" 
                        checked={agreeNewsletter}
                        onCheckedChange={(checked) => setAgreeNewsletter(checked as boolean)}
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chci dostávat newsletter s novinkami a slevami
                      </label>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue"
                    disabled={loading}
                  >
                    {loading ? "Registrace..." : "Registrovat"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-gray-600">
                  Již máte účet?{" "}
                  <Link to="/prihlasit" className="text-bitcoin-orange hover:text-bitcoin-blue font-medium">
                    Přihlaste se
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Register;
