import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Target,
  Eye,
  Handshake,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Highlighter } from "../ui/highlighter";
import { Globe } from "../ui/globe";
import { AnimatedList } from "../ui/animated-list";
import { ProgressiveBlur } from "../ui/progressive-blur";
import "@/index.css";

export default function MissionSection() {
  const content = [
    {
      title: "Our Mission",
      icon: Target,
      color: "#5391f4ff",
      body: "At Skypond, we're not just building AI products- we're transforming how Long-Term Care pharmacies operate. Our mission is to democratize enterprise-grade AI technology and make it accessible, powerful, and transformative for healthcare organization of all sizes. We believe every pharmacy, regardless of size or resources, deserves access to the same advanced automation capabilities that only large enterprises could previously afford.",
    },
    {
      title: "Why We Build",
      icon: Eye,
      color: "#18cd91ff",
      body: `Long-term care pharmacy is complex, critical, and underserved by technology. Today's pharmacy teams are overwhelmed with manual tasks, error-prone processes, and compliance challenges. Skypond exists to change that. We embed deep healthcare expertise into every feature, ensuring our AI solutions don't just automate—they enhance decision-making, reduce errors, and give pharmacy professionals the tools they deserve.`,
    },
    {
      title: "Our Values",
      icon: Eye,
      color: "#e1701eff",
      body: `At Skypond, our values drive everything we do: we embrace innovation to build smarter, more efficient AI solutions for long-term care pharmacies; operate with integrity, ensuring transparency and accountability in every process; pursue excellence, delivering measurable results and setting new industry standards; foster collaboration with clients and partners to create solutions tailored to real-world needs; and maintain a patient-centric focus, freeing pharmacy teams from administrative burdens so they can prioritize improving patient care and safety.`,
    },
  ];

  // const anchorStyles = [
  //   {
  //     bg: "bg-primary/20",
  //     size: "w-28 h-28",
  //     glow: "animate-pulse-slow",
  //     iconBg: "bg-primary/30",
  //     iconAnimation: "animate-bounce-slow",
  //   },
  //   {
  //     bg: "bg-accent/20",
  //     size: "w-32 h-32",
  //     glow: "animate-pulse-slow delay-200",
  //     iconBg: "bg-accent/30",
  //     iconAnimation: "animate-bounce-slow delay-200",
  //   },
  // ];

 const whyWeBuild = [
  {
    title: "Complex Workflows",
    body: "Manual tasks and repetitive processes slow teams down",
    icon: Target,
    gradient: "bg-gradient-to-r from-[#5391f4ff] to-[#0e81c8ff]", 
  },
  {
    title: "Compliance Burden",
    body: "Regulations are critical but cumbersome",
    icon: Eye,
    gradient: "bg-gradient-to-r from-[#18cd91ff] to-[#0d9488ff]", 
  },
  {
    title: "Smart AI Assistance",
    body: "Automates tasks while supporting decision-making",
    icon: Handshake,
    gradient: "bg-gradient-to-r from-[#fcbf1eff] to-[#e1701eff]", 
  },
  {
    title: "Error Reduction",
    body: "Minimizes mistakes, improves accuracy",
    icon: CheckCircle,
    gradient: "bg-gradient-to-r from-[#f87171] to-[#ef4444]", 
  },
  {
    title: "Empowered Professionals",
    body: "Lets pharmacists focus on patient care",
    icon: Award,
    gradient: "bg-gradient-to-r from-[#facc15] to-[#eab308]", 
  },
  {
    title: "Data-Driven Insights",
    body: "Provides actionable analytics to improve decision-making",
    icon: Target,
    gradient: "bg-gradient-to-r from-[#22c55e] to-[#16a34a]", 
  },
  {
    title: "Enhanced Productivity",
    body: "Reduces administrative burden and frees up time",
    icon: Handshake,
    gradient: "bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]", 
  },
  {
    title: "Seamless Integration",
    body: "Connects effortlessly with existing pharmacy software",
    icon: Eye,
    gradient: "bg-gradient-to-r from-[#06b6d4] to-[#0e7490]", 
  },
  {
    title: "Patient-Centric Care",
    body: "Ensures pharmacy teams can focus on improving patient outcomes",
    icon: Award,
    gradient: "bg-gradient-to-r from-[#f97316] to-[#ea580c]", 
  },
  {
    title: "Scalable Solutions",
    body: "Adaptable technology that grows with your organization",
    icon: CheckCircle,
    gradient: "bg-gradient-to-r from-[#3b82f6] to-[#2563eb]", 
  },
];



  // Reanimating the list after certain interval
  const [listKey, setListKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setListKey((prev) => prev + 1); 
    }, 21000); // setting 22secs for refreshing the animation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background ">
      
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
        <div className="flex flex-col  lg:flex-row lg:items-end lg:justify-between gap-8 ">
          <div className="items-start space-y-4">
            <Badge
              variant="outline"
              className="font-ui text-[14px] bg-card text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-2 "
            >
              Our Goals
            </Badge>
            <h1 className="font-heading text-h1 text-heading font-bold">
              Shaping the future of LTC Pharmacy
            </h1>
            <p className="mt-3 max-w-lg font-body text-paragraph text-muted">
              Smarter automation, measurable outcomes, and a new standard for
              long-term care pharmacy operations
            </p>
          </div>
          <div className="group flex items-end p-2 mt-4">
            <div className="group">
              <Link to="/" target="_blank">
                <Button
                  variant="default"
                  className="rounded-full text-[16px] bg-primary font-body hover:bg-primary/80 text-primary-foreground border border-primary shadow"
                  size="md"
                  
                >
                  Schedule Demo
                  <span className="transition-transform duration-300 group-hover:scale-150">
                    <ChevronRight strokeWidth={2.75} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto space-y-32 mt-8">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border/40 -translate-x-1/2 hidden lg:block" />
          {content.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2 lg:text-right " : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 1 ? "lg:justify-end " : ""
                    }`}
                  >
                    {/* <Icon className="w-6 h-6 text-primary" /> */}
                    <h2 className="font-heading text-h3 font-bold transition-color duration-300 hover:text-primary">
                     {item.title}
                    </h2>
                  </div>

                  <p className="font-body text-paragraph text-heading text-justify">
                    {item.body}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {item.title === "Why We Build" && (
                    <div className="relative flex flex-col w-full max-w-md h-[350px] overflow-hidden p-2">
                      <AnimatedList key={listKey} delay={2000}>
                        {whyWeBuild.map((i) => {
                          const Icons = i.icon;
                          return (
                            <div className="flex flex-row items-center justify-start bg-card shadow-lg p-4 rounded-xl gap-4">
                              <div className={`flex w-10 h-10 rounded-full justify-center items-center bg-gradient-to-r ${i.gradient} `}>
                                <Icons className=" transition-transform duration-300 text-white" size={18}/>
                              </div>
                              <div className="flex flex-col justify-start items-start text-start">
                                <h1 className="font-heading text-paragraph text-heading font-bold">
                                  {i.title}
                                </h1>
                                <p className="max-w-sm font-body text-small text-muted ">
                                  {i.body}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                       
                        
                      </AnimatedList>
                      {/* Applying blur */}
                      {/* <ProgressiveBlur position="bottom" height="10%"/> */}
                    </div>
                  )}

                {item.title==="Our Mission" && (
                  <div></div>
                )}
                  
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col max-w-5xl mx-auto p-8 rounded-2xl border mt-16 animate-float bg-card ">
          <div className="p-4 text-center space-y-4">
            <p className="font-body text-paragraph text-heading">
              <span className="font-bold text-primary">
                Trusted by leading pharmacy networks
              </span>{" "}
              who value reliability, compliance, and measurable ROI.
            </p>
            <Link></Link>
            <h1 className="font-body text-button text-heading font-medium ">
              <Highlighter action="underline" color="#0e81c8ff">
                <Link to="/">
                  Join the movement towards intelligent pharmacy operations.
                </Link>
              </Highlighter>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
