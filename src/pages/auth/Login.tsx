
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, Bitcoin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Chyba při přihlášení",
        description: "Vyplňte prosím email a heslo.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo, we'll just accept any login
      toast({
        title: "Přihlášení úspěšné",
        description: "Byli jste úspěšně přihlášeni.",
      });
      navigate("/");
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
                  Přihlášení
                </CardTitle>
                <CardDescription>
                  Přihlaste se ke svému účtu Bitcoin Akademie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Heslo</Label>
                      <Link 
                        to="/zapomenute-heslo" 
                        className="text-sm text-bitcoin-orange hover:text-bitcoin-blue"
                      >
                        Zapomenuté heslo?
                      </Link>
                    </div>
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
                  <Button 
                    type="submit" 
                    className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue"
                    disabled={loading}
                  >
                    {loading ? "Přihlašování..." : "Přihlásit"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-gray-600">
                  Nemáte účet?{" "}
                  <Link to="/registrovat" className="text-bitcoin-orange hover:text-bitcoin-blue font-medium">
                    Zaregistrujte se
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

export default Login;
