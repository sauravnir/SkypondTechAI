import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import MainServices from "@/components/layout/MainContent";
import Footer from "@/components/layout/Footer";
import MainServices1 from "@/components/layout/test";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavigationBar />
      <HeroSection />
      <MainServices />
      {/* <MainServices1 /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
