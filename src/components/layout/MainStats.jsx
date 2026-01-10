import React, { useEffect, useState } from "react";
import {
  Hourglass,
  TrendingUp,
  ChartColumnBig,
  Infinity,
} from "lucide-react";
import { NumberTicker } from "../ui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Marquee } from "../ui/marquee";
import Testimonials from "../reusable/Testimonials";

import "@/index.css";

const testimonialsData = [
  {
    id: 1,
    icon: "SM",
    head: "Sarah Mitchell",
    sub: "Director of Pharmacy Operations",
    body: '"Skypond AI transformed how we work. We cut order entry time by 80% and saved almost $750,000 in the first year. Our pharmacy teams now focus on patient care instead of administrative tasks."',
    gradient: "from-blue-500 to-cyan-500",
  },

  {
    id: 2,
    icon: "JC",
    head: "Dr. James Chen",
    sub: "Chief Clinical Pharmacist",
    body: '"Implementing Skypond AI was the smartest technology decision we\'ve made. Prescription intake is now seamless and reliable. We expanded to 30 new facilities without hiring additional order entry staff."',
    gradient: "from-purple-500 to-pink-500",
  },

  {
    id: 3,
    icon: "MR",
    head: "Maria Rodriguez",
    sub: "Pharmacy Compliance Officer",
    body: '"We were hesitant about AI due to regulatory concerns. Skypond removed that fear with healthcare-grade security, audit trails, and automated checks that keep us continuously compliant."',
    gradient: "from-green-500 to-emerald-500",
  },

  {
    id: 4,
    icon: "DT",
    head: "David Thompson",
    sub: "Operations Manager",
    body: '"Before Skypond, our team spent hours retyping prescriptions. Now the AI handles the heavy lifting. Staff burnout dropped dramatically, and overtime costs are almost gone."',
    gradient: "from-orange-500 to-red-500",
  },

  {
    id: 5,
    icon: "JP",
    head: "Jennifer Park",
    sub: "Owner & Managing Partner",
    body: '"As an independent pharmacy, we needed enterprise power without complexity. Skypond AI delivered exactly that. The automation paid for itself within months."',
    gradient: "from-indigo-500 to-blue-500",
  },

  {
    id: 6,
    icon: "MS",
    head: "Michael Stevens",
    sub: "Head of Data & Analytics",
    body: '"The real magic is visibility. Skypond dashboards give us real-time insight into intake speed, error trends, and workforce efficiency. It feels like our pharmacy grew a digital brain."',
    gradient: "from-teal-500 to-cyan-500",
  },

  {
    id: 7,
    icon: "RJ",
    head: "Rebecca Johnson",
    sub: "Regional Implementation Lead",
    body: '"We operate in areas where hiring trained technicians is tough. Skypond solved that challenge. The AI processes orders 24/7 with no downtime while we support rapid regional growth."',
    gradient: "from-rose-500 to-pink-500",
  },
];

const stats = [
  {
    icon: Hourglass,
    value: 75,
    suffix: "%",

    body: "Time Saved on Manual Tasks",
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",

    body: "Accuracy Improvement",
  },
  {
    icon: ChartColumnBig,
    value: 500,
    prefix: "$",
    suffix: "K+",

    body: "Annual Savings per Facility",
  },
  {
    icon: Infinity,
    value: 24,
    suffix: "/7",

    body: "Continuous Operation",
  },
];

export default function MainStats({ id }) {
  // Resetting the stats animation after every 15 sec

  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLimit((prev) => prev + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Slicing the TestimonialData into two to display separate rows
  // const firstRow = testimonialsData.slice(0, testimonialsData.length / 2);
  // const secondRow = testimonialsData.slice(testimonialsData.length / 2);
  return (
    <section id={id} className="relative overflow-hidden bg-background">
      <div className="flex flex-col py-20 items-center">
        {/* <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" /> */}
        <div className="absolute  -bottom-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>
        {/* <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-2xl pointer-events-none"></div> */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="flex flex-col justify-center items-center text-center ">
            <Badge
              variant="outline"
              className="font-ui text-[14px] bg-card text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-8 "
            >
              Our Achievements
            </Badge>
            <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
              Real Impact, Measurable Results
            </h1>
            <p className="mt-4 max-w-3xl font-body text-paragraph text-muted">
              Proven outcomes from leading LTC pharmacies using Skypond AI to
              transform operations
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0,}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 gap-x-8 max-w-6xl mt-12 md:mt-16">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-muted/20"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon with gradient background */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

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

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
{/* Testimonials */}
        <div className="relative flex w-full flex-col cursor-pointer items-center justify-center overflow-hidden mt-20 p-4 gap-8 ">
          <Marquee pauseOnHover className="[--duration:50s] ">
            {testimonialsData.map((item) => (
              <div key={item.id} className="px-1">
                <Testimonials {...item} />
              </div>
            ))}
          </Marquee>
          {/* <Marquee reverse className="[--duration:50s]">
            {secondRow.map((item) => (
              <div key={item.id} className="px-1">
                <Testimonials {...item} />
              </div>
            ))}
          </Marquee> */}

          <div className="from-background pointer-events-none absolute inset-y-0 -left-24 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 -right-24 w-1/4 bg-gradient-to-l"></div>
        </div>

        {/* <div className="group items-center justify-center p-2 mt-8 md:mt-4">
          <h1 className="font-body text-sm md:text-button text-heading text-center font-bold md:font-bold lg:font-bold">
            Transform operations. Save time. Achieve more.
            <Link to="/">
              <Button
                variant="ghost"
                className="font-body text-primary text-[15px] transform-transition hover:text-altbackground/90"
              >
                Contact us
                <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                  <ChevronRight strokeWidth={2.75} />
                </span>
              </Button>
            </Link>
          </h1>
        </div> */}
      </div>
    </section>
  );
}


