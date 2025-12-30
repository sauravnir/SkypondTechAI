import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import MainServices from "@/components/layout/MainServices";
import Footer from "@/components/layout/Footer";
import MissionSection from "@/components/layout/MissionSection";
import MainStats from "@/components/layout/MainStats";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <MainServices />
      <MainStats />
      <MissionSection />
      <Footer />
    </div>
  );
};
export default LandingPage;
