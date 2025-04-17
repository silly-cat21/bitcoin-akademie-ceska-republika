
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Shield, BarChart3, Zap, Coins, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

const courseCategories = [
  {
    title: "Základy Bitcoinu",
    description: "Seznamte se s pojmy jako blockchain, těžba a kryptoměnové peněženky.",
    icon: BookOpen,
    level: "Začátečník",
    color: "bg-green-100",
    textColor: "text-green-800",
    path: "/kurzy/zaklady",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.02) 90%)"
  },
  {
    title: "Technická bezpečnost",
    description: "Naučte se, jak bezpečně skladovat své bitcoiny a chránit své soukromé klíče.",
    icon: Shield,
    level: "Středně pokročilý",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    path: "/kurzy/bezpecnost",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 90%)"
  },
  {
    title: "Trading & Investice",
    description: "Strategie pro dlouhodobé investování a správu portfolia.",
    icon: BarChart3,
    level: "Pokročilý",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    path: "/kurzy/investice",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 90%)"
  },
  {
    title: "Lightning Network",
    description: "Prozkoumejte druhou vrstvu Bitcoinu pro rychlé a levné transakce.",
    icon: Zap,
    level: "Pokročilý",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
    path: "/kurzy/lightning",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(234, 179, 8, 0.05) 0%, rgba(234, 179, 8, 0.02) 90%)"
  },
  {
    title: "Ekonomické principy",
    description: "Pochopte monetární politiku a ekonomické důsledky Bitcoinu.",
    icon: Coins,
    level: "Středně pokročilý",
    color: "bg-red-100",
    textColor: "text-red-800",
    path: "/kurzy/ekonomie",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 90%)"
  },
  {
    title: "Soukromí v Bitcoinu",
    description: "Techniky a nástroje pro zvýšení soukromí při používání Bitcoinu.",
    icon: LockKeyhole,
    level: "Pokročilý",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
    path: "/kurzy/soukromi",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, rgba(99, 102, 241, 0.02) 90%)"
  }
];

const CoursesSection = () => {
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bitcoin-orange/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bitcoin-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="text-bitcoin-orange font-medium mb-2 inline-block">NAŠE KURZY</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bitcoin-blue mb-6">
            Kurzy pro každou úroveň znalostí
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vyberte si z široké nabídky kurzů, které vás provedou světem Bitcoinu od úplných základů až po pokročilé koncepty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow" style={{ background: course.bgPattern }}>
              <CardHeader className="pb-4">
                <div className="mb-4 bg-white p-3 w-12 h-12 rounded-lg shadow-sm flex items-center justify-center">
                  <course.icon className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <Badge className={`${course.color} ${course.textColor} font-normal mb-3`}>
                  {course.level}
                </Badge>
                <CardTitle className="text-xl font-bold text-bitcoin-blue">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">{course.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Link to={course.path} className="w-full">
                  <Button variant="ghost" className="text-bitcoin-orange hover:text-bitcoin-blue hover:bg-gray-100 p-0 w-full justify-start group">
                    <span>Zobrazit kurz</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/kurzy">
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Zobrazit všechny kurzy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
