import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import MainServices from "@/components/layout/MainServices";
import Footer from "@/components/layout/Footer";
import MissionSection from "@/components/layout/MissionSection";
import MainStats from "@/components/layout/MainStats";
import StepSection from "@/components/layout/StepSection";
import WhyChoose from "@/components/layout/WhyChoose";
import RecallSection from "@/components/layout/RecallSection";

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
      <MainStats id="impact"/>
      <MissionSection />
      <StepSection id="howitworks"/>
      <WhyChoose />
      <RecallSection id="contact"/>
      <Footer />
    </div>
  );
};
export default LandingPage;
