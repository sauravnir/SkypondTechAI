import MainBadge from "@/components/reusable/Badge";
import { motion } from "motion/react";

const features = [
  {
    title: "Intelligent Validation",
    description:
      "Automatic checksum verification using official DEA algorithm to detect invalid numbers before they cause compliance issues",
    stat: "100%",
    statLabel: "Accuracy",
  },
  {
    title: "Automated Audit Reports",
    description:
      "Generate comprehensive compliance reports for regulatory inspections with complete verification history and timestamps",
  },
  {
    title: "Batch Validation",
    description:
      "Validate hundreds of DEA numbers simultaneously for facility onboarding or periodic compliance audits",
  },
  {
    title: "Secure Authentication",
    description:
      "HIPAA-compliant, encrypted data storage with complete audit trails for all lookups",
  },
];

const ExpandedFeatures = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="flex flex-col justify-center items-center text-center"
        >
          <MainBadge heading="Features" />
          <h1 className="font-heading text-h1 max-w-7xl text-heading font-bold">
            Powerful features for complete compliance
          </h1>
          <p className="mt-4 max-w-5xl font-body text-paragraph text-muted">
            Everything you need to streamline DEA verification and maintain
            regulatory compliance.
          </p>
        </motion.div>
        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2 md:p-10 border mt-16 rounded-2xl bg-darkprimary shadow-lg "
        >
          {/* First Card */}
          <div className="relative md:col-span-1 md:row-span-1 rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden">
            <div className="relative z-10 ">
              <h3 className="font-heading text-h3 hover:text-primary transition-colors duration-200 font-bold mb-6">
                {features[0].title}
              </h3>

              <p className="font-body text-paragraph text-muted mb-8">
                {features[0].description}
              </p>
              {/* Card Design */}
              <div className="p-6 shadow-2xl rounded-2xl border bg-background/80 backdrop-blur pointer-events-none">
                <label className="block text-paragraph font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Enter DEA Number
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value="AB1234563"
                    readOnly
                    className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-mono text-xl tracking-widest cursor-default"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  disabled
                  className="w-full mt-4 px-2 py-2 bg-primary text-button text-white font-bold rounded-xl shadow-lg cursor-default opacity-90"
                >
                  Verify with Official Algorithm
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative md:col-span-2 md:row-span-1 rounded-2xl border bg-card p-8 shadow-xl hover:shadow-2xl transition overflow-hidden">
          
            <h3 className="font-heading text-h3 font-bold mb-4 hover:text-primary transition-colors duration-200">
              {features[1].title}
            </h3>
            <p className="font-body text-paragraph text-muted">
              {features[1].description}
            </p>
            {/* Card Design */}
            <div className=" p-6 rounded-2xl border bg-background/80 backdrop-blur shadow-2xl   mt-8">
              <h4 className="font-semibold text-paragraph block text-gray-700 dark:text-gray-300 mb-4">
                Audit Report Summary
              </h4>

              <div className="space-y-3 border p-4 rounded-2xl bg-card ">
                <div className="flex justify-between text-small border-b pb-2">
                  <span className="text-muted-foreground font-medium">
                    Report ID
                  </span>
                  <span className="font-mono">DEA-APR-0924</span>
                </div>

                <div className="flex justify-between text-small border-b pb-2">
                  <span className="text-muted-foreground font-medium">
                    Verified Records
                  </span>
                  <span className="font-semibold text-green-600">248</span>
                </div>

                <div className="flex justify-between text-small pb-2">
                  <span className="text-muted-foreground font-medium">
                    Failed Checks
                  </span>
                  <span className="font-semibold text-red-500">2</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                  Compliant
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-medium">
                  Timestamped
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative overflow-hidden rounded-3xl border md:col-span-2 md:row-span-1 bg-card p-8 shadow-xl hover:shadow-2xl transition">
            
            <h3 className="font-heading text-h3 font-bold mb-4  hover:text-primary transition-colors duration-200">
              {features[2].title}
            </h3>
            <p className="font-body text-paragraph text-muted">
              {features[2].description}
            </p>
            <div className="p-6 rounded-2xl border bg-background/80 backdrop-blur shadow-2xl  pointer-events-none mt-14">
              <h4 className="font-semibold text-paragraph block text-gray-700 dark:text-gray-300 mb-4">
                Batch Validation
              </h4>

              <div className="space-y-2">
                {[
                  { dea: "AB1234563", status: "Valid" },
                  { dea: "BM9876541", status: "Valid" },
                  { dea: "CX4567890", status: "Invalid" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl border bg-card"
                  >
                    <span className="font-mono text-small tracking-wider">
                      {item.dea}
                    </span>

                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.status === "Valid"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="md:col-span-1 md:row-span-1 rounded-3xl border bg-card p-8 shadow-xl hover:shadow-2xl transition">
            <h3 className="font-heading text-h3 font-bold mb-4  hover:text-primary transition-colors duration-200">
              {features[3].title}
            </h3>
            <p className="font-body text-paragraph text-muted">
              {features[3].description}
            </p>
            <div className="p-6 rounded-2xl border bg-background/80 backdrop-blur shadow-2xl  pointer-events-none mt-8">
              <h4 className="font-semibold text-paragraph block text-gray-700 dark:text-gray-300 mb-4">
                Security & Audit Trail
              </h4>

              <div className="space-y-3 text-small p-4 border rounded-2xl bg-card">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">
                    Encryption
                  </span>
                  <span className="font-semibold">AES-256</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">
                    Access Logs
                  </span>
                  <span className="font-semibold text-green-600">Enabled</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground font-medium">
                    Last Access
                  </span>
                  <span className="font-mono text-xs">2026-01-31 14:22</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-green-500/10 text-green-600 text-xs font-medium px-3 py-2 text-center">
                HIPAA Compliant & Fully Audited
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default ExpandedFeatures;
