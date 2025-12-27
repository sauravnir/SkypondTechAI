import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import {   FileText,   Bot,   Workflow,   ShoppingCart,  CheckCircle,  ArrowRight} from "lucide-react";

const MainServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const DURATION = 5000; // 5 seconds

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  // Creating an array for loading the services section

  const services = [
    {
      id: "order-entry-automation",
      title: "Order Entry Automation",
      body: "Intelligent order processing platform that eleminates manual data entry and supplier communication delays. Reduce order processing time by 85% while maintaining 99.9% accuracy.",
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
      body: "Comprehensive automation engine that learns your pharmacy's unique processes and optimizes them continuously. Streamline medication verfication, quality checks, and operational workflows.",
      features: [
        "Intelligent task prioritization",
        "Quality assurance automation",
        "Alert management and routing",
        "Continuous optimization learning",
      ],
    },
  ];
  const tabDefault =[ "#947660ff", "#5391f4ff", "#18cd91ff", "#f83660ff"]
  const tabActiveColors = ["#7c6453ff", "#3B82F6", "#10B981", "#E11D48"];

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <Badge
            variant="outline"
            className="font-ui text-[14px] bg-null text-accent border border-accent font-bold gap-2 px-5 py-1 rounded-full uppercase mb-2 "
          >
            Our Solutions
          </Badge>
          <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
            Enterprise-Grade AI Solutions Purpose-Built for LTC Pharmacy
          </h1>
          <p className="mt-3 max-w-3xl font-body text-paragraph text-muted">
            Transform every aspect of your pharmacy operations with our
            intergrated AI platform designed specifically for long-term care
            environments.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex flex-row mt-8 bg-accent p-6 rounded-xl border border-border">
          <Tabs value={services[activeIndex].id} className="w-full">
            <TabsList className="flex gap-4 no-scrollbar bg-transparent">
              {services.map((service, index) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  onClick={() => handleTabClick(index)}
                  className="relative px-2 py-2 bg-card"
                >
                  {activeIndex === index && (
                    <motion.div
                      key={activeIndex} // reset animation when tab changes
                      className="absolute top-0 left-0 h-full rounded"
                      style={{ backgroundColor: tabActiveColors[index], zIndex: 0 }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                    />
                  )}

                  
                  <span className="font-body text-button z-10">
                    {service.title}
                  </span>

                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeIndex].id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <TabsContent value={services[activeIndex].id} forceMount>
                    <Card className="rounded-3xl bg-white/5 backdrop-blur border border-white/10">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold">
                          {services[activeIndex].title}
                        </h3>

                        <p className="mt-3 text-muted-foreground">
                          {services[activeIndex].description}
                        </p>

                        <ul className="mt-6 space-y-3">
                          {services[activeIndex].features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainServices;

