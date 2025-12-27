import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import MainServices from "@/components/layout/MainContent";
import Footer from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavigationBar />
      <HeroSection />
      <MainServices />
      <Footer />
    </div>
  );
};

export default LandingPage;
