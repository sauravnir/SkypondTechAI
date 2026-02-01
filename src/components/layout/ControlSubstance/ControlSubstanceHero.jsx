import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import MainBadge from "@/components/reusable/Badge";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import { advList } from "../OrderAutomation/OrderAutomationHero";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { NumberTicker } from "@/components/ui/number-ticker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// Chart component
export function StockTrendChart() {
  const data = {
    labels: ["Morphine", "Oxycodone", "Fentanyl", "Hydrocodone", "Codeine"],
    datasets: [
      {
        label: "Current Stock",
        data: [120, 35, 5, 80, 60],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Controlled Substance Stock",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6">
      <Bar data={data} options={options} />
    </div>
  );
}

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

const ControlSubstanceHero = () => {
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

  // Controlling the animation timer of the stats
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
            " [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-y-[-20%] h-[150%] skew-y-0 opacity-20",
          )}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10, filter: ["blur(10px)"] }}
        animate={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
        transition={{ duration: 0.6, ease: "anticipate" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 gap-14">
          <div className="md:col-span-1 p-2 flex flex-col items-center md:items-start md:text-start text-center justify-start mt-10 gap-6">
            {/* Badge */}
            <div>
              <MainBadge heading="Control Substance" />
            </div>

            {/* Text */}
            <div className="max-w-7xl flex flex-col gap-6">
              <h1 className="font-heading text-h1 font-bold text-heading">
                Controlled Substance Inventory Management
              </h1>

              <p className="font-body text-paragraph text-muted max-w-6xl">
                Comprehensive inventory management solution for controlled
                substances. Track stock levels in real-time, maintain regulatory
                compliance, automate reporting, and reduce discrepancies with
                our intuitive tracking system designed specifically for LTC
                pharmacies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start">
              <PrimaryButton title="Get Started for FREE" size="lg" />
              <RequestDemo title="Request a Demo" size="lg" />
            </div>

            {/* card design */}
            <div className="flex flex-row items-center justify-start gap-2 -mt-2 ">
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-muted/20 shadow-2xl  transition-all duration-300 group overflow-hidden"
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

                    <p className="relative z-10 font-body font-medium text-small text-heading/80 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-card rounded-2xl p-4 mt-10 shadow-2xl pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stock Trend Chart */}
              <div className="md:col-span-3 md:row-span-2">
                <h3 className="text-lg font-semibold mb-2">
                  Stock Trend (Last 30 Days)
                </h3>
                <div className="border rounded-2xl">
                  <StockTrendChart />
                </div>
              </div>

              {/* Inventory Snapshot */}
              <div className="md:col-span-2 md:row-span-1 bg-card rounded-2xl border shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-4">
                  Inventory Snapshot
                </h3>
                <div className="overflow-y-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="text-muted-foreground border-b">
                        <th className="px-2 py-1">Item</th>
                        <th className="px-2 py-1">Qty</th>
                        <th className="px-2 py-1">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { name: "Morphine 10mg", qty: 120, status: "Safe" },
                        { name: "Oxycodone 5mg", qty: 5, status: "Critical" },
                        { name: "Fentanyl 2mcg", qty: 45, status: "Low" },
                        { name: "Paracetamol 50mg", qty: 60, status: "Low" },
                         { name: "Acetone 2mg", qty: 200, status: "Safe" },
                        
                      ].map((item, i) => (
                        <tr
                          key={i}
                          className="hover:bg-accent/5 transition-colors"
                        >
                          <td className="px-2 py-1 font-mono">{item.name}</td>
                          <td className="px-2 py-1">{item.qty}</td>
                          <td className="px-2 py-1">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${
                                item.status === "Safe"
                                  ? "bg-green-500/10 text-green-600"
                                  : item.status === "Low"
                                    ? "bg-yellow-500/10 text-yellow-600"
                                    : "bg-red-500/10 text-red-600"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Alerts */}
              <div className="md:col-span-1 bg-card border rounded-2xl shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Alerts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2 bg-red-50 rounded-xl text-sm">
                    <span>Fentanyl 2mcg stock below threshold</span>
                  </li>
                  <li className="flex items-center justify-between p-2 bg-yellow-50 rounded-xl text-sm">
                    <span>Oxycodone 5mg stock low</span>
                  </li>
                  <li className="flex items-center justify-between p-2 bg-red-200 rounded-xl text-sm">
                    <span>Paracetamol 100mcg stock low</span>
                  </li>
                </ul>
              </div>

              <div className="col-span-3 text-center px-4 text-small text-muted">
                <span>{new Date().getFullYear()} Skypond AI. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ControlSubstanceHero;
