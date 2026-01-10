import React from "react";

import NavigationBar from "../layout/NavigationBar";
import RecallSection from "../layout/RecallSection";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { TypingAnimation } from "../ui/typing-animation";

export default function Error404(){
    return ( 
        <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <h1 className="font-heading text-hero text-heading font-bold">
        Coming Soon{" "} <TypingAnimation  loop>...</TypingAnimation>
      </h1>

      <Link
        to="/"
        className="flex flex-row items-center mt-12 font-hero text-button text-accent uppercase"
      ><Button variant="default">
        <span>Back to site</span> 
      </Button>
        
      </Link>
    </div>
    )
}