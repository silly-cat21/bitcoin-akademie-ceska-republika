
import React from "react";

interface CourseContentProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const CourseContent = ({ children, imageSrc, imageAlt }: CourseContentProps) => {
  return (
    <div className="col-span-2">
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
};

export default CourseContent;
