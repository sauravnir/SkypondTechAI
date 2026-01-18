import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainBadge from "@/components/reusable/Badge";
import { Highlighter } from "../../ui/highlighter";
import { Card, CardContent } from "../../ui/card";
import {
  Plug,
  BrainCircuit,
  StepForward,
  Sparkles,
  ChevronRight,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../../ui/button";
import { AnimatedCircularProgressBar } from "../../ui/animated-circular-progress-bar";
import { ScheduleDemoButton } from "@/components/reusable/Button";
export default function StepSection({id}) {
  const steps = [
    {
      step: "01",
      title: "Connect",
      body: "Integrate with your pharmacy system in minutes",
      icon: Plug,
      bg: "bg-card", // soft white card
      iconBg: "bg-accent/10 text-accent", // soft icon highlight
    },
    {
      step: "02",
      title: "Analyze",
      body: "AI learns your workflows and patterns",
      icon: BrainCircuit,
      bg: "bg-card",
      iconBg: "bg-accent/10 text-accent",
    },
    {
      step: "03",
      title: "Automate",
      body: "Intelligent automation takes over routine tasks",
      icon: StepForward,
      bg: "bg-card",
      iconBg: "bg-accent/10 text-accent",
    },
    {
      step: "04",
      title: "Optimize",
      body: "Continuous improvement and learning",
      icon: Sparkles,
      bg: "bg-card",
      iconBg: "bg-accent/10 text-accent",
    },
  ];

  const totalSteps = steps.length;
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const progress = (activeStep / totalSteps) * 100;
  // Detect when section is in viewport
  const [ref, inView] = useInView({ triggerOnce: true, delay: 2000 });

  // Auto-advance steps once in view
  useEffect(() => {
    if (!inView) return;

    if (activeStep >= totalSteps) {
      setCompleted(true);
      return;
    }

    const timer = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 1000); // delay between step fills

    return () => clearTimeout(timer);
  }, [activeStep, inView]);

  return (
    <section id={id} className="relative overflow-hidden px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
      {/* Bg color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Blue blob */}
  {/* <div
    className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
    style={{ transform: "translate(50%, 20%)" }}
  /> */}

  {/* Purple blob */}
  {/* <div
    className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50"
    style={{ transform: "translate(-25%, -5%)" }}
  /> */}
</div>
    
      <motion.div
      initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
      className="text-center mb-12 ">
        <MainBadge heading="Quick Integration" />
        <h1 className="font-heading text-h1 max-w-3xl mx-auto font-bold">
          From Integration to Transformation in {""}
           4 Simple Steps
        </h1>
        <p className="mt-4 max-w-3xl mx-auto font-body text-paragraph text-muted">
          Simple, secure, and seamless deployment with industry-leading
          enterprise support
        </p>
      </motion.div>

      {/* 4 integration steps */}
      <motion.div
        ref={ref}
        initial={{opacity:0}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-5xl mx-auto "
      >
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isActive = index < activeStep;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <Card
                className={`group relative rounded-2xl border border-lg bg-background border-darkaccent backdrop-blur-xl shadow-lg cursor-pointer transition-all duration-300 animate-float mt-12 ${
                  isActive ? `bg-muted/5 hover:shadow-2xl` : `bg-transparent`
                }`}
              >
                <CardContent className="p-8 relative">
                   
                  
                  {/* Step number */}
                  <span
                    className={`absolute -top-5 right-2 flex items-center border border-lg border-darkprimary text-h3 justify-center w-14 h-14 rounded-full font-heading font-bold shadow-xl transition-all ${
                      isActive
                        ? `text-white bg-darkprimary`
                        : `bg-white text-heading`
                    }`}
                  >
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      isActive ? `text-white bg-accent` : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isActive ? "text-white" : item.iconBg
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`font-heading text-h3 font-bold mb-3 group-hover:text-primary ${!isActive && "text-muted"}`}>
                    {item.title}
                  </h3>
                  <p
                    className={`font-body text-paragraph  ${
                      isActive ? `text-muted` : `text-muted/50`
                    }`}
                  >
                    {item.body}
                  </p>
                 
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Continue Button */}
      <motion.div 
        initial={{opacity:0}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeIn" }}
      >
        <div className="mt-12 flex justify-center">
        {completed === true ? (
          <div className="group">
            <ScheduleDemoButton title="Integration Complete. Start automating today!"/>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <AnimatedCircularProgressBar
              value={progress} // 0-100
              gaugePrimaryColor="#09766dff"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="w-8 h-8 text-sm"
            />
            <span className="font-body text-small text-muted">
              Integrating system...
            </span>
          </div>
        )}
      </div>
      </motion.div>
      
    </section>
  );
}
