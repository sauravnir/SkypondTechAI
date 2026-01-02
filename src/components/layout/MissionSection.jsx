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
  Brain,
  Share,
  BrainCircuit,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Highlighter } from "../ui/highlighter";
import { AnimatedList } from "../ui/animated-list";
import { ProgressiveBlur } from "../ui/progressive-blur";
import "@/index.css";
import { Separator } from "../ui/separator";

import SymbolLogo from "@/assets/media/logosymbol.png";

// Animation for OurMission Section

export const MissionAnimation = () => {
  const containerSize = 400; // px
  const center = { x: containerSize / 2, y: containerSize / 2 }; // center in px
  const orbitRadius = 140; // fixed radius for all orbiting icons
  const speed = 0.01; // rotation speed

  const nodes = [
    { label: "SkypondTechAI", icon: SymbolLogo, isCenter: true }, // central logo
    { label: "Brain", icon: Brain },
    { label: "Share", icon: Share },
    { label: "BrainCircuit", icon: BrainCircuit },
    { label: "Zap", icon: Zap },
  ];

  // For orbiting nodes, evenly space initial angles
  const orbitNodes = nodes.filter(n => !n.isCenter);
  const initialAngles = nodes.map((_, idx) => {
    if (nodes[idx].isCenter) return 0;
    const orbitCount = orbitNodes.length;
    const orbitIdx = idx - 1; // skip center
    return (orbitIdx * 2 * Math.PI) / orbitCount;
  });

  const [angles, setAngles] = useState(initialAngles);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngles(prev =>
        prev.map((a, idx) => nodes[idx].isCenter ? a : a + speed)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: containerSize,
        height: containerSize,
        background: "#F8F9FE",
      }}
    >
      {nodes.map((node, idx) => {
        const x = node.isCenter
          ? center.x
          : center.x + orbitRadius * Math.cos(angles[idx]);
        const y = node.isCenter
          ? center.y
          : center.y + orbitRadius * Math.sin(angles[idx]);

        const size = node.isCenter ? 70 : 50;
        const imgSize = node.isCenter ? 100 : 40;

        // Choose gradient based on node type
        const gradient = node.isCenter
          ? `shadow` // primary → darkprimary
          : `linear-gradient(135deg, ${"#06B6D4"} 0%, ${"#047d92"} 100%)`; // accent → darkaccent

        return (
          <motion.div
            key={idx}  
            className="absolute flex items-center justify-center"
            style={{
              left: x,
              top: y,
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              zIndex: node.isCenter ? 10 : 5,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center p-2 shadow-xl animate-float"
              style={{
                background: gradient,
                boxShadow: `0 4px 10px ${"#64748B33"}`, // muted color with transparency
              }}
            >
              {node.isCenter ? (
                <img
                  src={node.icon}
                  alt={node.label}
                  style={{
                    width: imgSize,
                    height: imgSize,
                    objectFit: "contain",
                  }}
                  
                />
              ) : (
                <node.icon size={imgSize} className="text-white" />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
// Animation for WhyWeBuild Section
const WhyBuildAnimation = () => {
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
    <div className="relative flex flex-col w-full max-w-md h-[350px] overflow-hidden p-2">
      <AnimatedList key={listKey} delay={2000}>
        {whyWeBuild.map((i) => {
          const Icons = i.icon;
          return (
            <div className="flex flex-row items-center justify-start bg-card shadow-lg p-4 rounded-xl gap-4">
              <div
                className={`flex w-10 h-10 rounded-full justify-center items-center bg-gradient-to-r ${i.gradient} `}
              >
                <Icons
                  className=" transition-transform duration-300 text-white"
                  size={18}
                />
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
    </div>
  );
};

export default function MissionSection() {
  const content = [
    {
      title: "Our Mission",
      body: "At Skypond, we're not just building AI products- we're transforming how Long-Term Care pharmacies operate. Our mission is to democratize enterprise-grade AI technology and make it accessible, powerful, and transformative for healthcare organization of all sizes. We believe every pharmacy, regardless of size or resources, deserves access to the same advanced automation capabilities that only large enterprises could previously afford.",
    },
    {
      title: "Why We Build",
      body: `Long-term care pharmacy is complex, critical, and underserved by technology. Today's pharmacy teams are overwhelmed with manual tasks, error-prone processes, and compliance challenges. Skypond exists to change that. We embed deep healthcare expertise into every feature, ensuring our AI solutions don't just automate—they enhance decision-making, reduce errors, and give pharmacy professionals the tools they deserve.`,
    },
    // {
    //   title: "Our Values",
    //   body: `At Skypond, our values drive everything we do: we embrace innovation to build smarter, more efficient AI solutions for long-term care pharmacies; operate with integrity, ensuring transparency and accountability in every process; pursue excellence, delivering measurable results and setting new industry standards; foster collaboration with clients and partners to create solutions tailored to real-world needs; and maintain a patient-centric focus, freeing pharmacy teams from administrative burdens so they can prioritize improving patient care and safety.`,
    // },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
        <div className="flex flex-col  lg:flex-row lg:items-end lg:justify-between ">
          <div className="items-start">
            <Badge
              variant="outline"
              className="font-ui text-[14px] font-bold text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-8 "
            >
              Our Goals
            </Badge>
            <h1 className="text-start font-heading max-w-xl mx-auto text-h1 text-heading font-bold ">
              <span className="text-primary">Shaping</span> the future of{" "}
              <span className="text-primary">LTC Pharmacy</span>
            </h1>
            <p className="mt-8 max-w-lg font-body text-paragraph text-muted">
              Smarter automation, measurable outcomes, and a new standard for
              long-term care pharmacy operations
            </p>
            <div className="group mt-4">
              <Link
                to="https://meetings-na2.hubspot.com/ramesh-kc?hsCtaAttrib=259620249274&uuid=082c0e40-466f-47c6-864d-ef27eed1a791"
                target="_blank"
              >
                <Button
                  variant="default"
                  className="rounded-full text-[15px] bg-primary font-body hover:bg-altbackground/90 text-primary-foreground "
                  size="sm"
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
                  index % 2 === 1 ? "lg:text-left" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1 lg:text-left " : ""
                  }`}
                >
                  <div
                    className={`flex items-start gap-3 mb-4 ${
                      index % 2 === 1 ? "lg:justify-start " : ""
                    }`}
                  >
                    {/* <Icon className="w-6 h-6 text-primary" /> */}
                    <div
                      className={`flex flex-col  justify-end  ${
                        item.title === "Why We Build"
                          ? "flex justify-right items-right text-start "
                          : " "
                      }`}
                    >
                      <h2 className="font-heading text-h3 font-bold transition-color duration-300 hover:text-primary">
                        {item.title} <br></br>
                      </h2>
                      <div>
                        <Separator className="border-4 border-primary w-[100px] justify-start mt-2 " />
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-paragraph text-heading text-justify">
                    {item.body}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-0" : ""}>
                  {item.title === "Why We Build" && (
                    <div>
                      <WhyBuildAnimation />
                    </div>
                  )}

                  {item.title === "Our Mission" && <MissionAnimation />}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-32">
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
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
            className="absolute inset-0 w-full h-full opacity-30 translate-y-6 pointer-events-none"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              fillOpacity="0.3"
              d="M0,192L96,208C192,224,384,256,576,245.3C768,235,960,181,1152,160C1344,139,1440,160,1440,160L1440,0L0,0Z"
            />
          </svg>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border-2 p-8 lg:p-12 relative overflow-hidden animate-float">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary rounded-full -translate-y-1/2 translate-x-1/2 opacity-100"></div>

              <div className="relative">
                {/* Quote marks */}
                <div className="text-6xl text-primary/40 font-ui mb-4">"</div>

                {/* Trust statement */}
                <p className="font-heading text-h3 font-bold pl-8">
                  Trusted by leading pharmacy networks who value reliability,
                  compliance, and measurable ROI.
                </p>

                {/* Signature line */}
                <Separator className="bg-primary h-1 w-72 items-start ml-8 mt-4" />

                {/* CTA */}
                <div className="group pl-8 mt-8">
                  <Link to="https://www.skypondtech.com" target="_blank">
                    <Button
                      variant="ghost"
                      className="text-[15px] rounded-full text-accent hover:underline  hover:text-altbackground/90"
                    >
                      Join the movement toward intelligent pharmacy operations
                      <ChevronRight
                        className="group-hover:scale-125"
                        strokeWidth={2.75}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
