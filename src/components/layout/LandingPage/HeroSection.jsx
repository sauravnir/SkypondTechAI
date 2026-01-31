import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardDescription, CardTitle } from "../../ui/card";

import { PrimaryButton, SecondaryButton } from "@/components/reusable/Button";

import {
  ChevronRight,
  User,
  Medal,
  BriefcaseBusiness,
  Shield,
  ArrowUpRight,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  Package,
  BarChart3,
  HeartPlus,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../../ui/dialog";

import ContactForm from "../../reusable/ContactForm";
import { motion } from "motion/react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { ProgressiveBlur } from "../../ui/progressive-blur";
import "@/index.css";

export const itemList = [
    {
      icon: <User />,
      head: "50+",
      body: "LTC Facilities",
      gradient: "bg-gradient-to-r from-[#5391f4ff] to-[#0e81c8ff]",
    },
    {
      icon: <Medal />,
      head: "HIPAA",
      body: "Compliant",
      gradient: "bg-gradient-to-r from-[#18cd91ff] to-[#0d9488ff]",
    },
    {
      icon: <Shield />,
      head: "99%",
      body: "Uptime",
      gradient: "bg-gradient-to-r from-[#fcbf1eff] to-[#e1701eff]",
    },
    {
      icon: <BriefcaseBusiness />,
      head: "Enterprise",
      body: "Grade",
      gradient: "bg-gradient-to-r from-[#f87171] to-[#ef4444]",
    },
  ];

const HeroSection = ({ id }) => {
  //Creating fetures array

 

  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
         <InteractiveGridPattern
                  className={cn(
                    " [mask-image:radial-gradient(1100px_circle_at_center,white,transparent)]",
                    "inset-y-[-10%] h-[100%] skew-y-0 opacity-20",
                  )}
                />
      </div>
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.5"
          d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L0,0Z"
        />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full opacity-25 translate-y-6"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.4"
          d="M0,192L96,208C192,224,384,256,576,245.3C768,235,960,181,1152,160C1344,139,1440,160,1440,160L1440,0L0,0Z"
        />
      </svg>

      <div className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 justify-center items-center pointer-events-none ">
        <div className="max-w-3xl items-center text-center ">
          {/* Referencing H1 for animation */}
          <motion.h1
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-heading text-hero leading-[1.1] font-extrabold max-w-4xl">
              <span className="block text-gradient">
                Transforming Healthcare and Long-Term Care 
              </span> 
            </h1>
            <span className="text-hero font-bold text-heading">with Enterprise AI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col justify-center items-center text-center mt-8 ">
              <p className="font-body text-paragraph text-muted max-w-3xl leading-relaxed px-4">
                Skypond delivers purpose-built AI solutions for pharmacies,
                skilled nursing facilities, and healthcare providers—automating
                operations, ensuring compliance, and driving measurable outcomes
                across your organization.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeIn" }}
          >
            <div className="flex flex-wrap gap-6 justify-center mt-10 pointer-events-auto">
              <PrimaryButton title="Get Started For FREE" size="lg" />
              <SecondaryButton title="SkypondTech" size="lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-2 font-heading font-medium text-small mt-6">
              <h1 className="flex items-center gap-1 text-muted underline">
                <HeartPlus size={16} className="text-emerald-600" />
                Built for Healthcare
              </h1>
              <h1 className="flex items-center gap-1 text-muted underline">
                <Medal size={16} className="text-yellow-500" /> HIPAA Compliant
              </h1>
              <h1 className="flex items-center gap-1 text-muted underline">
                <Shield size={16} className="text-red-600" /> Enterprise grade
                security
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 1.6, ease: "easeIn" }}
      >
        <div className="relative flex justify-center items-center z-10 w-full py-14 px-4 md:py-24 lg:py-24">
          <div className="flex-1 relative">
            <div className="max-w-7xl mx-auto p-4 bg-darkprimary rounded-2xl shadow-2xl">
              <div className="relative w-full max-w-7xl mx-auto pointer-events-none">
                {/* Dashboard Container */}
                <motion.div className="relative rounded-2xl overflow-hidden ">
                  {/* Dashboard Mock - Light Theme */}
                  <div className="bg-background p-6 md:p-8 border border-gray-200 font-body">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                      <div>
                        <h3 className="text-h3 font-bold text-heading">
                          {" "}
                          Dashboard
                        </h3>
                        <p className="text-small font-body text-muted mt-1">
                          Real-time pharmacy analytics
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-body text-sm text-green-700 font-medium">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {[
                        {
                          icon: Activity,
                          label: "Active Orders",
                          value: "247",
                          change: "+12%",
                          color: "blue",
                        },
                        {
                          icon: CheckCircle2,
                          label: "Completed Today",
                          value: "1,834",
                          change: "+8%",
                          color: "green",
                        },
                        {
                          icon: Clock,
                          label: "Avg. Processing",
                          value: "4.2m",
                          change: "-15%",
                          color: "purple",
                        },
                        {
                          icon: AlertCircle,
                          label: "Pending Review",
                          value: "12",
                          change: "-23%",
                          color: "orange",
                        },
                      ].map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="bg-white border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div
                              className={`p-2 rounded-lg bg-${stat.color}-50`}
                            >
                              <stat.icon
                                className={`w-5 h-5 text-${stat.color}-600`}
                              />
                            </div>
                            <span
                              className={`font-body text-xs font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                            >
                              {stat.change}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Chart Section */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-900">
                            Prescription Volume
                          </h4>
                          <div className="flex gap-2">
                            {["Day", "Week", "Month"].map((period) => (
                              <button
                                key={period}
                                className={`px-3 py-1 text-xs rounded-lg transition-all ${
                                  period === "Week"
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                              >
                                {period}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Mock Chart */}
                        <div className="relative h-48 flex items-end justify-between gap-2">
                          {[65, 78, 90, 85, 95, 88, 92].map((height, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{
                                duration: 0.8,
                                delay: 0.5 + idx * 0.1,
                              }}
                              className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg hover:from-primary/90 hover:to-primary/60 transition-all cursor-pointer relative group"
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                                {Math.floor(height * 30)} orders
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-500">
                          {[
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ].map((day) => (
                            <span key={day}>{day}</span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Recent Activity */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Recent Activity
                        </h4>
                        <div className="space-y-4">
                          {[
                            {
                              icon: CheckCircle2,
                              text: "Order #8472 completed",
                              time: "2m ago",
                              color: "green",
                            },
                            {
                              icon: Package,
                              text: "Inventory restocked",
                              time: "15m ago",
                              color: "blue",
                            },
                            {
                              icon: Users,
                              text: "New patient registered",
                              time: "1h ago",
                              color: "purple",
                            },
                            {
                              icon: AlertCircle,
                              text: "Review required: #8401",
                              time: "2h ago",
                              color: "orange",
                            },
                            {
                              icon: TrendingUp,
                              text: "Daily target achieved",
                              time: "3h ago",
                              color: "green",
                            },
                          ].map((activity, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.6 + idx * 0.1,
                              }}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              <div
                                className={`p-2 rounded-lg bg-${activity.color}-50`}
                              >
                                <activity.icon
                                  className={`w-4 h-4 text-${activity.color}-600`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-900">
                                  {activity.text}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {activity.time}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {[
                        {
                          label: "Error Rate",
                          value: "0.03%",
                          icon: AlertCircle,
                          trend: "down",
                        },
                        {
                          label: "Avg Response Time",
                          value: "1.2s",
                          icon: Clock,
                          trend: "down",
                        },
                        {
                          label: "Customer Satisfaction",
                          value: "98.5%",
                          icon: TrendingUp,
                          trend: "up",
                        },
                      ].map((metric, idx) => (
                        <div
                          key={metric.label}
                          className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                        >
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <metric.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">
                              {metric.label}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-gray-900">
                                {metric.value}
                              </span>
                              <TrendingUp
                                className={`w-4 h-4 ${metric.trend === "up" ? "text-green-600" : "text-green-600 rotate-180"}`}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Decorative Glow - Lighter */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 blur-2xl -z-10 opacity-30" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

{
  /* <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 1.6, ease: "easeIn" }}
      >
        
        <div className="relative flex justify-center items-center z-10 w-full py-14 px-4 md:py-24 lg:py-24">
          
          <div className="flex-1 relative transition-transform duration-400 hover:scale-[1.01]">
            <div className="relative w-full max-w-6xl mx-auto ">
            
              <div className="btn-gradient rounded-3xl shadow-2xl p-12 relative z-10 overflow-hidden">
              
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="flex flex-col relative z-10 items-center justify-center ">
                  <h3 className="font-heading text-h3 text-white font-bold mb-4 text-center">
                    Transform Your Pharmacy Operations
                  </h3>

                  <p className="font-body text-small text-white mb-4 text-center">
                    Join hundreds of LTC pharmacies using AI to automate
                    workflows, ensure compliance, and deliver better patient
                    care.
                  </p>

                 
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl w-full">
                    {itemList.map((item) => (
                      <div key={item.head} className="group">
                        <Card
                          className="
          relative
          p-4 md:p-6
          bg-null
          border border-white/10
          backdrop-blur-sm
          transition-all
          hover:shadow-2xl
        "
                        >
                          <div
                            className="
            flex flex-col md:flex-row
            items-center md:items-center
            gap-3 md:gap-4
          "
                          >
                          
                            <div className="flex-shrink-0 p-3">{item.icon}</div>

                           
                            <div className="flex flex-col min-w-0 text-white items-center md:items-start">
                              <CardTitle className="font-body text-h3 leading-tight">
                                {item.head}
                              </CardTitle>

                              <CardDescription className="font-body text-sm md:text-base font-medium text-primary-foreground mt-1">
                                {item.body}
                              </CardDescription>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */
}
