import React from "react";

import { motion } from "framer-motion";
import MainBadge from "@/components/reusable/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Inbox, ShieldCheck, Settings, RefreshCcw } from "lucide-react";

const orderAutomationSteps = [
  {
    step: "01",
    title: "Order Intake & Capture",
    description:
      "Orders arrive via email, ERP, EDI, API, or dashboard.",
    icon: Inbox,
  },
  {
    step: "02",
    title: "Validation & Enrichment",
    description: "AI validates SKUs, pricing, quantities, and compliance.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Automated Processing",
    description: "Orders are created, approved, and routed instantly.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Sync & Fulfillment",
    description:
      "Inventory, suppliers, and logistics update in real time.",
    icon: RefreshCcw,
  },
];

export default function HowItWorks() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="flex flex-col justify-center items-center text-center"
        >
          <MainBadge heading="How It Works" />
          <h1 className="font-heading text-h1 max-w-3xl text-heading font-bold">
            From order capture to fulfillment — fully automated, end to end
          </h1>
          <p className="mt-4 max-w-xl font-body text-paragraph text-muted">
            Every order is processed automatically — with speed, accuracy, and
            complete visibility at every stage.
          </p>
        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl"
>
  {orderAutomationSteps.map((item, idx) => {
    return (
      <Card
        key={idx}
        className="group relative rounded-2xl border border-darkaccent bg-background backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl p-8 flex flex-col items-center text-center"
      >
        {/* Step Number */}
        <span className="flex items-center justify-center w-14 h-14 rounded-full font-heading font-bold shadow-md bg-primary text-white text-xl mb-4">
          {item.step}
        </span>

        {/* Title */}
        <h3 className="font-heading text-h3 font-bold mb-4 ">
          {item.title}
        </h3>

        {/* Description */}
        <p className="font-body text-paragraph text-muted text-center">
          {item.description}
        </p>

        {/* Optional Accent Bar */}
       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    );
  })}
</motion.div>

      </div>
    </div>
  );
}
