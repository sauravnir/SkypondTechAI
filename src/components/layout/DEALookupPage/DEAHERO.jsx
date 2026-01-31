import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import MainBadge from "@/components/reusable/Badge";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import { Hourglass, TrendingUp, ChartColumnBig, Infinity } from "lucide-react";
import { NumberTicker } from "../../ui/number-ticker";
import { advList } from "../OrderAutomation/OrderAutomationHero";
import Chart from "chart.js/auto";

const stats = [
  {
    value: 95,
    suffix: "%",

    body: "Reduce compliance risks",
  },
  {
    value: 10,
    suffix: "+hrs",

    body: "Save per month",
  },
  {
    value: 100,
    suffix: "%",

    body: "Real time checks",
  },
];

const DEAHERO = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "DEA Validations",
              data: [120, 190, 300, 500, 420, 680],
              borderColor: "#6366F1",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Monthly DEA Audit Activity",
              font: {
                size: 16,
                weight: "bold",
                family: "Hanken Grotesk",
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLimit((prev) => prev + 1);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <InteractiveGridPattern
          className={cn(
            " [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-y-[-40%] h-[200%] skew-y-0 opacity-15",
          )}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10, filter: ["blur(10px)"] }}
        animate={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
        transition={{ duration: 0.6, ease: "anticipate" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 pt-40 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="p-2 flex flex-col gap-6">
            {/* Badge */}
            <div>
              <MainBadge heading="DEA Lookup " />
            </div>

            {/* Text */}
            <div className="max-w-3xl flex flex-col gap-6">
              <h1 className="font-heading text-h1 font-bold text-heading">
                DEA Lookup & Compliance Verification
              </h1>

              <p className="font-body text-paragraph text-muted">
                Instantly verify DEA numbers with our comprehensive validation
                tool. Ensure compliance, reduce errors, and streamline your
                verification process with real-time database access and
                automated audit reporting.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start">
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
          <motion.div
            initial={{ opacity: 0, y: -5, filter: "blur[10px]" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur[0px]" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "aniticipate" }}
            className="bg-white p-8 rounded-2xl shadow-2xl border"
          >
            <div className="relative" style={{ height: "400px" }}>
              <canvas
                ref={chartRef}
                id="deaAuditChart"
                width="875"
                height="500"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay:0.5, ease: "easeIn" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-20 gap-4 px-4 md:px-">
            {stats.map((item, index) => {
        
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-muted/20"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Big Number */}
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

                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-4"></div>

                  {/* Label */}
                  <p className="relative z-10 text-center font-body font-medium text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>

                
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DEAHERO;
