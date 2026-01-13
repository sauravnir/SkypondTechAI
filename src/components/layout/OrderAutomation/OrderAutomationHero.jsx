import react from "react";
import { cn } from "@/lib/utils";

import MainBadge from "@/components/reusable/Badge";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";

export default function OrderAutomationHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            " inset-y-[-50%] h-[200%] skew-y-14 opacity-20"
          )}
        />
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: -10, filter: ["blur(10px)"] }}
        animate={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="p-2 flex flex-col items-center md:items-start">
    
    
    <div className="mb-4">
      <MainBadge heading="Order Automation" />
    </div>

    
    <div className="max-w-3xl text-center md:text-left">
      <h1 className="font-heading text-h1 font-bold text-heading">
        Eliminate Manual Order Entry. Accelerate Every Order.
      </h1>

      <p className="font-body text-paragraph text-muted mt-8 mb-4">
        Transform fragmented order workflows into a fully automated,
        intelligent pipeline. Our Order Entry Automation platform captures,
        validates, and processes orders in real time—reducing delays,
        eliminating human error, and keeping your supply chain moving at full speed.
      </p>
    </div>

    
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <PrimaryButton title="Automate Order Processing" size="md" />
      <RequestDemo title="Request a Demo" size="md"/>
    </div>

  </div>
</div>

      </motion.div>
    </section>
  );
}
