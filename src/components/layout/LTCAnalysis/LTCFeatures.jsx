import MainBadge from "@/components/reusable/Badge";
import { motion } from "motion/react";
import { Archive, Search, GitCompare, Signature } from "lucide-react";

export const LTCFeatures = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-6 lg:px-8 items-center py-20 justify-center font-body">
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
          className="grid grid-cols-1
  md:grid-cols-4
  md:auto-rows-[minmax(260px,auto)]
  gap-6
  p-4 md:p-10
mt-16
   "
        >
          {/* First Card */}
          <motion.div 
          initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          className="relative md:col-span-2 md:row-span-2 md:row-start-1 rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden pointer-events-none">
            <div className="relative z-10 space-y-6">
              <h3 className="font-heading text-h3 text-heading font-bold">
                Analytics & Reporting
              </h3>

              <p className="text-muted-foreground max-w-md">
                Real-time visibility into pharmacy performance with predictive
                insights that drive smarter decisions.
              </p>
            </div>

            {/* Chart */}

            <div className="relative p-4 rounded-2xl border bg-primary/5 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="hidden md:block bg-card dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg  border border-gray-300/50 dark:border-gray-600/50 p-4 ">
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className=" bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-xl p-5 border border-purple-200 dark:border-purple-700">
                      <div className="text-xs text-purple-700 dark:text-purple-300 font-semibold mb-2">
                        Active Patients
                      </div>
                      <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                        342
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          +8.2%
                        </span>
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
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          +12.5%
                        </span>
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
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          +2.1%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-6 rounded-xl border bg-card p-4 pointer-events-none shadow-lg">
                <svg
                  viewBox="0 0 300 100"
                  className="w-full h-24"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <g className="stroke-muted-foreground/20">
                    <line x1="0" y1="25" x2="300" y2="25" />
                    <line x1="0" y1="50" x2="300" y2="50" />
                    <line x1="0" y1="75" x2="300" y2="75" />
                  </g>

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Animated Line */}
                  <motion.polyline
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    points="0,70 40,62 80,58 120,45 160,40 200,32 240,28 300,22"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="stroke-primary"
                  />

                  {/* Gradient area under line */}
                  <motion.polygon
                    fill="url(#lineGradient)"
                    points="0,70 40,62 80,58 120,45 160,40 200,32 240,28 300,22 300,100 0,100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  />

                  {/* Data Points */}
                  {[
                    [0, 70, "#6366f1"],
                    [40, 62, "#3b82f6"],
                    [80, 58, "#10b981"],
                    [120, 45, "#f59e0b"],
                    [160, 40, "#ef4444"],
                    [200, 32, "#8b5cf6"],
                    [240, 28, "#06b6d4"],
                    [300, 22, "#f43f5e"],
                  ].map(([x, y, color], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill={color}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.8 + i * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />
                  ))}
                </svg>

                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }} className="relative md:col-span-2 md:row-span-2 md:row-start-2 rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden pointer-events-none">
            <div className="relative z-10 space-y-6">
              <h3 className="font-heading text-h3 text-heading font-bold">
                Secure Messaging
              </h3>

              <p className="text-muted-foreground max-w-md ">
                HIPAA-compliant communication between pharmacy staff,
                facilities, and prescribers.
              </p>

              {/* Chat Bubbles */}
              <div className="relative p-4 rounded-2xl border bg-primary/5 mt-12">
                <div className="space-y-4 ">
                  <div className="max-w-[80%] rounded-xl border border-accent p-4 bg-accent/10 text-sm shadow-sm">
                    Missing MAR for patient #2841. Please verify dosage and
                    administration schedule before the next shift.
                  </div>

                  <div className="ml-auto max-w-[80%] rounded-xl border border-yellow-400 bg-yellow-50 p-4 text-sm shadow-sm">
                    Received. Reviewing now. Will update the MAR and notify the
                    nursing staff once confirmed.
                  </div>

                  <div className="mr-auto max-w-[80%] rounded-xl border border-accent p-4 bg-accent/10 text-sm shadow-sm">
                    Thank you very much!
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Message read · 12s ago</span>
                  </div>

                  {/* Extra Info */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span>
                      Follow-up required: Confirm patient #2841 vitals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Card */}
          <motion.div initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }} className="relative md:col-span-2 md:row-span-2 md:row-start-3 rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden pointer-events-none">
            <div className="relative z-10 space-y-6">
              <h3 className="font-heading text-h3 text-heading font-bold">
                AI Automation
              </h3>

              <p className="text-muted-foreground max-w-md">
                Reduce manual work with intelligent workflows that operate
                proactively in the background.
              </p>

              {/* Workflow Steps */}
              <div className="relative p-4 bg-primary/5 rounded-2xl border mt-6">
                <div className=" space-y-4 bg-card border p-4 rounded-2xl shadow-lg">
                  {[
                    {
                      step: "Order received",
                      status: "Completed",
                      bg: "bg-green-50",
                      border: "border-green-200",
                      text: "text-green-700",
                    },
                    {
                      step: "Priority evaluated",
                      status: "High Priority",
                      bg: "bg-yellow-50",
                      border: "border-yellow-200",
                      text: "text-yellow-700",
                    },
                    {
                      step: "Auto-routing applied",
                      status: "Routing to facility",
                      bg: "bg-blue-50",
                      border: "border-blue-200",
                      text: "text-blue-700",
                    },
                    {
                      step: "Refill predicted",
                      status: "Predicted refill date: 2026-02-05",
                      bg: "bg-purple-50",
                      border: "border-purple-200",
                      text: "text-purple-700",
                    },
                    {
                      step: "Order dispatched",
                      status: "In transit",
                      bg: "bg-orange-200",
                      border: "border-orange-200",
                      text: "text-orange-600",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className={`flex items-center justify-between gap-3 rounded-xl p-3 text-sm bg-card border`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="text-heading font-medium">
                          {item.step}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold ${item.bg} ${item.border} ${item.text} p-2 rounded-full`}
                      >
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fourth Card */}
          <motion.div initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }} className="relative md:col-span-2 md:row-span-2  rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden pointer-events-none">
            <div className="relative z-10 space-y-6">
              <h3 className="font-heading text-h3 text-heading font-bold">
                Document Management
              </h3>

              <p className="text-muted-foreground max-w-md">
                Centralized, searchable, and compliant document handling across
                all facilities.
              </p>

<div className="relative p-4 bg-primary/5 rounded-2xl border">
                  {/* File List */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Centralized Storage",
                    desc: "Single repository for prescriptions, MARs, consents, and facility agreements.",
                    icon: Archive,
                  },
                  {
                    title: "Smart Search",
                    desc: "Find documents instantly using patient name, medication, facility, or date.",
                    icon: Search,
                  },
                  {
                    title: "Version Control",
                    desc: "Track document revisions with complete history and restore previous versions.",
                    icon: GitCompare,
                  },
                  {
                    title: "E-Signature Integration",
                    desc: "Digital signature capture for consents and controlled substance receipts.",
                    icon: Signature,
                  },
                ].map((feature, index) => {

                    const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 transition"
                    >
                      <div
                        className={`w-12 h-12 flex items-center bg-primary justify-center rounded-lg ${feature.color}`}
                      >
                        <Icon  className="text-white"/>
                      </div>
                      <h4 className="text-lg font-semibold text-heading">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
</div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
