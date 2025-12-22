import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavigationBar />
      <HeroSection />
      <div className="h-12"></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
