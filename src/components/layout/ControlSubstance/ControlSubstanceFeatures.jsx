import React, { useState, useEffect } from "react";
import MainBadge from "@/components/reusable/Badge";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartSpline,
  ArrowUpDown,
  TriangleAlert,
  File,
  Search,
  LayoutDashboard,
  Activity,
  Barcode,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const featureList = [
  {
    title: "Real-Time Perpetual Inventory",
    description:
      "Live tracking of all Schedule II-V controlled substances with automatic updates from wholesaler deliveries and pharmacy dispensing",
    icon: ChartSpline,
  },
  {
    title: "Dual System Integration",
    description:
      "Seamlessly connects both your wholesaler (McKesson, Cardinal, AmerisourceBergen) and pharmacy management system (FrameworkLTC, QS1) for comprehensive visibility",
    icon: ArrowUpDown,
  },
  {
    title: "Intelligent Discrepancy Management",
    description:
      "Automatically flags variances between physical counts and system records, with guided resolution workflows and supervisor approval",
    icon: TriangleAlert,
  },
  {
    title: "Automated DEA Reporting",
    description:
      "Generate DEA Form 106 (theft/loss), Form 222 (C-II orders), and biennial inventory reports with one click",
    icon: File,
  },
  {
    title: "Complete Audit Trail",
    description:
      "Every transaction logged with timestamp, user ID, and reason codes for full compliance documentation",
    icon: Search,
  },
  {
    title: "Multi-Location Support",
    description:
      "Manage controlled substance inventory across multiple pharmacy locations from a single dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Predictive Alerts",
    description:
      "Low stock warnings, reorder suggestions, and unusual usage pattern detection to prevent diversion",
    icon: Activity,
  },
  {
    title: "Mobile Cycle Counts",
    description:
      "Conduct physical inventory counts on tablets or smartphones with barcode scanning integration",
    icon: Barcode,
  },
];

const stats = [
  {
    value: 75,
    suffix: "% ",
    body: "Reduction in inventory reconciliation time",
  },
  {
    value: 98.8,
    suffix: "%",
    body: "DEA audit preparation accuracy",
  },
  {
    value: 50,
    prefix: "$",
    suffix: "K+",
    body: "Annual savings from elimated labor",
  },
];

const ControlSubstanceFeatures = () => {
  // Controlling the animation timer of the stats
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLimit((prev) => prev + 1);
    }, 50000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="flex flex-col justify-center items-center text-center "
        >
          <MainBadge heading="Features" />
          <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
            Powerful features for Smarter Inventory Management
          </h1>
          <p className="mt-4 max-w-xl font-body text-paragraph text-muted">
            Track, monitor, and control your controlled substances with
            real-time updates, predictive alerts, and automated compliance
            reporting — all from a single intuitive dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {featureList.map((item, id) => {
            return (
              <Card
                key={id}
                className="group relative rounded-2xl borde md:h-[450px] border-accent bg-background/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-altbackground" /> */}
                <CardContent className="relative z-10 p-4 py-6 flex flex-col items-center space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-darkprimary ring-1 ring-white/20 shadow-lg">
                    {React.createElement(item.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>

                  <h3 className="font-heading text-h3 font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="font-body text-paragraph text-muted text-center tracking-normal  ">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center relative overflow-hidden max-w-6xl mx-auto p-8 py-20"
      >
        <div className="relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 "
          >
            <MainBadge heading="Real stats" />

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight max-w-3xl mx-auto">
              Eliminate manual C-II through C-V tracking spreadsheets
            </h2>

            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Replace error-prone spreadsheets with automated, real-time
              controlled substance inventory tracking built for regulatory
              compliance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-muted/20 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number */}
                  <div className="relative z-10 font-heading text-5xl font-extrabold text-heading flex items-baseline gap-1 mb-3">
                    <NumberTicker
                      key={limit}
                      value={item.value}
                      duration={4000}
                      steps={100}
                    />
                    {item.suffix && (
                      <span className="text-2xl font-body text-accent">
                        {item.suffix}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-4" />

                  <p className="relative z-10 font-body font-medium text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ControlSubstanceFeatures;
