import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Loader2,
  Circle,
  CircleCheck,
  ClockCheck,
  
} from "lucide-react";
import MainBadge from "@/components/reusable/Badge";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const steps = [
  {
    title: "SKU Verified",
    subtext:
      "Product codes, quantities, and pricing are validated automatically.",
  },
  {
    title: "Inventory Available",
    subtext: "Live inventory is checked across all connected systems.",
  },
  {
    title: "Pricing Validated",
    subtext:
      "Contract pricing and discounts are applied without manual review.",
  },
  {
    title: "Supplier Confirmed",
    subtext: "Orders are routed to suppliers and confirmed in real time.",
  },
];

export const advList = [
  {
    icon: CircleCheck,
    color: "text-emerald-300",
    title: "No credit card",
  },
  {
    icon: ClockCheck,
    color: "text-blue-300",
    title: "Free access for 14 days",
  },
  // {
  //   icon: Shield,
  //   color: "text-violet-300",
  //   title: "Enterprise-grade security & compliance included",
  // },
];

export default function OrderAutomationHero() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <InteractiveGridPattern
          className={cn(
            " [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-y-[-40%] h-[200%] skew-y-0 opacity-15"
          )}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10, filter: ["blur(10px)"] }}
        animate={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
        transition={{ duration: 0.6, ease: "anticipate" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="p-2 flex flex-col items-center md:items-start text-center md:text-start gap-6">
            {/* Badge */}
            <div>
              <MainBadge heading="Order Automation" />
            </div>

            {/* Text */}
            <div className="max-w-6xl flex flex-col gap-6">
              <h1 className="font-heading text-h1 font-bold text-heading">
                Eliminate Manual Order Entry. Accelerate Every Order.
              </h1>

              <p className="font-body text-paragraph text-muted">
                Capture, validate, and process orders automatically—with speed,
                accuracy, and zero manual effort.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <PrimaryButton title="Get Started for FREE" size="lg" />
              <RequestDemo title="Request a Demo" size="lg" />
            </div>
            <div className="flex flex-row items-center justify-start gap-2 -mt-2">
              {advList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex text-start items-center gap-2">
                    <span>
                      <Icon className={`w-4  ${item.color}`} />
                    </span>
                    <h1 className="font-ui text-muted text-small ">
                      {item.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:ml-20">
            <Card className="w-[350px] md:w-[500px] h-[500px]  bg-card shadow-2xl shadow-primary/40 ">
              <CardHeader className="flex flex-row items-center justify-between px-6">
                <h1 className="font-heading text-paragraph text-heading font-bold">
                  #ORD-41241
                </h1>
                <span className="flex flex-row gap-1 ">
                  <Circle className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(239,68,68,0.6)]" />
                  <Circle className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_4px_rgba(239,68,68,0.6)]" />
                  <Circle className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_4px_rgba(239,68,68,0.6)]" />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const completed = index < currentStep;
                    const active = index === currentStep;

                    return (
                      <div
                        key={step}
                        className="h-[80px] flex items-center gap-2 font-body text-small p-4 shadow-lg border mx-6 mt-4 rounded-2xl bg-card/5 transition-all duration-300 hover:bg-muted/10"
                      >
                        {completed ? (
                          <CircleCheck className="text-emerald-300" size={20} />
                        ) : active ? (
                          <Loader2
                            className="animate-spin text-yellow-400/80"
                            size={20}
                          />
                        ) : (
                          <div className="w-[18px] h-[18px] rounded-full border border-white/20" />
                        )}
                        <span
                          className={`ml-1  ${
                            completed
                              ? "font-heading text-paragraph font-medium text-heading"
                              : "font-heading text-paragraph font-medium text-muted"
                          }`}
                        >
                          {step.title}
                          {completed ? (
                            <p className="font-body text-small text-muted leading-tight">
                              {step.subtext}
                            </p>
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardDescription>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
