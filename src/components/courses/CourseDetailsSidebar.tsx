
import { Clock, PlayCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseDetailsSidebarProps {
  level: {
    color: string;
    text: string;
  };
  duration: string;
  format: string;
  ctaText?: string;
  ctaSubtext?: string;
}

const CourseDetailsSidebar = ({ 
  level, 
  duration, 
  format, 
  ctaText = "Začít kurz", 
  ctaSubtext = "K dispozici v Premium členství" 
}: CourseDetailsSidebarProps) => {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-bitcoin-blue">Detaily kurzu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-gray-600 mb-2">Úroveň</p>
          <div className="flex items-center">
            <div className={`h-2.5 w-2.5 rounded-full bg-${level.color} mr-2`}></div>
            <span className="font-medium">{level.text}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Délka kurzu</p>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-bitcoin-orange mr-2" />
            <span>{duration}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Formát</p>
          <div className="flex items-center">
            <PlayCircle className="h-5 w-5 text-bitcoin-orange mr-2" />
            <span>{format}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Certifikát</p>
          <div className="flex items-center">
            <Award className="h-5 w-5 text-bitcoin-orange mr-2" />
            <span>Po dokončení kurzu</span>
          </div>
        </div>
        <div className="pt-4">
          <Button className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-blue">
            {ctaText}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-2">
            {ctaSubtext}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseDetailsSidebar;
