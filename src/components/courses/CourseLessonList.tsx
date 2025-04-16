
import { PlayCircle, FileText, Lock } from "lucide-react";

interface Lesson {
  title: string;
  description: string;
  duration: string;
  type: string;
}

interface CourseLessonListProps {
  lessons: Lesson[];
  typeIcons: Record<string, React.ReactNode>;
}

const CourseLessonList = ({ lessons, typeIcons }: CourseLessonListProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-bitcoin-blue mb-6">
        Obsah kurzu
      </h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-bitcoin-orange transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Lock className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{lesson.title}</h3>
                  <p className="text-gray-600">{lesson.description}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{lesson.duration}</span>
                <div className="px-2 py-1 bg-gray-100 rounded">
                  {typeIcons[lesson.type] || <PlayCircle className="h-4 w-4" />}
                  <span className="sr-only">{lesson.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLessonList;
