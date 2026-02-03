import { motion } from "framer-motion";

import MainBadge from "@/components/reusable/Badge";

import ReduceError from "@/assets/media/Fact1.svg";
import SaveTime from "@/assets/media/Fact2.svg";

import HipaaCompliance from "@/assets/media/Fact4.jfif";
import ScaleStaffing from "@/assets/media/Fact8.jfif";
import RealTime from "@/assets/media/Fact5.svg";
import { PrimaryButton } from "@/components/reusable/Button";

const reasons = [
  {
    id: 0,
    title: "Reduce medication errors by 99%",
    description:
      "AI-powered verification ensures prescriptions are accurate before dispensing.",
    graphic: ReduceError,
  },
  {
    id: 1,
    title: "Save 75% on manual data entry",
    description: "Automated intake eliminates repetitive administrative work.",
    graphic: SaveTime,
  },
  {
    id: 2,
    title: "Automatic HIPAA compliance",
    description: "Built-in safeguards ensure continuous regulatory adherence.",
    graphic: HipaaCompliance,
  },
  {
    id: 3,
    title: "Scale without staffing increases",
    description: "Handle growth without adding operational overhead.",
    graphic: ScaleStaffing,
  },
  {
    id: 4,
    title: "Real-time operational insights",
    description:
      "Live dashboards provide instant visibility into pharmacy performance.",
    graphic: RealTime,
  },
];

