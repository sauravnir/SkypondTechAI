import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import MainServices from "@/components/layout/MainServices";
import Footer from "@/components/layout/Footer";
import MissionSection from "@/components/layout/MissionSection";
import MainStats from "@/components/layout/MainStats";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <div
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      >
        <MainServices />
        <MainStats />
        <MissionSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
