import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";

import {
  MedicationErrorSVG,
  AutoEntrySVG,
  LaborCostSVG,
  ComplianceSVG,
  ScaleSVG,
  InsightsSVG,
  AutomationSVG,
  SupportSVG,
} from "@/components/reusable/svgAnimations";

const reasons = [
  {
    id: 0,
    title: "Reduce medication errors by 99%",
    description:
      "AI-powered verification ensures prescriptions are accurate before dispensing.",
    visual: MedicationErrorSVG,
    link:"/",
  },
  {
    id: 1,
    title: "Save 75% on manual data entry",
    description: "Automated intake eliminates repetitive administrative work.",
    visual: AutoEntrySVG,
    link:"/",
  },
  {
    id: 2,
    title: "Lower labor costs, happier staff",
    description: "Free your team from low-value tasks and reduce burnout.",
    visual: LaborCostSVG,
    link:"/",
    
  },
  {
    id: 3,
    title: "Automatic HIPAA compliance",
    description: "Built-in safeguards ensure continuous regulatory adherence.",
    visual: ComplianceSVG,
    link:"/",
  },
  {
    id: 4,
    title: "Scale without staffing increases",
    description: "Handle growth without adding operational overhead.",
    visual: ScaleSVG,
    link:"/",
  },
  {
    id: 5,
    title: "Real-time operational insights",
    description:
      "Live dashboards provide instant visibility into pharmacy performance.",
    visual: InsightsSVG,
    link:"/",
  },
  {
    id: 6,
    title: "24/7 automated processing",
    description: "Always-on workflows with zero downtime.",
    visual: AutomationSVG,
    link:"/",
  },
  {
    id: 7,
    title: "Enterprise support & optimization",
    description:
      "Continuous monitoring and expert support keep systems optimized.",
    visual: SupportSVG,
    link:"/",
  },
];

function useScrollActive(count) {
  const refs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { refs, active };
}

export default function WhyChooseUs() {
  const { refs, active } = useScrollActive(reasons.length);
  const ActiveVisual = reasons[active].visual;
  return (
    <section className="relative bg-background">
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-start items-start text-start">
          <Badge
            variant="outline"
            className="font-ui text-[14px] bg-null font-bold text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-8 "
          >
            Why Choose Us
          </Badge>
          <h1 className="font-heading text-h1 max-w-3xl text-heading font-bold">
            Why leading LTC Pharmacies <span className="text-primary">choose Skypond</span> 
          </h1>
          <p className="mt-4 max-w-xl font-body text-paragraph text-muted">
            Because long-term care pharmacies need more than software -{" "}
            <span className="text-primary font-bold">they need certainty.</span>
          </p>
        </div>
        <div className="flex flex-row justify-between mt-24 gap-x-20">
          <div className="lg:sticky lg:top-32 space-y-24">
            {reasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  ref={(el) => (refs.current[i] = el)}
                  data-index={i}
                  className={`relative pl-8 p-6 transition-all duration-500 ease-out ${
                    active === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 translate-x-2"
                  }`}
                >
                  {/* Active Indicator */}
                  <Separator
                    orientation="vertical"
                    className={`absolute left-0 top-1 w-1 h-full rounded-full bg-accent transition-opacity ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {/* <div className="w-8 h-8 b rounded-full ">
                  <Icon className="w-6 h-6 text-primary-foreground mb-4 " />
                  </div> */}
                  <h3 className="font-heading text-h3 font-bold hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body text-paragraph mt-3 text-muted max-w-md leading-relaxed">
                    {item.description}
                  </p>
                  <Link to={item.link} target="_blank"> 
                  
                  <Button variant="default" size="sm" className="text-[15px] group rounded-full mt-4">Learn More <ChevronRight strokeWidth={2.75} className="group-hover:scale-125"/></Button>
                  </Link>
                 
                </div>
              );
            })}
          </div>

          {/* Right side  */}
          <div className="relative">
            <div className="lg:sticky top-32 h-[520px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="relative w-full h-[480px] rounded-3xl bg-gradient-to-br from-white to-slate-50 border shadow-sm flex items-center justify-center">
                    <ActiveVisual active />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
