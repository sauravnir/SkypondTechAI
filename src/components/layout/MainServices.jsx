import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import {
  FileText,
  Bot,
  Workflow,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Cog,
} from "lucide-react";

import { Highlighter } from "../ui/highlighter";

const MainServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const DURATION = 10000; // 5 seconds

  // Creating an array for loading the services section
  const services = [
    {
      id: "order-entry-automation",
      title: "Order Entry Automation",
      body: "Intelligent order processing platform that eliminates manual data entry and supplier communication delays. Reduce order processing time by 85% while maintaining 99.9% accuracy.",
      icon: Cog,
      gradient: "from-amber-400 to-orange-500",
      features: [
        "Intelligent supplier integration",
        "Real-time inventory synchronization",
        "Smart reorder automation",
        "Compliance-ready documentation",
      ],
    },
    {
      id: "document-automation",
      title: "Document Automation",
      body: "Enterprise-grade document processing that transforms unstructured pharmacy data into actionable insights. Digitize, verify, and process hundreds of documents daily with zero errors.",
      icon: FileText,
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Intelligent document classification",
        "Insurance form automation",
        "Compliance report generation",
        "HIPAA-secure processing",
      ],
    },
    {
      id: "ai-pharmacy-copilot",
      title: "AI Pharmacy Copilot",
      body: "Intelligent conversational AI designed specifically for pharmacy operations. Provide instant support to staff and patients 24/7, handling routine inquiries and escalating complex issues automatically.",
      icon: Bot,
      gradient: "from-emerald-400 to-teal-500",
      features: [
        "Multi-language support",
        "HIPAA-compliant conversations",
        "Staff training assistance",
        "24/7 intelligent support",
      ],
    },
    {
      id: "workflow-intelligence",
      title: "Workflow Intelligence",
      body: "Comprehensive automation engine that learns your pharmacy's unique processes and optimizes them continuously. Streamline medication verification, quality checks, and operational workflows.",
      icon: Workflow,
      gradient: "from-purple-400 to-pink-500",
      features: [
        "Intelligent task prioritization",
        "Quality assurance automation",
        "Alert management and routing",
        "Continuous optimization learning",
      ],
    },
  ];

  // Calculating the tab rotation timer
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, DURATION);
  };

  useEffect(() => {
    if (!services || !services.length) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [services]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  const tabDefault = ["#c4611bff", "#5391f4ff", "#18cd91ff", "#f83660ff"];
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <Badge
            variant="outline"
            className="font-ui text-[14px] bg-card text-accent border border-accent font-bold gap-2 px-5 py-1 rounded-full uppercase mb-2 "
          >
            Our Solutions
          </Badge>
          <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
            Enterprise-Grade{" "}
            <Highlighter action="underline" color="#ffaa11">
              AI Solutions
            </Highlighter>
            <br></br>
            Purpose-Built for LTC Pharmacy
          </h1>
          <p className="mt-3 max-w-3xl font-body text-paragraph text-muted">
            Transform every aspect of your pharmacy operations with our
            intergrated AI platform designed specifically for long-term care
            environments
          </p>
        </div>
        {/* Tabs */}
        <div className="flex flex-row mt-8  p-6 rounded-xl ">
          <Tabs value={services[activeIndex].id} className="w-full">
            <TabsList className="flex gap-3 py-8 max-w-5xl mx-auto rounded-2xl bg-muted/10 shdaow-xl ">
              {services.map((service, index) => {
                const IconContainer = service.icon;
                return (
                  <TabsTrigger
                    value={service.id}
                    onClick={() => handleTabClick(index)}
                    className={`  relative rounded-xl py-3 px-6 transition-all duration-300 hover:scale-105 hover:text-heading 
                    ${activeIndex === index ? "border-2 border-accent" : "text-muted"
                    }`}
                  >
                    {/* Progress Bar */}
                    {/* {activeIndex === index && (
                      <motion.div
                        className="absolute inset-x-4  bottom-1 h-[2px] "
                        style={{
                          backgroundColor: tabDefault[index],
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}

                        transition={{
                          duration: DURATION / 1000,
                          ease: "linear",
                        }}
                      />
                    )} */}
                    <div className="flex items-center  justify-center gap-2">
                      <IconContainer
                        className={`z-10 ${
                          activeIndex === index
                            ? "text-accent font-medium"
                            : "text-muted"
                        }`}
                        size={22}
                      />
                      <span
                        className={`
    font-body text-button
  `}
                      >
                        {service.title}
                      </span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Content */}
            <div className="mt-8 relative h-[520px]">
              <div className="relative max-w-5xl mx-auto h-[400px]">
                <AnimatePresence initial={false}>
                  {[activeIndex - 1, activeIndex, activeIndex + 1].map(
                    (index) => {
                      if (!services[index]) return null;

                      const isActive = index === activeIndex;
                      const position =
                        index < activeIndex
                          ? "left"
                          : index > activeIndex
                          ? "right"
                          : "center";

                      return (
                        <motion.div
                          key={services[index].id}
                          className="absolute inset-0 flex justify-center"
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            x:
                              position === "left"
                                ? -120
                                : position === "right"
                                ? 120
                                : 0,
                          }}
                          animate={{
                            opacity: isActive ? 1 : 0.45,
                            scale: isActive ? 1 : 0.94,
                            x:
                              position === "left"
                                ? -160
                                : position === "right"
                                ? 160
                                : 0,
                            zIndex: isActive ? 20 : 10,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                          style={{
                            pointerEvents: isActive ? "auto" : "none",
                          }}
                        >
                          {/* CARD */}
                          <Card
                            className={` w-full max-w-5xl rounded-3xl backdrop-blur-xl shadow-2xl p-4
                            `}
                          >
                            <CardContent className="p-6">
                              <div className=" grid lg:grid-cols-2 gap-12 items-start ">
                                {/* LEFT */}
                                <div className="space-y-6">
                                  <div className="flex items-start gap-4">
                                    <div
                                      className={`p-3 rounded-2xl bg-gradient-to-br ${services[index].gradient} shadow-lg`}
                                    >
                                      {React.createElement(
                                        services[index].icon,
                                        {
                                          className: "w-8 h-8 text-white",
                                        }
                                      )}
                                    </div>

                                    <div>
                                      <h3 className="font-heading text-h3 font-bold text-heading mb-4">
                                        {services[index].title}
                                      </h3>
                                      <div
                                        className={`w-16 h-1 bg-gradient-to-r ${services[index].gradient} rounded-full`}
                                      />
                                    </div>
                                  </div>

                                  <p className="font-body text-paragraph text-muted">
                                    {services[index].body}
                                  </p>

                                  <div className="group pt-4">
                                    <Button
                                      size="lg"
                                      className={`rounded-full bg-gradient-to-r ${services[index].gradient} text-white shadow-lg transition-transform duration-300 hover:scale-105 `}
                                    >
                                      Learn More
                                      <span className="transition-transform duration-300 group-hover:scale-125"><ChevronRight className="ml-2" strokeWidth={2.75}/> </span>
                                      
                                    </Button>
                                  </div>
                                </div>

                                {/* RIGHT */}
                                <div className="space-y-4">
                                  <h4 className="font-heading text-paragraph font-bold text-heading">
                                    Key Features
                                  </h4>

                                  <ul className="space-y-4">
                                    {services[index].features.map(
                                      (feature, i) => (
                                        <motion.li
                                          key={i}
                                          className="flex items-start gap-3"
                                          initial={{ opacity: 0, x: 20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: isActive
                                              ? i * 0.08 + 0.3
                                              : 0,
                                          }}
                                        >
                                          <CheckCircle
                                            className="text-primary mt-1"
                                            size={18}
                                          />
                                          <span className="font-body text-paragraph text-muted">
                                            {feature}
                                          </span>
                                        </motion.li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    }
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
