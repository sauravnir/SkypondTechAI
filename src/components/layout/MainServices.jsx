import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "../ui/magic-card";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import {
  FileText,
  Bot,
  Workflow,
  CheckCircle,
  ChevronRight,
  CircleChevronRight,
  Undo2,
  FlipHorizontal,
  Sparkles,
  Cog,
  Undo,
} from "lucide-react";

import "@/index.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { Separator } from "@radix-ui/react-separator";
import { animate } from "animejs";

// Checking if the viewport is mobile or not
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const services = [
  {
    id: "order-entry-automation",
    title: "Order Entry Automation",
    body: "Intelligent order processing platform that eliminates manual data entry and supplier communication delays. Reduce order processing time by 85% while maintaining 99.9% accuracy.",
    icon: Cog,
    gradient: "from-[#6366F1] to-[#4e50bd]", // Primary to Dark Primary
    features: [
      "Intelligent supplier integration",
      "Real-time inventory synchronization",
      "Smart reorder automation",
      "Compliance-ready documentation",
    ],
    link: "/404Error",
  },
  {
    id: "document-automation",
    title: "Document Automation",
    body: "Enterprise-grade document processing that transforms unstructured pharmacy data into actionable insights. Digitize, verify, and process hundreds of documents daily with zero errors.",
    icon: FileText,
    gradient: "from-[#06B6D4] to-[#047d92]", // Accent to Dark Accent
    features: [
      "Intelligent document classification",
      "Insurance form automation",
      "Compliance report generation",
      "HIPAA-secure processing",
    ],
    link: "/404Error",
  },
  {
    id: "ai-pharmacy-copilot",
    title: "AI Pharmacy Copilot",
    body: "Intelligent conversational AI designed specifically for pharmacy operations. Provide instant support to staff and patients 24/7, handling routine inquiries and escalating complex issues automatically.",
    icon: Bot,
    gradient: "from-[#4e50bd] to-[#06B6D4]", // Dark Primary to Accent
    features: [
      "Multi-language support",
      "HIPAA-compliant conversations",
      "Staff training assistance",
      "24/7 intelligent support",
    ],
    link: "/404Error",
  },
  {
    id: "workflow-intelligence",
    title: "Workflow Intelligence",
    body: "Comprehensive automation engine that learns your pharmacy's unique processes and optimizes them continuously. Streamline medication verification, quality checks, and operational workflows.",
    icon: Workflow,
    gradient: "from-purple-600 to-[#6366F1]", // Purple to Primary
    features: [
      "Intelligent task prioritization",
      "Quality assurance automation",
      "Alert management and routing",
      "Continuous optimization learning",
    ],
    link: "/404Error",
  },
];

