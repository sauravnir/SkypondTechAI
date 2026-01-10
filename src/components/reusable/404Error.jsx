import React from "react";

import NavigationBar from "../layout/NavigationBar";
import RecallSection from "../layout/RecallSection";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight, Navigation } from "lucide-react";
import { TypingAnimation } from "../ui/typing-animation";

export default function Error404(){
    return ( 
      <> <NavigationBar />
      <div className="relative w-full flex flex-col items-center justify-center bg-background ">
          
      <h1 className="font-heading text-hero text-heading font-bold mt-32 ">
        Coming Soon{" "} <TypingAnimation >...</TypingAnimation>
      </h1>
      <Link
        to="/"
        className="flex flex-row items-center mt-12 font-hero text-button text-accent uppercase mb-12"
      ><Button variant="default">
        <span>Back to site</span> 
      </Button>
        
      </Link>
    </div>
    <Footer/>
      </>
        
    )
}