import MainBadge from "@/components/reusable/Badge";
import { motion } from "motion/react";

const LTCFEATURESLIST = [
    {
      title: "Analytics & Reporting",
      description:
        "Deep operational visibility with real-time insights and predictive intelligence.",
      items: [
        "Real-time dashboards for fill rates, turnaround times, adherence & revenue",
        "AI-powered forecasting for demand, staffing & capacity planning",
        "Industry benchmarking to identify performance gaps",
        "Custom report builder with scheduled email delivery",
      ],
    },
    {
      title: "Secure Messaging",
      description:
        "HIPAA-compliant communication built for pharmacy–facility collaboration.",
      items: [
        "End-to-end encrypted messaging for staff, nurses & prescribers",
        "Smart alerts for missing meds, clarifications & critical updates",
        "Secure document sharing (Rx, MARs, clinical files)",
        "Read receipts and full audit trail for accountability",
      ],
    },
    {
      title: "AI Automation Workflows",
      description:
        "Reduce manual workload with intelligent, proactive automation.",
      items: [
        "Priority-based intelligent order routing",
        "AI-driven refill predictions before requests arrive",
        "Automated prior authorization generation with clinical rationale",
        "Anomaly detection for unusual prescribing patterns",
      ],
    },
    {
      title: "Document Management",
      description:
        "Centralized, searchable, and compliant document handling.",
      items: [
        "Single secure repository for all clinical and facility documents",
        "Smart search by patient, medication, facility or date",
        "Full version history with rollback support",
        "E-signatures and automated filing by type and facility",
      ],
    },
]

export const LTCFeatures = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-6 lg:px-8 items-center py-20 justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="flex flex-col justify-center items-center text-center "
        >
          <MainBadge heading="Features" />
          <h1 className="font-heading text-h1 w-full text-heading font-bold">
            Built for Modern Long-Term Care Pharmacies
          </h1>
          <p className="mt-4 max-w-5xl font-body text-paragraph text-muted">
            A unified platform combining analytics, automation, secure
            communication, and document intelligence — designed to scale with
            your operations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
            initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-10 border mt-16 rounded-2xl shadow-lg "
        >
            
            </motion.div>    


      </div>
    </div>
  );
};
