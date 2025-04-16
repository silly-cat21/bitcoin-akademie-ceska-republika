
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <ToolsSection />
        <MonetizationSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
