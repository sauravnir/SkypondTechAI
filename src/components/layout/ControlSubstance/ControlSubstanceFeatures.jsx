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
import { Separator } from "@radix-ui/react-separator";

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

// Comparison section
const ComparisonSection = () => {
  const disadvantages = [
    {
      title: "Human Error Risk",
      description:
        "Data entry mistakes and calculation errors lead to 15-20% error rate in inventory records",
    },
    {
      title: "Time-Consuming",
      description:
        "2-4 hours daily for manual reconciliation, with biennial inventory taking an entire week",
    },
    {
      title: "No Real-Time Visibility",
      description:
        "Can't see current inventory status, causing delays in identifying theft or diversion",
    },
    {
      title: "Compliance Risks",
      description:
        "High risk of DEA violations with potential $10K+ fines from incomplete audit trails",
    },
  ];

  const advantages = [
    {
      title: "99.9% Accuracy",
      description:
        "Eliminates manual data entry errors with automatic calculations and real-time validation",
    },
    {
      title: "Massive Time Savings",
      description:
        "Reconciliation takes 10 minutes vs 3 hours, with 75%+ reduction in administrative work",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Live inventory counts 24/7 with instant discrepancy detection and alerts",
    },
    {
      title: "Audit-Ready Instantly",
      description:
        "One-click report generation with all DEA-required documentation organized and compliant",
    },
  ];

  return (
    <section className="py-12 mt-14 bg-background/20 border rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8">
          

          {/* Advantages Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border shadow-2xl "
          >

            
            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="px-4 py-2">
                <span className="text-green-700 dark:text-green-300 font-bold text-h3">
                  Automated Tracking
                </span>
              </div>
            </div>

            {/* Advantages List */}
            <div className="space-y-6">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-background dark:bg-gray-800 border rounded-xl p-6  "
                >
                 

                  <div className="flex gap-4 ml-4">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-start text-paragraph px-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Disadvantages Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative  p-8 "
          >
            
            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-8 opacity-70">
              <div className="px-4 py-2 ">
                <span className="text-red-700 dark:text-red-300 font-bold text-h3">
                  Manual Spreadsheets
                </span>
              </div>
            </div>

            {/* Disadvantages List */}
            <div className="space-y-6">
              {disadvantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-xl p-6 "
                >
                  <div className="flex gap-4 ml-4">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold opacity-70 text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.title}
                      </h3>
                      <p className="text-gray-600  opacity-70 dark:text-gray-400 leading-relaxed text-start text-paragraph px-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

const ControlSubstanceFeatures = () => {
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
          <h1 className="font-heading text-h1 w-full text-heading font-bold">
            Powerful features for Smarter Inventory Management
          </h1>
          <p className="mt-4 max-w-5xl font-body text-paragraph text-muted">
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
                className="group relative rounded-2xl border-accent bg-background/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-altbackground" /> */}
                <CardContent className="relative z-10 p-4 py-4 flex flex-col items-center space-y-6">
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
        className="flex flex-col items-center text-center relative overflow-hidden bg-white p-8 py-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 "
          >
            <MainBadge heading="Compare and contrast" />

            <h2 className="font-heading text-h1 font-bold text-heading">
              Eliminate manual C-II through C-V tracking spreadsheets
            </h2>

            <p className="mt-4 text-muted max-w-5xl mx-auto">
              Replace error-prone spreadsheets with automated, real-time
              controlled substance inventory tracking built for regulatory
              compliance.
            </p>

            <ComparisonSection />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ControlSubstanceFeatures;
