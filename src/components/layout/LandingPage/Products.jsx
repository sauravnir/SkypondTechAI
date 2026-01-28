import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
// import { Badge } from "../../ui/badge";
import Badge from "@/components/reusable/Badge";
import { ChevronRight, SearchCheck, LayoutGrid, ChartArea } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../../ui/button";
import { ExploreProduct } from "@/components/reusable/Button";

const products = [
  {
    icon: SearchCheck,
    title: "DEA Lookup",
    desc: "Instantly verify DEA numbers with our comprehensive validation tool. Ensure compliance, reduce errors, and streamline your verification process with real-time database access and secure authentication.",
    subLink: "/404Error",
    gradient: "from-[#6366F1] to-[#06B6D4]",
  },
  {
    icon: LayoutGrid,
    title: "Controlled Substance Inventory ",
    desc: "Comprehensive inventory management solution for controlled substances. Track stock levels in real-time, maintain regulatory compliance, automate reporting, and reduce discrepancies with our intuitive tracking system.",
    subLink: "/404Error",
    gradient: "from-[#4e50bd] to-[#6366F1]",
  },
  {
    icon: ChartArea,
    title: "LTC Analytics",
    desc: "Advanced analytics platform for long-term care facilities. Gain actionable insights, optimize medication management, track performance metrics, and make data-driven decisions to improve patient outcomes and operational efficiency.",
    subLink: "/404Error",
    gradient: "from-[#06B6D4] to-[#047d92]",
  },
];

export default function ProductsSection() {
  return (
    <div className="relative bg-background">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <Badge heading={"Our Products"}/>
            <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
              Empowering Pharmacies with Intelligent Technology
            </h1>
            <p className="mt-4 max-w-3xl font-body text-paragraph text-muted">
              From DEA Verification to controlled substance management and
              analytics - everything you need to operate with confidence and
              precision
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-4 max-w-5xl mx-auto mt-24">
          {products.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -20, filter: ["blur(20px)"] }}
                whileInView={{ opacity: 1, y: 0, filter: ["blur(0px)"] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeIn" }}
              >
                <Card className="relative h-full rounded-2xl transition-scale duration-300 bg-card/50 backdrop-blur-3xl overflow-hidden shadow-xl hover:shadow-3xl hover:bg-card flex flex-col">
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-darkprimary" />

                  <CardContent className="relative z-10 p-8 flex flex-col flex-grow ">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl ring-1 ring-white/20 shadow-lg bg-gradient-to-r ${item.gradient}`}
                    >
                      {React.createElement(item.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>

                    <h3 className="font-heading text-h3 font-bold text-heading tracking-tight mt-8">
                      {item.title}
                    </h3>

                    <p className="text-muted text-paragraph leading-relaxed mt-4 flex-grow">
                      {item.desc}
                    </p>
                    <Link to={item.subLink}>
                     <ExploreProduct title="Explore Product" />
                    </Link>
                    
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
