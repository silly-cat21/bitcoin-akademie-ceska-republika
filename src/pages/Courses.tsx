
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Shield, ArrowRight, Zap, Coins, LockKeyhole, BarChart3, Users, Star } from "lucide-react";
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
    students: "1,250+",
    score: "4.9",
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
    students: "850+",
    score: "4.8",
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
    students: "950+",
    score: "4.7",
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
    students: "750+",
    score: "4.9",
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
    students: "820+",
    score: "4.8",
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
    students: "680+",
    score: "4.7",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, rgba(99, 102, 241, 0.02) 90%)"
  }
];

const Courses = () => {
  useEffect(() => {
    document.title = "Kurzy | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-bitcoin-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bitcoin-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-bitcoin-orange font-medium mb-2 inline-block">BITCOIN AKADEMIE</span>
            <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-6">
              Kurzy Bitcoin Akademie
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Vyberte si z široké nabídky kurzů, které vás provedou světem Bitcoinu od úplných základů až po pokročilé koncepty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-100 shadow overflow-hidden" style={{ background: course.bgPattern }}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white p-3 w-12 h-12 rounded-lg shadow-sm flex items-center justify-center">
                      <course.icon className="h-6 w-6 text-bitcoin-orange" />
                    </div>
                    <Badge className={`${course.color} ${course.textColor} font-normal`}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-bitcoin-blue">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-bitcoin-orange" />
                      <span>{course.students} studentů</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-bitcoin-orange" />
                      <span>{course.score}/5</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
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

          <div className="mt-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-2xl p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold text-bitcoin-blue mb-3">Připravujeme další kurzy</h2>
                <p className="text-gray-600 mb-0">
                  Sledujte naše novinky a buďte první, kdo získá přístup k novým kurzům o Bitcoinu a kryptoměnách.
                </p>
              </div>
              <Button className="bg-bitcoin-orange hover:bg-bitcoin-blue text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                Odebírat novinky
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Courses;
