import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/reusable/NavigationBar";
import HeroSection from "@/components/layout/LandingPage/HeroSection";
import MainServices from "@/components/layout/LandingPage/MainServices";
import Footer from "@/components/reusable/Footer";
import MissionSection from "@/components/layout/LandingPage/MissionSection";
import MainStats from "@/components/layout/LandingPage/MainStats";
import StepSection from "@/components/layout/LandingPage/StepSection";
import WhyChoose from "@/components/layout/LandingPage/WhyChoose";
import RecallSection from "@/components/layout/LandingPage/RecallSection";
import ProductsSection from "@/components/layout/LandingPage/Products"; 
import { MoveUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [pageScrolled, isPageScrolled] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      isPageScrolled(window.scrollY > 1000);
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);

  const onClick = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen">
    {/* Page Scroll Button */}
      {pageScrolled ? (
        <div className="flex flex-col fixed bottom-8 right-8 z-50 space-y-4">
          <Button
            onClick={onClick}
            size="lg"
            className="rounded-full p-4 bg-accent text-primary-foreground shadow-xl hover:bg-altbackground/90 transition-transform transform hover:scale-110"
          >
            <span className="flex items-center justify-center gap-2">
              <MoveUp/>
            </span>
          </Button>
        </div>
      ) : (
        ""
      )}
      <NavigationBar />
      <HeroSection id="top" />
      <MainServices id="services"/>
      <StepSection id="howitworks"/>
      <ProductsSection />
      <MissionSection />
      <WhyChoose />      
      <MainStats id="impact"/>
      <RecallSection/>
      <Footer />
    </div>
  );
};
export default LandingPage;
