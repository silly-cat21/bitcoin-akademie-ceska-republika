
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import CourseViewer from "@/components/courses/CourseViewer";
import { PlayCircle, BookOpen, FileText } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Co je Bitcoin a jak vznikl",
    description: "Historie a základní principy Bitcoinu",
    duration: "60 min",
    type: "Video",
    completed: false
  },
  {
    id: 2,
    title: "Jak funguje blockchain",
    description: "Technické základy decentralizované účetní knihy",
    duration: "90 min",
    type: "Video",
    completed: false
  },
  {
    id: 3,
    title: "Bitcoin peněženky",
    description: "Typy peněženek a jak je používat",
    duration: "75 min",
    type: "Workshop",
    completed: false
  },
  {
    id: 4,
    title: "Jak nakoupit a prodat Bitcoin",
    description: "Burzy, směnárny a P2P obchodování",
    duration: "60 min",
    type: "Video",
    completed: false
  },
  {
    id: 5,
    title: "Bitcoin transakce",
    description: "Jak fungují transakce a poplatky",
    duration: "45 min",
    type: "Video",
    completed: false
  },
  {
    id: 6,
    title: "Bitcoin těžba",
    description: "Princip Proof of Work a těžební hardware",
    duration: "60 min",
    type: "Video",
    completed: false
  },
  {
    id: 7,
    title: "Základní test znalostí",
    description: "Ověřte si, co jste se naučili o základech Bitcoinu",
    duration: "30 min",
    type: "Test",
    completed: false
  }
];

const typeIcons = {
  "Video": <PlayCircle className="h-4 w-4" />,
  "Workshop": <BookOpen className="h-4 w-4" />,
  "Test": <FileText className="h-4 w-4" />
};

const BasicCourseLessons = () => {
  const { lessonId } = useParams();
  const currentLessonId = lessonId ? parseInt(lessonId) : 1;
  
  useEffect(() => {
    document.title = "Základy Bitcoinu - Lekce | Bitcoin Akademie";
  }, []);

  return (
    <PageLayout>
      <CourseViewer 
        courseName="Základy Bitcoinu"
        lessons={lessons}
        currentLessonId={currentLessonId}
        typeIcons={typeIcons}
      />
    </PageLayout>
  );
};

export default BasicCourseLessons;
