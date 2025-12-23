import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

import { animate, utils, stagger, splitText } from "animejs";

import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

import "@/index.css";
import { Separator } from "@radix-ui/react-separator";
// import "@src/App.css"

const HeroSection = () => {
  //Creating Hero Text Hover Animation
  const titleRef = useRef(null);
  const colors = useRef([]);
  // Custom hook for Text Animation
  useEffect(() => {
    if (!titleRef.current) return;
    // Split text AFTER React renders
    const split = splitText(titleRef.current, {
      words: true,
    })
      // Floating Effect
      // .addEffect(({ words }) =>
      //   animate(words, {
      //     y: ["0%", "10%", "-10"],
      //     direction: "alternate",
      //     loop: true,
      //     delay: stagger(200),
      //     duration: 3500,
      //     easing: "easeInOutSine",
      //   })
      // )

      

      /* Hover color effect */
      .addEffect((splitInstance) => {
        splitInstance.words.forEach((el, i) => {
          colors.current[i] = utils.get(el, "color");

          el.addEventListener("pointerenter", () => {
            animate(el, {
              color: utils.randomPick([
                "#1e3a8a", // deep blue
                "#4338ca", // royal purple
                "#4ade80", // soft green
                "#facc15", // soft red
              ]),
              duration: 250,
              easing: "easeOutQuad",
            });
          });

          el.addEventListener("pointerleave", () => {
            animate(el, {
              color: colors.current[i],
              duration: 400,
              easing: "easeOutQuad",
            });
          });
        });

        // Cleanup between re-splits
        return () => {
          splitInstance.words.forEach((w, i) => {
            colors.current[i] = utils.get(w, "color");
          });
        };
      });

    return () => {
      split.revert(); // 🔥 VERY IMPORTANT cleanup
    };
  }, []);

  return (
    <section className="relative overflow-hidden sm:h-[750px] md:h-[800px] lg:h-[890px]">
      
      <div className="absolute inset-0 -z-10 w-full h-full top-0 right-0 ">
        <BackgroundGradientAnimation />
      </div>

      <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 justify-center items-center">
        <Badge
          variant="outline"
          className="font-ui text-[18px] text-accent border-border font-bold gap-2 px-5 py-1 rounded-full uppercase transition-transform hover:scale-105 duration-300"
        >
          Enterprise AI For Healthcare Innovation
        </Badge>

        <div className="max-w-5xl items-center text-center">
          {/* Referencing H1 for animation */}
          <h1
            ref={titleRef}
            className="mt-6 font-heading text-hero text-[#E5E7EB] font-extrabold"
          >
            Revolutionizing <br></br> LTC Pharmacy Operations with Enterprise AI
          </h1>

          <div className="flex flex-col justify-center items-center text-center ">
            <h2 className="font-body text-[20px] uppercase text-paragraph text-primary  mt-12 font-bold ">
              Transform how your pharmacy operates, innovates, and scales in the
              digital age.
            </h2>

            <p className="font-body text-paragraph text-bodycontent mt-4 max-w-4xl">
              Skypond creates cutting-edge AI solutions that empower Long-Term
              Care pharmacies to automate complex workflows, reduce operational
              burden, and drive measurable results. From intelligent order
              processing to comprehensive document automation, our
              enterprise-grade platform streamlines operations while maintaining
              absolute HIPAA compliance.
            </p>
          </div>

          <div className="flex space-x-8 justify-center items-center mt-12">
            <div className="group">
              <Button
                variant="default"
                className="text-[16px] font-body text-primary-foreground hover:bg-accent "
                size="xl"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:scale-150 ">
                  <ChevronRight />
                </span>
              </Button>
            </div>
            <div className="group">
              <Link to="https://skypondtech.com" target="_blank">
                <Button
                  variant="outline"
                  className="text-[16px] font-body text-[#E5E7EB] bg-null hover:text-accent flex items-center hover:underline font-bold"
                  size="xl"
                >
                  Main Website
                  <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                    <ExternalLink />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="font-base text-muted text-button mt-6 ">
              <h1 className="underline">No credit card required | Full Access for 14 days </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
