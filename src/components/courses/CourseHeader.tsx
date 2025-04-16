
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CourseHeaderProps {
  title: string;
  description: string;
}

const CourseHeader = ({ title, description }: CourseHeaderProps) => {
  return (
    <div className="mb-10">
      <Link to="/kurzy" className="text-bitcoin-orange hover:text-bitcoin-blue flex items-center mb-4">
        <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
        Zpět na všechny kurzy
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold text-bitcoin-blue mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl">
        {description}
      </p>
    </div>
  );
};

export default CourseHeader;
