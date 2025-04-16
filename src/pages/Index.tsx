
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ToolsSection from "@/components/sections/ToolsSection";
import MonetizationSection from "@/components/sections/MonetizationSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { useEffect } from "react";

const Index = () => {
  // Update page title on mount
  useEffect(() => {
    document.title = "Bitcoin Akademie | Vzdělávání o Bitcoinu v Češtině";
  }, []);

  return (
    <PageLayout>
      <HeroSection />
      <CoursesSection />
      <ToolsSection />
      <MonetizationSection />
      <NewsletterSection />
    </PageLayout>
  );
};

export default Index;
