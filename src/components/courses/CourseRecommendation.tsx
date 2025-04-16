
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecommendationItem {
  text: string;
}

interface CourseRecommendationProps {
  title: string;
  description: string;
  items: RecommendationItem[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const CourseRecommendation = ({ 
  title, 
  description, 
  items, 
  buttonText, 
  imageSrc, 
  imageAlt 
}: CourseRecommendationProps) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold text-bitcoin-blue mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-blue px-8 py-6 text-lg">
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-sm" 
          />
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendation;