const MainServices = ({ id }) => {
  const [flipped, isFlipped] = useState(false);

  const handlingFlip = (index) => {
    isFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  // const [activeIndex, setActiveIndex] = useState(0);
  // const timerRef = useRef(null);
  // const DURATION = 10000; // 5 seconds

  // Creating an array for loading the services section

  // Calculating the tab rotation timer
  // const startTimer = () => {
  //   if (timerRef.current) clearInterval(timerRef.current);
  //   timerRef.current = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % services.length);
  //   }, DURATION);
  // };

  // useEffect(() => {
  //   if (!services || !services.length) return;
  //   startTimer();
  //   return () => clearInterval(timerRef.current);
  // }, [services]);

  // const handleTabClick = (index) => {
  //   setActiveIndex(index);
  //   startTimer();
  // };

  return (
    <div id={id} className="relative overflow-hidden bg-background">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <Badge
              variant="outline"
              className="font-ui text-[14px] bg-null  text-accent border border-accent font-bold gap-2 px-5 py-1 rounded-full uppercase mb-8 "
            >
              Our Solutions
            </Badge>
            <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
              Enterprise Grade AI Solutions
              <br></br>
              Purpose - Built for LTC Pharmacy
            </h1>
            <p className="mt-4 max-w-3xl font-body text-paragraph text-muted">
              Transform every aspect of your pharmacy operations with our
              intergrated AI platform designed specifically for long-term care
              environments
            </p>
          </div>
        </motion.div>

        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative h-[420px] w-full"
                style={{ perspective: 1000 }}
                whileHover="flipped"
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  variants={{
                    flipped: { rotateY: 180 },
                  }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] z-10">
                    <Card
                      className={`relative group h-full rounded-2xl transition-scale duration-300 bg-card/50 backdrop-blur-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:bg-card p-2`}
                    >
                      <div
                        className={`absolute bottom-0 left-0 w-full h-2 bg-darkprimary`}
                      />
                      <CardContent className="relative z-10 p-8 space-y-6">
                        <div
                          className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} ring-1 ring-white/20 shadow-lg `}
                        >
                          {React.createElement(service.icon, {
                            className: "w-8 h-8 text-white",
                          })}
                        </div>
                        <h3 className="font-heading text-h3 font-bold text-heading tracking-tight mt-12 transition-color duration-300 group-hover:text-primary">
                          {service.title}
                        </h3>
                        <p className="text-muted text-paragraph leading-relaxed line-clamp-4">
                          {service.body}
                        </p>

                          {/* Rendering Button in Mobile mode */}
                        {isMobile ? (
                          <Link to={service.link}>
                            <Button
                              variant="default"
                              size="sm"
                              className="group font-body text-[15px] text-primary-foreground font-bold rounded-full mt-12"
                            >
                              Explore Service
                              <ChevronRight
                                className="transition-transform duration-300 group-hover:scale-125"
                                strokeWidth={2.75}
                              />
                            </Button>
                          </Link>
                        ) : (
                          <div className="flex justify-end">
                            <Button
                              variant="ghost"
                              className="w-16 h-16 rounded-full flex items-center justify-center group-hover:text-altbackground"
                            >
                              <Undo2
                                className="w-12 h-12 text-primary transition-transform duration-300 scale-150"
                                strokeWidth={2.75}
                              />
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] z-0">
                    <Card
                      className={`relative h-full rounded-2xl bg-card backdrop-blur-3xl overflow-hidden cursor-pointer p-2 shadow-2xl`}
                    >
                      <div
                        className={`absolute bottom-0 left-0 w-full h-2 bg-darkprimary`}
                      />
                      <CardContent className="relative z-10 p-8 ">
                        <h1 className="font-heading text-h3 text-heading font-bold">
                          Key Features
                        </h1>

                        <Separator
                          orientation="horizontal"
                          className="h-2 bg-darkprimary w-20 mt-4"
                        />
                        <ul className="flex flex-col gap-2 md:gap-4 mt-4 md:mt-8">
                          {service.features?.map((item, id) => (
                            <li key={id}>
                              <span className="flex flex-row items-center gap-2 font-body text-paragraph text-muted transition-color duration-300 hover:text-primary/90 ">
                                <CheckCircle
                                  strokeWidth={2.75}
                                  size={15}
                                  className="text-darkaccent"
                                />
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex justify-start">
                          <Link to={service.link}>
                            <Button
                              variant="default"
                              size="sm"
                              className="group font-body text-[15px] text-primary-foreground  font-bold rounded-full mt-12"
                            >
                              Explore Service
                              <ChevronRight
                                className="transition-transform duration-300 group-hover:scale-125"
                                strokeWidth={2.75}
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MainServices;

// Primary design

//  <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeIn" }}
//         >
//           <div className="flex flex-row mt-8  p-6 rounded-xl ">
//             <Tabs value={services[activeIndex].id} className="w-full">
//               <div className="mt-8 relative h-[700px] md:h-[400px]">
//                 <div className="relative  md:max-w-5xl mx-auto h-[770px] md:h-[400px]">
//                   <AnimatePresence initial={false}>
//                     {[activeIndex - 1, activeIndex, activeIndex + 1].map(
//                       (index) => {
//                         if (!services[index]) return null;

//                         const isActive = index === activeIndex;
//                         const position =
//                           index < activeIndex
//                             ? "left"
//                             : index > activeIndex
//                             ? "right"
//                             : "center";

//                         return (
//                           <motion.div
//                             key={services[index].id}
//                             className="absolute inset-0 flex justify-center"
//                             initial={{
//                               opacity: 0,
//                               scale: 0.9,
//                               x:
//                                 position === "left"
//                                   ? -120
//                                   : position === "right"
//                                   ? 120
//                                   : 0,
//                             }}
//                             animate={{
//                               opacity: isActive ? 1 : 0.02,
//                               scale: isActive ? 1 : 0.94,
//                               x:
//                                 position === "left"
//                                   ? -160
//                                   : position === "right"
//                                   ? 160
//                                   : 0,
//                               zIndex: isActive ? 20 : 10,
//                             }}
//                             exit={{
//                               opacity: 0,
//                               scale: 0.9,
//                             }}
//                             transition={{
//                               duration: 0.6,
//                               ease: "easeOut",
//                             }}
//                             style={{
//                               pointerEvents: isActive ? "auto" : "none",
//                             }}
//                           >
//                             {/* CARD */}
//                             <Card
//                               className={` relative
//     w-full md:max-w-5xl
//     rounded-2xl
//     border border-white/10
//     bg-white/5
//     backdrop-blur-xl
//     overflow-hidden
//                             `}
//                             >
//                                <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 bg-primary/20 blur-[120px]" />
//   <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 bg-accent/20 blur-[120px]" />
//                               <CardContent className="p-6">
//                                 <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
//                                   {/* LEFT */}
//                                   <div className="space-y-6">
//                                     <div className="flex items-start gap-4">
//                                       <div
//                                         className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg mb-4`}
//                                       >
//                                         {React.createElement(
//                                           services[index].icon,
//                                           {
//                                             className: "w-8 h-8 text-white",
//                                           }
//                                         )}
//                                       </div>

//                                       <div className="flex flex-col gap-2">
//                                         <h3 className="font-heading text-h3 font-bold text-heading ">
//                                           {services[index].title}
//                                         </h3>
//                                         <div
//                                           className={`w-16 h-1 bg-accent rounded-full`}
//                                         />
//                                       </div>
//                                     </div>

//                                     <p className="font-body text-paragraph text-muted hyphens-auto">
//                                       {services[index].body}
//                                     </p>

//                                     <div className="group hidden sm:block">
//                                       <Button
//                                         variant="default"
//                                         size="md"
//                                         className={`text-[15px] rounded-full text-primary-foreground hover:text-altbackground/90 hover:text-primary-foreground`}
//                                       >
//                                         Explore Service
//                                         <span>
//                                           <ChevronRight
//                                             className="group-hover:scale-125"
//                                             strokeWidth={2.75}
//                                           />{" "}
//                                         </span>
//                                       </Button>
//                                     </div>
//                                   </div>

//                                   {/* RIGHT */}
//                                   <div className="flex flex-col justify-start items-start md:space-y-8">
//                                     <h4 className="font-heading text-h3 font-bold text-heading">
//                                       Key Features
//                                     </h4>

//                                     <ul className="mt-4 space-y-2 md:space-y-4">
//                                       {services[index].features.map(
//                                         (feature, i) => (
//                                           <motion.li
//                                             key={i}
//                                             className="flex items-start gap-3"
//                                             initial={{ opacity: 0, x: 20 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{
//                                               delay: isActive
//                                                 ? i * 0.08 + 0.3
//                                                 : 0,
//                                             }}
//                                           >
//                                             <div className="flex items-center gap-2">
//                                               <CheckCircle
//                                                 className="text-accent"
//                                                 size={18}
//                                               />
//                                               <span className="font-body text-paragraph font-medium text-muted">
//                                                 {feature}
//                                               </span>
//                                             </div>
//                                           </motion.li>
//                                         )
//                                       )}
//                                     </ul>
//                                     {/* Displaying button for mobile only */}
//                                     <div className="group block sm:hidden mt-6">
//                                       <Button
//                                         variant="default"
//                                         size="sm"
//                                         className={`text-[15px] rounded-full text-primary-foreground hover:text-altbackground/90 hover:text-primary-foreground`}
//                                       >
//                                         Learn More
//                                         <span>
//                                           <ChevronRight
//                                             className="group-hover:scale-125"
//                                             strokeWidth={2.75}
//                                           />
//                                         </span>
//                                       </Button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </motion.div>
//                         );
//                       }
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//               <TabsList
//                 className="flex gap-0 py-8 w-full overflow-x-auto md:overflow-visible mt-20
//     md:justify-center max-w-full  md:max-w-5xl mx-auto rounded-2xl bg-background scrollabar-hidden"
//               >
//                 {services.map((service, index) => {
//                   const IconContainer = service.icon;
//                   return (
//                     <TabsTrigger
//                       value={service.id}
//                       onClick={() => handleTabClick(index)}
//                       className={`flex flex-row focus-visible:outline-none
//     focus-visible:ring-0
//     focus-visible:ring-offset-0
//     data-[state=active]:shadow-none relative p-24
//                     `}
//                     >
//                       <div className="flex flex-row items-center justify-center gap-2">
//                         <span className="group">
//                           <IconContainer
//                           className={`z-10 w-14 h-14 ${
//                             activeIndex === index
//                               ? "text-accent font-medium"
//                               : "text-muted"
//                           }`}

//                         />
//                         <span
//                           className={`
//                           flex items-center gap-1 max-w-0 overflow-hidden whitespace-nowrap text-[#075E54] text-[15px] font-bold transition-all duration-500 group-hover:max-w-xs
//                         `}
//                         >
//                           {service.title}
//                         </span>
//                         </span>

//                       </div>
//                     </TabsTrigger>
//                   );
//                 })}
//               </TabsList>

//               {/* Content */}
//             </Tabs>
//           </div>
//         </motion.div>
