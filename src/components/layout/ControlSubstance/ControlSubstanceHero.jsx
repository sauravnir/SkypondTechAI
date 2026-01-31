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
        <div className="grid grid-cols-1 md:grid-cols-2 pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="md:col-span-2 p-2 flex flex-col items-center text-center justify-center gap-6">
            {/* Badge */}
            <div>
              <MainBadge heading="Control Substance" />
            </div>

            {/* Text */}
            <div className="max-w-3xl flex flex-col gap-6">
              <h1 className="font-heading text-h1 font-bold text-heading">
                Controlled Substance Inventory Management
              </h1>

              <p className="font-body text-paragraph text-muted">
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

          <div className="bg-darkprimary rounded-2xl p-4 md:col-span-2 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-card rounded-2xl">
              {/* Stock Trend Chart */}
              <div className="md:col-span-2 md:row-span-2 ">
                <h3 className="text-lg font-body font-semibold mb-2 ">
                  Stock Trend (Last 30 Days)
                  <StockTrendChart />
                </h3>
              </div>

              {/* Inventory Snapshot */}
              <div className="md:col-span-1 md:row-span-2 bg-card rounded-2xl border shadow-xl p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Inventory Snapshot
                </h3>
                <div className="md:h-[350px] bg-background/80 p-2 rounded-2xl  overflow-x-auto mt-4">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="text-muted-foreground border-b">
                        <th className="px-3 py-1">Item Name</th>
                        <th className="px-3 py-1">Quantity</th>
                        <th className="px-3 py-1">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {
                          name: "Morphine 10mg",
                          qty: 120,
                          status: "Safe",
                          updated: "2026-01-30",
                        },
                        {
                          name: "Oxycodone 5mg",
                          qty: 35,
                          status: "Low",
                          updated: "2026-01-28",
                        },
                        {
                          name: "Fentanyl 2mcg",
                          qty: 5,
                          status: "Critical",
                          updated: "2026-01-31",
                        },
                        {
                          name: "Hydrocodone 10mg",
                          qty: 60,
                          status: "Safe",
                          updated: "2026-01-29",
                        },
                        {
                          name: "Codeine 30mg",
                          qty: 25,
                          status: "Low",
                          updated: "2026-01-27",
                        },
                        {
                          name: "Methadone 5mg",
                          qty: 8,
                          status: "Critical",
                          updated: "2026-01-30",
                        },
                        {
                          name: "Buprenorphine 2mg",
                          qty: 45,
                          status: "Safe",
                          updated: "2026-01-26",
                        },
                        {
                          name: "Hydromorphone 4mg",
                          qty: 12,
                          status: "Low",
                          updated: "2026-01-28",
                        },
                      ].map((item, i) => (
                        <tr
                          key={i}
                          className="hover:bg-accent/5 transition-colors"
                        >
                          <td className="px-3 py-2 font-mono">{item.name}</td>
                          <td className="px-3 py-2">{item.qty}</td>
                          <td className="px-3 py-2">
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
              <div className="bg-card border rounded-2xl shadow-xl p-4">
                <h3 className="text-lg font-semibold mb-2">Alerts</h3>
                <div className="bg-background/80 p-2 rounded-2xl">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between p-2 bg-red-50 rounded-xl text-small">
                      <span>Fentanyl 2mcg stock below threshold</span>
                      <span className="text-red-600 font-semibold">
                        Critical
                      </span>
                    </li>
                    <li className="flex items-center justify-between p-2 bg-yellow-50 rounded-xl text-small">
                      <span>Oxycodone 5mg stock low</span>
                      <span className="text-yellow-600 font-semibold">Low</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card border rounded-2xl shadow-xl p-4">
                <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                <div className="bg-background/80 p-2 rounded-2xl">
                  <ul className="space-y-1 text-sm tracking-tight text-muted-foreground ">
                    <li>-Verified 5 DEA numbers for Morphine (2026-01-30)</li>
                    <li>
                      -Generated compliance report for Oxycodone (2026-01-29)
                    </li>
                    <li>-Checked Fentanyl expiration date (2026-01-28)</li>
                  </ul>
                </div>
              </div>

              {/* Expiring DEA Licenses */}
              <div className="bg-card border rounded-2xl shadow-xl p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Expiring DEA Licenses
                </h3>
                <div className="bg-background/80 p-2 rounded-2xl">
                  <ul className="space-y-2 text-small">
                    {[
                      { prescriber: "Dr. John Smith", daysLeft: 12 },
                      { prescriber: "Dr. Alice Brown", daysLeft: 25 },
                      { prescriber: "Dr. Mark Lee", daysLeft: 7 },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between p-2 rounded-xl bg-red-50 "
                      >
                        <span>{item.prescriber}</span>
                        <span className="text-heading">
                          {item.daysLeft} days
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
       
      </motion.div>
    </div>
  );
};

export default ControlSubstanceHero;
