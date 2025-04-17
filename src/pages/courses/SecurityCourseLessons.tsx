
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import CourseViewer from "@/components/courses/CourseViewer";
import { Shield, PlayCircle, FileText } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Základy bezpečnosti v kryptoměnách",
    description: "Proč je bezpečnost u Bitcoinu tak důležitá",
    duration: "60 min",
    type: "Video",
    completed: true
  },
  {
    id: 2,
    title: "Veřejné a soukromé klíče",
    description: "Pochopení principů kryptografie veřejných klíčů",
    duration: "75 min",
    type: "Video",
    completed: false
  },
  {
    id: 3,
    title: "Typy Bitcoin peněženek",
    description: "Hot, cold a hardware peněženky - srovnání a bezpečnostní aspekty",
    duration: "90 min",
    type: "Video",
    completed: false
  },
  {
    id: 4,
    title: "Seed fráze a její zabezpečení",
    description: "Jak bezpečně uchovávat recovery seed",
    duration: "60 min",
    type: "Workshop",
    completed: false
  },
  {
    id: 5,
    title: "Multisignature peněženky",
    description: "Pokročilé zabezpečení pomocí více podpisů",
    duration: "90 min",
    type: "Video",
    completed: false
  },
  {
    id: 6,
    title: "Zabezpečení proti fyzickým hrozbám",
    description: "Ochrana před fyzickým přístupem k vašim zařízením a klíčům",
    duration: "45 min",
    type: "Video",
    completed: false
  },
  {
    id: 7,
    title: "Test bezpečnostních znalostí",
    description: "Ověřte si své znalosti o zabezpečení Bitcoinu",
    duration: "30 min",
    type: "Test",
    completed: false
  }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <Shield className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const SecurityCourseLessons = () => {
  const { lessonId } = useParams();
  const currentLessonId = lessonId ? parseInt(lessonId) : 1;
  
  useEffect(() => {
    document.title = "Technická bezpečnost - Lekce | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <CourseViewer 
        courseName="Technická bezpečnost"
        lessons={lessons}
        currentLessonId={currentLessonId}
        typeIcons={typeIcons}
      />
    </PageLayout>
  );
};

export default SecurityCourseLessons;