// Reduce Error Card
export const ReduceErrorUI = () => {
  const checks = [
    "Medication name verified",
    "Dosage validated",
    "Interactions screened",
    "Allergies cross-checked",
  ];

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none mt-52 md:mt-0">
      <div className="w-full">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-gray-850 to-gray-900 shadow-2xl overflow-hidden">

          <div className="relative z-10 p-8 space-y-8">

            {/* Title */}
            <div>
              <h3 className="text-xl font-bold text-white">
                Built to Prevent Errors
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mt-2">
                AI continuously safeguards every prescription — quietly,
                automatically, and without disrupting workflows.
              </p>
            </div>

            {/* Central Flow */}
            <div className="flex items-center justify-between gap-4">

              {/* Input */}
              <div className="flex-1 rounded-xl border border-white/10 bg-gray-800/70 p-4">
                <div className="text-xs text-neutral-400 mb-1">
                  Incoming Prescription
                </div>
                <div className="text-sm font-semibold text-white">
                  Lisinopril · 10mg · 30 tablets
                </div>
              </div>

              {/* AI Node */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute w-20 h-20 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-300 text-xs font-bold">
                  AI
                </div>
              </motion.div>

              {/* Output */}
              <div className="flex-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <div className="text-xs text-emerald-300 mb-1">
                  Safe to Dispense
                </div>
                <div className="text-sm font-semibold text-white">
                  Cleared without intervention
                </div>
              </div>
            </div>

            {/* Quiet Checks */}
            <div className="grid grid-cols-2 gap-3">
              {checks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 text-xs text-neutral-500">
              No manual review · No alerts · No delays
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Real Time Card
export const RealTimeUI = () => {
  const events = [
    "Prescription received",
    "Order prioritized",
    "Inventory Confirmed",
  ];

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none mt-4 md:mt-0">
      <div className="w-full max-w-md">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-gray-850 to-gray-900 shadow-2xl overflow-hidden">

          {/* Subtle motion glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-pulse" />

          <div className="relative z-10 p-4 space-y-8">

            {/* Header */}
            <div>
              <h3 className="text-xl font-bold text-white">
                Real-Time Operations
              </h3>
              <p className="text-sm text-neutral-400 max-w-sm mt-2">
                Activity flows continuously across pharmacies, facilities, and
                patients — without refresh or delay.
              </p>
            </div>

            {/* Live Flow */}
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-gray-800/70 p-4"
                >
                  
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>

                  <span className="text-sm text-neutral-200">
                    {event}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3"
            >
              <span className="text-sm font-medium text-white">
                System responding in real time
              </span>
              <span className="text-xs font-semibold text-emerald-300">
                LIVE
              </span>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};


// Saving Timer Card
export const SaveTimeUI = () => {
  const taskItems = [
    { task: "Patient intake form", status: "automated", time: "15 sec" },
    { task: "Insurance verification", status: "automated", time: "8 sec" },
    { task: "Prescription entry", status: "automated", time: "12 sec" },
{ task: "Prior authorization request", status: "automated", time: "20 sec" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-0 mt-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-b from-gray-850 to-gray-900 rounded-2xl shadow-2xl border border-white/10 p-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Automation Status
                </h4>
                <p className="text-xs text-neutral-400">
                  Today’s tasks
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                75%
              </div>
              <div className="text-xs text-neutral-400">
                Time Saved
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-4">
            {taskItems.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">
                    {item.task}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400">
                    {item.time}
                  </span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-md border border-emerald-500/30">
                    AUTO
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl p-4 bg-white/5 border border-white/10">
              <div className="text-xs text-neutral-400 font-semibold mb-1">
                Manual Time
              </div>
              <div className="text-2xl font-bold text-white">
                2.5h
              </div>
            </div>

            <div className="rounded-xl p-4 bg-accent/5 border border-accent">
              <div className="text-xs text-accent font-semibold mb-1">
                Automated
              </div>
              <div className="text-2xl font-bold text-accent">
                35min
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Automatic HIPAA Compliance Card
export const HipaaComplianceUI = () => {
  const checks = [
    { label: "Data Encryption", meta: "AES-256 / TLS 1.3" },
    { label: "Access Controls", meta: "RBAC enforced" },
    { label: "Privacy Safeguards", meta: "PHI isolated" },
  ]

  return (
    <div className="w-full h-full  flex items-center justify-center mt-6 md:mt-4 ">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-gray-850 to-gray-900 p-4 shadow-2xl overflow-hidden">
        <div className="relative z-10 space-y-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                HIPAA Compliance
              </h3>
              <p className="text-xs text-white/50">
                Live security enforcement
              </p>
            </div>
          </div>

          {/* Inner proof card */}
          <div className="rounded-xl border border-white/10 p-4 space-y-3 shadow-inner">

            {checks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/40 font-mono">
                    {item.meta}
                  </p>
                </div>

                {/* verified */}
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status block */}
          <div className="rounded-xl border border-accent bg-accent/5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-accent">
                Compliance Status
              </span>
              <span className="text-lg font-bold text-accent">
                100%
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-emerald-500/20">
              <div className="h-2 w-full rounded-full bg-accent" />
            </div>

            {/* <p className="mt-2 text-xs text-accent">
              No violations • Continuous monitoring active
            </p> */}
          </div>

        </div>
      </div>
    </div>
  )
}
// Scale with staffing Card
export const ScaleStaffingUI = () => {
  const monthlyData = [
    { month: 'Jan', prescriptions: 800, staff: 5 },
    { month: 'Feb', prescriptions: 1000, staff: 5 },
    { month: 'Mar', prescriptions: 1400, staff: 5 },
    { month: 'Apr', prescriptions: 2100, staff: 5 },
    { month: 'May', prescriptions: 2300, staff: 5 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center mt-6 md:mt-4 pointer-events-none">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-b from-gray-850 to-gray-900 rounded-2xl shadow-2xl border border-white/10 p-4 relative overflow-hidden">

          <div className="relative z-10 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-lg font-bold text-white">Growth Metrics</h4>
                  <p className="text-xs text-white/50">Last 4 months</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">+80%</div>
                <div className="text-xs text-white/50">Volume</div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="space-y-3 mb-5">
              {monthlyData.map((data, index) => (
                <motion.div
                  key={data.month}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-white">{data.month}</span>
                    <span className="text-white/50">{data.prescriptions} Rx</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-3">
                    <div
                      className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(data.prescriptions / 2300) * 100}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Staff Count */}
            <div className="rounded-2xl border-accent bg-accent/10 border p-4 ">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-accent font-semibold mb-1">Staff Count</div>
                  <div className="text-3xl font-bold text-accent">5</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-accent mb-1">Same team,</div>
                  <div className="text-sm font-bold text-accent">85% more volume</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default function WhyChooseUs() {
  return (
    <section className="relative bg-altbackground">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-start"
        >
          <MainBadge heading="Why Us" />
          <h1 className="font-heading text-h1 max-w-6xl text-primary-foreground/95 font-bold">
            Why leading LTC Pharmacies choose Skypond
          </h1>
          <p className="mt-4 w-full font-body text-paragraph text-white/80">
            Because long-term care pharmacies need more than software —{" "}
            <span className="text-primary font-bold">they need certainty.</span>
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
        border border-white/10 hover:border-primary/50
        hover:shadow-2xl hover:shadow-primary/20
        transition-all duration-500 overflow-hidden"
          >
            {/* Accent */}
            {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-cyan-400" /> */}

            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-h3 md:text-3xl font-bold text-primary transition-colors">
                  {reasons[0].title}
                </h3>
                <p className="font-body text-paragraph text-gray-300 mt-4 max-w-xl leading-relaxed">
                  {reasons[0].description}
                </p>
              </div>
              <ReduceErrorUI />
            </div>
          </motion.div>

          {/*Realtime operational dashboard*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-1 md:row-span-2 rounded-2xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
        border border-white/10 hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/10
        transition-all duration-500 overflow-hidden"
          >
            {/* <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400" /> */}
            <div className="grid grid-cols-1  p-8 h-full">
              <div className="md:col-span-2">
                <h3 className="font-heading text-h3 font-bold text-primary transition-colors">
                  {reasons[4].title}
                </h3>
                <p className="font-body text-paragraph text-gray-300 mt-3 leading-relaxed max-w-3xl">
                  {reasons[4].description}
                </p>
              </div>

              <RealTimeUI />
            </div>
          </motion.div>

      {/* Save time card*/}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5}}
            className="group relative md:col-span-1 md:row-span-2 rounded-2xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
        border border-white/10 hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/10
        transition-all duration-500 overflow-hidden"
          >
            {/* <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400" /> */}
            <div className="grid grid-cols-1 p-8 h-full">
              <div className="md:col-span-2">
                <h3 className="font-heading text-h3 font-bold text-primary transition-colors">
                  {reasons[1].title}
                </h3>
                <p className="font-body text-paragraph text-gray-300 mt-3 leading-relaxed max-w-3xl">
                  {reasons[1].description}
                </p>
              </div>

              <SaveTimeUI />
            </div>
          </motion.div>

    {/* Automatics HIPAA Compliance */}
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-1 md:row-span-2 rounded-2xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
        border border-white/10 hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/10
        transition-all duration-500 overflow-hidden"
          >
            
            <div className="grid grid-cols-1 p-8 h-full">
              <div className="md:col-span-2">
                <h3 className="font-heading text-h3 font-bold text-primary transition-colors">
                  {reasons[2].title}
                </h3>
                <p className="font-body text-paragraph text-gray-300 mt-3 leading-relaxed max-w-3xl">
                  {reasons[2].description}
                </p>
              </div>
            <HipaaComplianceUI/>
             
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5}}
            className="group relative md:col-span-1 md:row-span-2 rounded-2xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
        border border-white/10 hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/10
        transition-all duration-500 overflow-hidden"
          >
            
            <div className="grid grid-cols-1 p-8 h-full">
              <div className="md:col-span-2">
                <h3 className="font-heading text-h3 font-bold text-primary transition-colors">
                  {reasons[3].title}
                </h3>
                <p className="font-body text-paragraph text-gray-300 mt-3 leading-relaxed max-w-3xl">
                  {reasons[3].description}
                </p>
              </div>
            <ScaleStaffingUI />
             
            </div>
          </motion.div>


        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-row mt-16 justify-center"
        >
          <PrimaryButton title="See SkypondTech AI in Action" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
