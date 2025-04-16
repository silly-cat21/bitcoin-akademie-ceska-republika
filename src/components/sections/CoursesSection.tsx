
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
    path: "/kurzy/zaklady"
  },
  {
    title: "Technická bezpečnost",
    description: "Naučte se, jak bezpečně skladovat své bitcoiny a chránit své soukromé klíče.",
    icon: Shield,
    level: "Středně pokročilý",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    path: "/kurzy/bezpecnost"
  },
  {
    title: "Trading & Investice",
    description: "Strategie pro dlouhodobé investování a správu portfolia.",
    icon: BarChart3,
    level: "Pokročilý",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    path: "/kurzy/investice"
  },
  {
    title: "Lightning Network",
    description: "Prozkoumejte druhou vrstvu Bitcoinu pro rychlé a levné transakce.",
    icon: Zap,
    level: "Pokročilý",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
    path: "/kurzy/lightning"
  },
  {
    title: "Ekonomické principy",
    description: "Pochopte monetární polit3iku a ekonomické důsledky Bitcoinu.",
    icon: Coins,
    level: "Středně pokročilý",
    color: "bg-red-100",
    textColor: "text-red-800",
    path: "/kurzy/ekonomie"
  },
  {
    title: "Soukromí v Bitcoinu",
    description: "Techniky a nástroje pro zvýšení soukromí při používání Bitcoinu.",
    icon: LockKeyhole,
    level: "Pokročilý",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
    path: "/kurzy/soukromi"
  }
];

const CoursesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bitcoin-blue mb-4">
            Kurzy pro každou úroveň znalostí
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vyberte si z široké nabídky kurzů, které vás provedou světem Bitcoinu od úplných základů až po pokročilé koncepty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <course.icon className="h-10 w-10 text-bitcoin-orange" />
                </div>
                <Badge className={`${course.color} ${course.textColor} font-normal mb-2`}>
                  {course.level}
                </Badge>
                <CardTitle className="text-xl font-bold text-bitcoin-blue">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">{course.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={course.path} className="w-full">
                  <Button variant="ghost" className="text-bitcoin-orange hover:text-bitcoin-blue hover:bg-gray-100 p-0 w-full justify-start">
                    Zobrazit kurz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/kurzy">
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
              Zobrazit všechny kurzy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
