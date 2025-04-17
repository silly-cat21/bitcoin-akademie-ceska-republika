
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CourseLesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: string;
  completed?: boolean;
}

interface CourseViewerProps {
  courseName: string;
  lessons: CourseLesson[];
  currentLessonId?: number;
  typeIcons?: Record<string, React.ReactNode>;
}

const CourseViewer = ({ courseName, lessons, currentLessonId = 1, typeIcons }: CourseViewerProps) => {
  const [currentLesson, setCurrentLesson] = useState<number>(currentLessonId);
  const lesson = lessons.find(l => l.id === currentLesson) || lessons[0];
  
  const progress = Math.round((lessons.filter(l => l.completed).length / lessons.length) * 100);
  
  const nextLesson = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson(currentLesson + 1);
    }
  };
  
  const prevLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
    }
  };
  
  const getDefaultIcon = (type: string) => {
    switch (type) {
      case "Video": return <PlayCircle className="h-4 w-4" />;
      case "Workshop": return <Shield className="h-4 w-4" />;
      case "Test": return <FileText className="h-4 w-4" />;
      default: return <PlayCircle className="h-4 w-4" />;
    }
  };
  
  const getIcon = (type: string) => {
    if (typeIcons && typeIcons[type]) {
      return typeIcons[type];
    }
    return getDefaultIcon(type);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to={`/kurzy/bezpecnost`} className="inline-flex items-center text-bitcoin-blue hover:text-bitcoin-orange transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na přehled kurzu
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{courseName}</h1>
        <div className="flex items-center mb-6">
          <div className="w-full mr-4">
            <Progress value={progress} className="h-2" />
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap">{progress}% dokončeno</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
            <h2 className="font-bold text-lg mb-4">Obsah kurzu</h2>
            <ul className="space-y-3">
              {lessons.map((lessonItem) => (
                <li key={lessonItem.id}>
                  <button
                    onClick={() => setCurrentLesson(lessonItem.id)}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-start transition-colors ${
                      lessonItem.id === currentLesson 
                        ? "bg-bitcoin-orange/10 text-bitcoin-orange" 
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="mr-3 mt-1">
                      {lessonItem.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        getIcon(lessonItem.type)
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{lessonItem.title}</div>
                      <div className="text-xs text-gray-500">{lessonItem.duration}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {getIcon(lesson.type)}
                  <span className="ml-2 text-sm font-medium text-gray-500">{lesson.type} • {lesson.duration}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-2">{lesson.title}</h2>
              <p className="text-gray-600 mt-1">{lesson.description}</p>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
              <div className="w-full h-full flex items-center justify-center bg-bitcoin-blue/5">
                <div className="text-center">
                  <PlayCircle className="h-16 w-16 text-bitcoin-orange mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500">Video obsah kurzu</p>
                  <p className="text-sm text-gray-400">Kurz je ve výstavbě. Brzy bude k dispozici kompletní video obsah.</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none mb-8">
              <h3>Obsah lekce</h3>
              <p>
                Tato lekce je součástí kurzu Technická bezpečnost. V této lekci se dozvíte o důležitých aspektech 
                bezpečnosti při používání Bitcoinu a správě vašich privátních klíčů.
              </p>
              <p>
                Bezpečnost je jedním z nejdůležitějších aspektů při práci s kryptoměnami. "Not your keys, not your coins" 
                není jen fráze, ale základní princip, který by měl každý uživatel Bitcoinu znát a dodržovat.
              </p>
              
              <h3>Klíčové body této lekce:</h3>
              <ul>
                <li>Význam soukromých klíčů a seed fráze</li>
                <li>Typy Bitcoin peněženek a jejich bezpečnostní aspekty</li>
                <li>Správné postupy pro zabezpečení vašich bitcoinů</li>
                <li>Běžné hrozby a jak se jim vyhnout</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="text-yellow-800 font-medium">Poznámka</h4>
                <p className="text-yellow-700 text-sm">
                  Toto je ukázková lekce. V plné verzi kurzu zde najdete kompletní obsah včetně videí, 
                  interaktivních cvičení a testů znalostí.
                </p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
              <Button 
                variant="outline" 
                onClick={prevLesson} 
                disabled={currentLesson <= 1}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Předchozí lekce
              </Button>
              
              <Button 
                onClick={nextLesson} 
                disabled={currentLesson >= lessons.length}
                className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white flex items-center"
              >
                Další lekce
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;
