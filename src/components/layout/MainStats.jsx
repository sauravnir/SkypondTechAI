import React from "react";
import {
  Hourglass,
  TrendingUp,
  ChartColumnBig,
  Infinity,
  CircleUser,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NumberTicker } from "../ui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import { Highlighter } from "../ui/highlighter";
import "@/index.css";

export default function MainStats() {
  const stats = [
    {
      icon: Hourglass,
      value: 75,
      suffix: "%",
      gradient: "from-amber-400 to-orange-500",
      body: "Time Saved on Manual Tasks",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
       gradient: "from-blue-400 to-blue-600",
      body: "Accuracy Improvement",
    },
    {
      icon: ChartColumnBig,
      value: 500,
      prefix: "$",
      suffix: "K+",
      gradient: "from-emerald-400 to-teal-500",
      body: "Annual Savings per Facility",
    },
    {
      icon: Infinity,
      value: 24,
      suffix: "/7",
      gradient: "from-purple-400 to-pink-500",
      body: "Continuous Operation",
    },
  ];

  const testimonial = [
    {
      icon: <CircleUser />,
      head: "Director of Pharmacy Operations",
      sub: "100-Facility Regional LTC Network",
      body: "Skypond AI didn't just reduce our operational burden—it fundamentally transformed how we work. We cut order entry time by 80%, eliminated nearly all manual data entry errors, and saved almost $750,000 in the first year alone. More importantly, our pharmacy teams now focus on patient care instead of administrative tasks. This is exactly what modern long-term care pharmacy needed.",
      advantages: [
        "80% faster order processing",
        "$750+ first-year savings",
        "99%+ accuracy maintained",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden ">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 items-center">
        {/* <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" /> */}
        {/* <div className="absolute  -bottom-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div> */}
        {/* <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-2xl pointer-events-none"></div> */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <Badge
            variant="outline"
            className="font-ui text-[14px] bg-card text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-2 "
          >
            Our Achievements
          </Badge>
          <h1 className="font-heading text-h1 max-w-4xl text-heading font-bold">
            Real Impact, Measurable Results
          </h1>
          <p className="mt-3 max-w-3xl font-body text-paragraph text-muted">
            Proven outcomes from leading LTC pharmacies using Skypond AI to
            transform operations
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 gap-x-8 max-w-6xl mt-16">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center space-y-4 p-4 bg-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group animate-float"
              >
                {/* Floating Icon Circle */}
                <div className={`absolute left-2 -top-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} shadow-md`}>
                  <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Big Number */}
                <div className="font-heading text-h2 font-extrabold text-heading flex items-baseline space-x-1">
                  <NumberTicker
                    value={item.value}
                    duration={4000}
                    steps={100}
                  />
                  {item.suffix && (
                    <span className="font-body text-paragraph text-primary">
                      {item.suffix}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mt-2" />

                {/* Label */}
                <p className="text-center font-body sm:text-small md:text-small lg:text-small text-muted mt-2 px-2">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
        <div className="relative max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 grid gap-10">
          {testimonial.map((item, index) => (
            <motion.div
              key={index}
              className={`
       relative flex flex-col p-8 gap-4 
  hover:shadow-2xl duration-500
  backdrop-blur-xl border border-accent rounded-3xl shadow-xl transform-transition hover:scale-105 duration-400
      `}
            >
              {/* Left: Icon + Head */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-lg text-white">
                  {item.icon}
                </div>
                <div className="flex flex-col space-y-2 text-center md:text-left">
                  <h2 className="font-heading text-heading text-h3 font-bold">
                    {item.head}
                  </h2>
                  <span className="font-body text-sm text-muted">
                    {item.sub}
                  </span>
                </div>
              </div>

              {/* Right: Body + Advantages */}
              <div className="flex-1 flex flex-col gap-4 text-justify mt-6 md:mt-0">
                <p className="font-body text-paragraph text-heading">
                  {item.body}
                </p>
                <ul className="flex mt-4 gap-4 list-none justify-center items-center">
                  {item.advantages.map((adv, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 "
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <CheckCircle
                        className=" text-accent flex-shrink-0"
                        size={18}
                      />
                      <span className="font-body text-button font-medium text-accent ">
                        {adv}
                        <Separator orientation="" />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="group items-center justify-center p-2 mt-4">
          <h1 className="font-body text-button text-heading font-medium">
            <Highlighter action="underline" color="#5391f4ff">Transform operations. Save time. Achieve more.</Highlighter>
            <Link to="/">
              <Button
                variant="link"
                className="font-body text-[15px] transform-transition"
              >
                Get started
                <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                  <ChevronRight strokeWidth={2.75} />
                </span>
              </Button>
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
}
