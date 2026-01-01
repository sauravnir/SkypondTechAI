import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Highlighter } from "../ui/highlighter";
import { Card, CardContent } from "../ui/card";
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
import { Button } from "../ui/button";
import { AnimatedCircularProgressBar } from "../ui/animated-circular-progress-bar";

export default function StepSection() {
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
    }, 3000); // delay between step fills

    return () => clearTimeout(timer);
  }, [activeStep, inView]);

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 ">
        {/* Bg color */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="text-center mb-12 ">
        <Badge
          variant="outline"
          className="font-ui text-[14px] bg-card text-accent border border-accent font-bold gap-2 px-5 py-1 rounded-full uppercase mb-8"
        >
          Quick integration
        </Badge>
        <h1 className="font-heading text-h1 max-w-3xl mx-auto font-bold">
          From Integration to Transformation in  {""}
        <span className="text-primary"> 4 Simple Steps</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto font-body text-paragraph text-muted">
          Simple, secure, and seamless deployment with industry-leading
          enterprise support
        </p>
      </div>

      {/* 4 integration steps */}
      <div
        ref={ref}
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
                className={`relative rounded-2xl border bg-background backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl animate-float mt-12 ${
                  isActive
                    ? `bg-card shadow-xl`
                    : `bg-transparent`
                }`}
              >
                <CardContent className="p-8 relative">
                  {/* Step number */}
                  <span
                    className={`absolute -top-9 right-2 flex items-center text-h3 justify-center w-12 h-12 rounded-full font-heading font-bold shadow-xl transition-all ${
                      isActive
                        ? `text-white bg-altbackground`
                        : `bg-white text-heading`
                    }`}
                  >
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all ${
                      isActive
                        ? `text-white bg-accent`
                        : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isActive ? "text-white" : item.iconBg
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-h3 font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className={`font-body text-paragraph  ${isActive ? `text-heading`:`text-muted`}` }>
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="mt-12 flex justify-center">
        {completed === true ? (
          <div className="group">
            <Button
              variant="default"
              size="sm"
              className="font-body text-[15px] rounded-full"
            >
              Integration Complete. Start automating today!
              <ChevronRight
                className="transition-transform duration-300 group-hover:scale-125"
                strokeWidth={2.75}
              />
            </Button>
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
    </section>
  );
}
