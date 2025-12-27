import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card , 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "../ui/card";
import { MagicCard } from "../ui/magic-card";
import { ChevronRight, MoveUpRight, Rocket , User , Medal , Shield ,BriefcaseBusiness} from "lucide-react";

import { animate, utils, stagger, splitText } from "animejs";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

import "@/index.css";
import { Separator } from "@radix-ui/react-separator";
// import "@src/App.css"

const HeroSection = () => {
  //Creating Hero Text Hover Animation
  const titleRef = useRef(null);
  const colors = useRef([]);

  //Creating fetures array

  const itemList = [
    {
      icon:<User/> ,
      head:"50+",
      body:"LTC Facilities",
    },
    {
      icon:<Medal /> ,
      head:"HIPAA",
      body:"Compliant",
    },
    {
      icon:<Shield/> ,
      head:"99%",
      body:"Uptime",
    },
    {
      icon:<BriefcaseBusiness/> ,
      head:"Enterprise",
      body:"Grade",
    },
  ]

  // Custom hook for Text Animation
  // useEffect(() => {
  //   if (!titleRef.current) return;
  //   // Split text AFTER React renders
  //   const split = splitText(titleRef.current, {
  //     words: true,
  //   })
  //     // Floating Effect
  //     // .addEffect(({ words }) =>
  //     //   animate(words, {
  //     //     y: ["0%", "10%", "-10"],
  //     //     direction: "alternate",
  //     //     loop: true,
  //     //     delay: stagger(200),
  //     //     duration: 3500,
  //     //     easing: "easeInOutSine",
  //     //   })
  //     // )

  //     /* Hover color effect */
  //     .addEffect((splitInstance) => {
  //       splitInstance.words.forEach((el, i) => {
  //         colors.current[i] = utils.get(el, "color");

  //         el.addEventListener("pointerenter", () => {
  //           animate(el, {
  //             color: utils.randomPick([
  //               "#1e3a8a", // deep blue
  //               "#4338ca", // royal purple
  //               "#2ea75aff", // soft green
  //               "#250525ff", // soft red
  //             ]),
  //             duration: 250,
  //             easing: "easeOutQuad",
  //           });
  //         });

  //         el.addEventListener("pointerleave", () => {
  //           animate(el, {
  //             color: colors.current[i],
  //             duration: 400,
  //             easing: "easeOutQuad",
  //           });
  //         });
  //       });

  //       // Cleanup between re-splits
  //       return () => {
  //         splitInstance.words.forEach((w, i) => {
  //           colors.current[i] = utils.get(w, "color");
  //         });
  //       };
  //     });

  //   return () => {
  //     split.revert(); // 🔥 VERY IMPORTANT cleanup
  //   };
  // }, []);

  return (
    <section className="relative overflow-hidden sm:h-[850px] md:h-[900px] lg:h-[900px]">
      <div className="absolute inset-0 w-full h-full bg-altbackground pointer-events-auto">
        {/* <BackgroundGradientAnimation /> */}
        <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          " inset-y-[-50%] h-[200%] skew-y-12 opacity-20"
        )} 
      />
      </div>
      <div className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 justify-center items-center pointer-events-none ">
        <div className="group">
          <Badge
          variant="default"
          className="font-ui text-[14px] bg-null text-accent border border-accent font-bold gap-2 px-5 py-1 rounded-full hover:bg-slate-900 uppercase mb-8 pointer-events-auto"
        >
          
          Enterprise AI For Healthcare Innovation<Rocket size={15} className="transition-transform duration-300 inline-block text-amber-400 " />
        </Badge>
        </div>
        

        <div className="max-w-5xl items-center text-center">
          {/* Referencing H1 for animation */}
          <h1
            ref={titleRef}
            className=" font-heading text-gradient text-hero text-[#E5E7EB] font-extrabold"
          >
            Revolutionizing LTC Pharmacy 
          </h1>

          <div className=" font-heading text-hero text-[#E5E7EB] ">
            <span className="">Operations with Enterprise AI </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center mt-8">
            <p className="font-body text-paragraph text-bodycontent max-w-3xl">
              Skypond delivers enterprise-ready AI built for long-term care
              pharmacies—automating complex workflows, reducing operational
              friction, and enabling teams to scale securely with full
              compliance and measurable impact.
            </p>
          </div>

          <div className="flex space-x-6 justify-center items-center mt-8 pointer-events-auto">
            <div className="group">
              <Button
                variant="default"
                className="btn-gradient rounded-full text-[16px] font-body text-primary-foreground "
                size="lg"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:scale-150">
                  <ChevronRight strokeWidth={2.75}/>
                </span>
              </Button>
            </div>

            <div className="group">
              <Link to="https://skypondtech.com" target="_blank">
                <Button
                  variant="outline"
                  className="text-[16px] font-body rounded-full text-[#E5E7EB] bg-null flex items-center "
                  size="lg"
                >
                  Main Website
                  <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                    <MoveUpRight strokeWidth={2.75}/>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="font-base text-muted text-small mt-6">
            <h1 className="underline">
              No credit card required | Full Access for 14 days
            </h1>
          </div>

        </div>
      </div>

      
<div className="relative flex justify-center items-center z-10 w-full py-24">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full ">
    {itemList.map((item, index) => (
      <div key={item.head} className="group">
        <Card
          className="group relative h-20 md:h-24 p-6 bg-null border border-slate-400 hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl backdrop-blur-sm"
        >
          <div className="flex items-center space-x-4 h-full items-start">
            <div className="flex-shrink-0 p-3 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 text-primary-foreground">
              {item.icon}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <CardTitle className="font-body text-[24px] text-primary group-hover:text-primary transition-colors">
                {item.head}
              </CardTitle>
              <CardDescription className="font-body text-sm md:text-base font-medium text-muted  mt-1">
                {item.body}
              </CardDescription>
            </div>
          </div>
        </Card>
      </div>
    ))}
  </div>
</div>


    </section>
  );
};

export default HeroSection;
