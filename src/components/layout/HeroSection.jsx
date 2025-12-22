import React from "react";
import { Badge } from "../ui/badge";
import "@/index.css";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[700px] sm:h-[750px] md:h-[800px] lg:h-[900px] bg-[#181e2cff]">
      {/* <div
        className="absolute -z-10  w-[120vw] h-[100%] top-0 right-0 opacity-70 blur"
        style={{
          background: "linear-gradient(120deg, #FFFFFF, #F9FAFB, #6366F1, #C7D2FE)",
          backgroundSize: "400% 400%",
          animation: "float 15s ease infinite",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 25%, 0% 80%)",
        }}
      />

      <div
        className="absolute -z-10  w-[120vw] h-[100%] top-0 right-0 opacity-100 "
        style={{
          background: "linear-gradient(135deg, #4e4141ff, #6366F1, #A5F3FC)",
          backgroundSize: "400% 400%",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 15%, 0% 80%)",
        }}
      /> */}

    
      <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 justify-center items-center ">
        <Badge
          variant="outline"
          className="font-ui text-[14px] text-accent border-border font-bold gap-2 px-5 py-1 rounded-full uppercase transition-transform hover:scale-105 duration-300"
        >
          Enterprise AI For Healthcare Innovation
        </Badge>
        <div className="h-screen max-w-5xl">
          <h1 className="mt-6 font-heading text-hero text-[#E5E7EB] text-center font-extrabold font-stretch-condensed">
            <span>Revolutionizing LTC Pharmacy Operations</span> with Enterprise
            AI
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
