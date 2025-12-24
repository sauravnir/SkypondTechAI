import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";
import AutoTabProgress from "@/components/layout/MainContent"

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavigationBar />
      <HeroSection />
      <div>
        <AutoTabProgress />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
