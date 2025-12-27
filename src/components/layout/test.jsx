import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  Bot, 
  Workflow, 
  ShoppingCart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const MainServices1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const DURATION = 1000000; // 5 seconds

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

  const services = [
    {
      id: "order-entry-automation",
      title: "Order Entry Automation",
      body: "Intelligent order processing platform that eliminates manual data entry and supplier communication delays. Reduce order processing time by 85% while maintaining 99.9% accuracy.",
      icon: ShoppingCart,
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

  const tabActiveColors = ["#F59E0B", "#3B82F6", "#10B981", "#8B5CF6"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 opacity-30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
      
      <div className="relative flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <motion.div 
          className="flex flex-col justify-center items-center text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="outline"
            className="font-ui text-sm bg-white/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-semibold gap-2 px-6 py-2 rounded-full uppercase shadow-lg backdrop-blur-sm"
          >
            ✨ Our Solutions
          </Badge>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl max-w-5xl text-slate-900 dark:text-slate-100 font-bold leading-tight">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            Purpose-Built for LTC Pharmacy
          </h1>
          
          <p className="mt-4 max-w-3xl font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Transform every aspect of your pharmacy operations with our
            integrated AI platform designed specifically for long-term care
            environments.
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={services[activeIndex].id} className="w-full">
            {/* Enhanced Tab List */}
            <div className="relative">
              {/* <div className="absolute inset-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/50" /> */}
              <TabsList className="relative flex flex-wrap justify-center gap-2 sm:gap-4 p-6 bg-transparent">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      onClick={() => handleTabClick(index)}
                      className={`
                        relative px-4 py-3 sm:px-6 sm:py-4 rounded-xl transition-all duration-300
                        ${activeIndex === index 
                          ? 'bg-white dark:bg-slate-700 shadow-xl scale-105 text-slate-900 dark:text-slate-100' 
                          : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white/70 dark:hover:bg-slate-700/70 text-slate-600 dark:text-slate-400'
                        }
                        backdrop-blur-sm border border-white/30 dark:border-slate-600/30
                      `}
                    >
                      {/* Progress bar for active tab */}
                      {activeIndex === index && (
                        <motion.div
                          key={activeIndex}
                          className="absolute bottom-0 left-0 h-1 rounded-full"
                          style={{ backgroundColor: tabActiveColors[index] }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: DURATION / 1000, ease: "linear" }}
                        />
                      )}
                      
                      <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                          {service.title}
                        </span>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Enhanced Content */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeIndex].id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <TabsContent value={services[activeIndex].id} forceMount>
                    <Card className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/30 dark:border-slate-700/50 shadow-2xl">
                      {/* Card background decoration */}
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${services[activeIndex].gradient} opacity-10 rounded-full blur-3xl transform translate-x-32 -translate-y-32`} />
                      
                      <CardContent className="relative p-8 sm:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                          {/* Left content */}
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-2xl bg-gradient-to-br ${services[activeIndex].gradient} shadow-lg`}>
                                {React.createElement(services[activeIndex].icon, {
                                  className: "w-8 h-8 text-white"
                                })}
                              </div>
                              <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                  {services[activeIndex].title}
                                </h3>
                                <div className={`w-16 h-1 bg-gradient-to-r ${services[activeIndex].gradient} rounded-full`} />
                              </div>
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                              {services[activeIndex].body}
                            </p>

                            <motion.button
                              className={`
                                inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                                bg-gradient-to-r ${services[activeIndex].gradient} text-white
                                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
                              `}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>

                          {/* Right content - Features */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-4">
                              {services[activeIndex].features.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 + 0.3 }}
                                >
                                  <CheckCircle className={`w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0`} />
                                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default MainServices1;
