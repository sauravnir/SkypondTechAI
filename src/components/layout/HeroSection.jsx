import React from "react";
import { Link } from "react-router-dom";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardTitle,
} from "../ui/card";

import {
  ChevronRight,

  User,
  Medal,
  BriefcaseBusiness,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader , DialogTitle, DialogClose} from "../ui/dialog";
import GetStartedForm from "../reusable/GetStartedForm";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { ProgressiveBlur } from "../ui/progressive-blur";
import "@/index.css";


const HeroSection = () => {
  //Creating fetures array

  const itemList = [
    {
      icon: <User />,
      head: "50+",
      body: "LTC Facilities",
      gradient: "bg-gradient-to-r from-[#5391f4ff] to-[#0e81c8ff]",
    },
    {
      icon: <Medal />,
      head: "HIPAA",
      body: "Compliant",
      gradient: "bg-gradient-to-r from-[#18cd91ff] to-[#0d9488ff]",
    },
    {
      icon: <Shield />,
      head: "99%",
      body: "Uptime",
      gradient: "bg-gradient-to-r from-[#fcbf1eff] to-[#e1701eff]",
    },
    {
      icon: <BriefcaseBusiness />,
      head: "Enterprise",
      body: "Grade",
      gradient: "bg-gradient-to-r from-[#f87171] to-[#ef4444]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/10 to-primary ">
      {/* <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            " inset-y-[-50%] h-[200%] skew-y-12 opacity-30 "
          )}
        />
      </div> */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.5"
          d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L0,0Z"
        />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full opacity-25 translate-y-6"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.4"
          d="M0,192L96,208C192,224,384,256,576,245.3C768,235,960,181,1152,160C1344,139,1440,160,1440,160L1440,0L0,0Z"
        />
      </svg>

      <div className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 justify-center items-center pointer-events-none ">
        {/* <div className="group">
          <Badge
            variant="outline"
            className="font-ui text-[14px] hover:shadow-lg hover:bg-null text-white bg-accent border-2 border-accent font-bold gap-2  rounded-full mb-8 pointer-events-auto"
            
          >
            <Sparkles
              size={15}
              className="transition-transform duration-300 inline-block text-white "
            />
            Enterprise AI For Healthcare Innovation
            
          </Badge>
        </div> */}

        <div className="max-w-5xl items-center text-center ">
          {/* Referencing H1 for animation */}
          <h1 className="text-gradient font-heading text-hero font-extrabold ">
            Revolutionizing LTC Pharmacy
          </h1>

          <div className=" font-heading text-hero ">
            <span className="text-heading font-mediumi">Operations with Enterprise AI </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center mt-10">
            <p className="font-body text-paragraph text-heading max-w-2xl leading-relaxed">
              Skypond delivers enterprise-ready AI built for long-term care
              pharmacies—automating complex workflows, reducing operational
              friction, and enabling teams to scale securely with full
              compliance and measurable impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-10 pointer-events-auto">
            <div className="group">
            <Dialog>
              <DialogTrigger>
                <Button
              variant="default"
              className="text-[14px] text-primary-foreground rounded-full flex items-center "
              size="lg"
            >
              Get Started for FREE
              <span className="transition-transform duration-300 group-hover:scale-150 ">
                <ChevronRight strokeWidth={2.75} />
              </span>
            </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
                <GetStartedForm />
              </DialogContent>
            </Dialog>
            
          </div>

            <div className="group">
              <Link to="https://skypondtech.com" target="_blank">
                <Button
                  variant="outline"
                  className="text-[15px] font-body shadow-lg rounded-full text-heading bg-white border-muted flex items-center hover:text-accent"
                  size="lg"
                >
                  Skypond Tech
                  <span className="transition-transform duration-300 group-hover:scale-125">
                    <ArrowUpRight strokeWidth={2.75} />
                  </span>
                </Button>
              </Link>
            </div>

            
          </div>
            
          <div className="font-heading font-medium text-small mt-6">
            <h1 className="text-muted underline">
              Built for long-term care pharmacies · HIPAA-ready · Enterprise secure
            </h1>
          </div>
        </div>
      </div>

      <ProgressiveBlur height="45%" position="bottom" />
      <div className="relative flex justify-center items-center z-10 w-full py-24">
        {/* Right visual banner/poster */}
        <div className="flex-1 relative transition-transform duration-400 hover:scale-[1.01]">
          <div className="relative w-full max-w-6xl mx-auto ">
            {/* Main poster/banner */}
            <div className="btn-gradient rounded-3xl shadow-2xl p-12 relative z-10 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              {/* Content */}
              <div className="flex flex-col relative z-10 items-center justify-center">
                <h3 className="font-heading text-h3 text-white font-bold mb-4">
                  Transform Your Pharmacy Operations
                </h3>

                <p className="font-body text-small text-white mb-4">
                  Join hundreds of LTC pharmacies using AI to automate
                  workflows, ensure compliance, and deliver better patient care.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full ">
                  {itemList.map((item, index) => (
                    <div key={item.head} className="group">
                      <Card className="group relative h-20 md:h-24 p-4 bg-null border border-white hover:shadow-2xl backdrop-blur-sm ">
                        <div className="flex items-center space-x-4 h-full items-start">
                          <div
                            className={`flex-shrink-0 p-3 text-primary-foreground`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex flex-col min-w-0 flex-1 text-white">
                            <CardTitle className="font-body text-h3 ">
                              {item.head}
                            </CardTitle>
                            <CardDescription className="font-body text-sm md:text-base font-medium text-primary-foreground  mt-1">
                              {item.body}
                            </CardDescription>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
