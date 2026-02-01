import React, { useState, useEffect } from "react";
import MainBadge from "@/components/reusable/Badge";
import { Button } from "../../ui/button";
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
import { Highlighter } from "../../ui/highlighter";
import { AnimatedList } from "../../ui/animated-list";
import { ProgressiveBlur } from "../../ui/progressive-blur";
import "@/index.css";
import { Separator } from "../../ui/separator";
import { ScheduleDemoButton } from "@/components/reusable/Button";
import SymbolLogo from "@/assets/media/logosymbol.png";

// Animation for OurMission Section
// Detecting mobile viewport
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const MissionAnimation = () => {
  const containerSize = isMobile ? 280 : 400; // px
  const center = { x: containerSize / 2, y: containerSize / 2 }; // center in px
  const orbitRadius = isMobile ? 90 : 140; // fixed radius for all orbiting icons
  const speed = 0.01; // rotation speed

  const nodes = [
    { label: "SkypondTechAI", icon: SymbolLogo, isCenter: true }, // central logo
    { label: "Brain", icon: Brain },
    { label: "Share", icon: Share },
    { label: "BrainCircuit", icon: BrainCircuit },
    { label: "Zap", icon: Zap },
  ];

  // For orbiting nodes, evenly space initial angles
  const orbitNodes = nodes.filter((n) => !n.isCenter);
  const initialAngles = nodes.map((_, idx) => {
    if (nodes[idx].isCenter) return 0;
    const orbitCount = orbitNodes.length;
    const orbitIdx = idx - 1; // skip center
    return (orbitIdx * 2 * Math.PI) / orbitCount;
  });

  const [angles, setAngles] = useState(initialAngles);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngles((prev) =>
        prev.map((a, idx) => (nodes[idx].isCenter ? a : a + speed))
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
              className="w-full h-full rounded-full flex items-center justify-center p-2 shadow-xl "
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
      title: "Smart AI Assistance",
      body: "Automates tasks while supporting decision-making",
      icon: Handshake,
      gradient: "bg-gradient-to-r from-[#fcbf1eff] to-[#e1701eff]",
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
    }, 15000); // setting 20secs for refreshing the animation

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex flex-col w-[full] max-w-lg h-[470px] md:h-[450px] overflow-hidden p-2 mx-auto">
      <AnimatedList key={listKey} delay={500}>
        {whyWeBuild.map((i) => {
          const Icons = i.icon;
          return (
            <div className="flex flex-row items-center justify-start bg-card shadow-md border pl-4 py-2 rounded-xl gap-2 cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div
                className={`flex w-8 h-8 rounded-full justify-center items-center bg-gradient-to-r ${i.gradient} `}
              >
                <Icons
                  className=" transition-transform duration-300 text-white"
                  size={14}
                />
              </div>
              <div className="flex flex-col justify-start items-start text-start">
                <h1 className="font-heading text-paragraph text-heading font-bold">
                  {i.title}
                </h1>
                <p className="max-w-sm font-body text-small text-muted line-clamp-1">
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
  ];

  return (
    <section className="relative overflow-hidden ">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
        <div className="flex flex-col  lg:flex-row lg:items-end lg:justify-between ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
            className="items-start"
          >
            <MainBadge heading="Our Goals" />
            <h1 className="text-start font-heading max-w-6xl mx-auto text-h1 text-heading font-bold ">
              Shaping the future of LTC Pharmacy
            </h1>
            <p className="mt-8 mb-4 max-w-4xl font-body text-paragraph text-muted ">
              Smarter automation, measurable outcomes, and a new standard for
              long-term care pharmacy operations
            </p>
            <ScheduleDemoButton title="Schedule a demo"/>
          </motion.div>
        </div>
        <div className="relative space-y-10 mt-8">
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
                    className={`flex items-start gap-3 mb-8 ${
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

                  <div className="max-w-xl">
                    <p className="font-body text-paragraph text-muted text-justify hyphens-auto">
                      {item.body}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-0" : ""}>
                  {item.title === "Our Mission" && <MissionAnimation />}

                  {item.title === "Why We Build" && (
                    <div>
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Blue blob */}
                        <div
                          className="absolute bottom-1/2 right-52 w-80 h-80 bg-accent rounded-full blur-3xl opacity-5"
                          style={{ transform: "translate(50%, 20%)" }}
                        />

                        {/* Purple blob */}
                        <div
                          className="absolute bottom-5 left-32 w-80 h-80 bg-primary rounded-full blur-3xl opacity-10"
                          style={{ transform: "translate(-25%, -5%)" }}
                        />
                      </div>
                      <WhyBuildAnimation />
                    </div>
                  )}
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
          <div className="max-w-7xl mx-auto">
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
                    <span className="text-paragraph text-accent underline hover:text-altbackground/90">
                      Join the movement toward intelligent pharmacy operations
                    </span>
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
