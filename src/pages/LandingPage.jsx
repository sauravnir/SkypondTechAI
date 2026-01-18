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


const LandingPage = ({id}) => {
  
  return (
    <div id={id} className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <MainServices id="services"/>
      <StepSection id="howitworks"/>
      <WhyChoose />      
      <ProductsSection />
      <MissionSection />
      <MainStats id="impact"/>
      <RecallSection/>
      <Footer />
    </div>
  );
};
export default LandingPage;
