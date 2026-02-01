import {useState, useEffect} from "react"
import { motion } from "motion/react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import MainBadge from "@/components/reusable/Badge";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";
import { cn } from "@/lib/utils";
import { advList } from "../OrderAutomation/OrderAutomationHero";
import { NumberTicker } from "@/components/ui/number-ticker";

// Analytics Dashboard
const LTCAnalyticsLayeredUI = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 pointer-events-none">
      <div className="relative w-full max-w-6xl h-[500px]">
        {/* LAYER 2 - Middle Cards (Slightly Elevated) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 left-12 right-12"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-300/50 dark:border-gray-600/50 p-8">
            <div className="grid grid-cols-3 gap-6">
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-xl p-5 border border-purple-200 dark:border-purple-700">
                <div className="text-xs text-purple-700 dark:text-purple-300 font-semibold mb-2">
                  Active Patients
                </div>
                <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                  342
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-700 dark:text-green-400">+8.2%</span>
                </div>
              </div>

            
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700">
                <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold mb-2">
                  Medications Managed
                </div>
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                  1,247
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-700 dark:text-green-400">+12.5%</span>
                </div>
              </div>

            
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/30 dark:to-green-800/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
                <div className="text-xs text-green-700 dark:text-green-300 font-semibold mb-2">
                  Compliance Rate
                </div>
                <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                  98.4%
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-700 dark:text-green-400">+2.1%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* LAYER 3 - Top Floating Cards (Most Prominent) */}
        
        {/* Floating Card 1 - Analytics Chart (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: -50, x: -30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-32 left-0 z-20"
          style={{ transform: 'translateZ(100px)' }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-80">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Patient Outcomes</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Last 6 months</p>
              </div>
            </div>

            {/* Mini Bar Chart */}
            <div className="space-y-2 mb-4">
              {[85, 88, 90, 92, 94, 96].map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 w-8">
                    M{index + 1}
                  </span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white w-10 text-right">
                    {value}%
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/10 rounded-lg p-3 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center justify-between">
                <span className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold">
                  Improvement
                </span>
                <span className="text-lg font-bold text-indigo-900 dark:text-indigo-100">
                  +12.9%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 2 - Medication Analytics (Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: -50, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-40 left-72 z-20"
          style={{ transform: 'translateZ(100px)' }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-72">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Med Adherence</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Top performers</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Lisinopril', rate: 98, patients: 47 },
                { name: 'Metformin', rate: 96, patients: 38 },
                { name: 'Atorvastatin', rate: 95, patients: 52 },
              ].map((med, index) => (
                <motion.div
                  key={med.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {med.name}
                    </span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {med.rate}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{med.patients} patients</span>
                    <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                      <div 
                        className="bg-emerald-500 h-1.5 rounded-full"
                        style={{ width: `${med.rate}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-400">Overall Rate</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">96.3%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-0"
          style={{ transform: 'translateX(-50%) translateZ(100px)' }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-96">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Key Insights</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">AI-powered</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            <div className="space-y-2">
              {[
                { label: 'Order Processing', value: '94%', color: 'blue' },
                { label: 'Delivery Accuracy', value: '98%', color: 'green' },
                { label: 'Patient Satisfaction', value: '92%', color: 'purple' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`flex items-center justify-between p-3 bg-${item.color}-50 dark:bg-${item.color}-900/20 rounded-lg border border-${item.color}-200 dark:border-${item.color}-800`}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold text-${item.color}-600 dark:text-${item.color}-400`}>
                      {item.value}
                    </span>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const stats = [
  {
    value: 100,
    prefix:"$",
    suffix: "K+",
    body: "Annual savings per 25 facilities served",
  },
  {
    value: 85,
    suffix: "% ",
    body: "Fewer medication errors",
  },
  
  {
    value: 60 ,
    suffix: "%",
    body: "Reduction in facility communication time",
  },
  {
    value: 40,
    suffix: "%",
    body: "Improvement in order turnaround time",
  },
  
];

const LTCHero = () => {
    const [limit, setLimit] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setLimit((prev) => prev + 1);
        }, 50000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <section className="relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 gap-14">
          <div className="p-2 flex flex-col items-center md:items-start text-center md:text-start gap-6">
            {/* Badge */}
            <div>
              <MainBadge heading="LTC Analysis Portal" />
            </div>

            {/* Text */}
            <div className="max-w-6xl flex flex-col gap-6">
              <h1 className="font-heading text-h1 font-bold text-heading">
                LTC Analytics & Operations Platform
              </h1>

              <p className="font-body text-paragraph text-muted">
                Advanced analytics platform for long-term care facilities. Gain
                actionable insights, optimize medication management, track
                performance metrics, and make data-driven decisions to improve
                patient outcomes and operational efficiency.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

            {/* Stats */}
           
          </div>
          <LTCAnalyticsLayeredUI />
        </div>

             <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 pb-20 max-w-6xl mx-auto">
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
      </motion.div>
    </section>
  );
};

export default LTCHero;
