import React, { useEffect, useState } from "react";
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

export default function MainStats ({id}){
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

  // Resetting the stats animation after every 15 sec

  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLimit((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="relative overflow-hidden ">
      <div className="flex flex-col px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28 items-center">
        {/* <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" /> */}
        <div className="absolute  -bottom-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>
        {/* <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-2xl pointer-events-none"></div> */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none"/>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 gap-x-8 max-w-6xl mt-12 md:mt-16">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col border border-accent items-center space-y-4 p-4 bg-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group animate-float"
              >
                {/* Floating Icon Circle */}
                <div
                  className={`absolute left-4 -top-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-accent shadow-lg`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Big Number */}
                <div className="mt-6 font-heading text-h2 font-extrabold text-heading flex items-baseline gap-1">
                  <NumberTicker
                  key={limit}
                    value={item.value}
                    duration={4000}
                    steps={100}
                  />
                  {item.suffix && (
                    <span className="font-body text-paragraph text-accent">
                      {item.suffix}
                    </span>
                  )}
                </div>

                {/* Divider/ */}
                <Separator className="w-14 h-1 bg-primary"/>

                {/* Label */}
                <p className="text-center font-body font-medium sm:text-small md:text-small lg:text-small text-muted mt-2 px-2">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 grid gap-6 md:gap-10">
          {testimonial.map((item, index) => (
            <motion.div
              key={index}
              className={`
                        relative flex flex-col
    p-5 md:p-8
    gap-4
    backdrop-blur-xl
    border border-accent
    rounded-3xl
    shadow-lg hover:shadow-2xl
    transition-all duration-500
      `}
            >
              {/* Left: Icon + Head */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-darkaccent shadow-lg text-white">
                  {item.icon}
                </div>
                <div className="flex flex-col space-y-2 text-center md:text-left">
                  <h2 className="font-heading text-heading text-h3 font-bold">
                    {item.head}
                  </h2>
                  <span className="font-body text-paragraph  text-muted">
                    {item.sub}
                  </span>
                </div>
              </div>

              {/* Right: Body + Advantages */}
              <div className="flex-1 flex flex-col gap-4 text-justify mt-6 md:mt-0">
                <p className="font-body md:text-paragraph text-heading text-left md:text-justify">
                  {item.body}
                </p>
                <ul className="flex flex-col sm:flex-row mt-4 gap-3 sm:gap-4 list-none items-start sm:items-center justify-center">
                  {item.advantages.map((adv, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 "
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <CheckCircle
                        className=" text-darkaccent flex-shrink-0"
                        size={18}
                      />
                      <span className="font-body text-button text-heading font-medium ">
                        {adv}
                       
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="group items-center justify-center p-2 mt-8 md:mt-4">
          <h1 className="font-body text-sm md:text-paragraph text-heading text-center font-bold md:font-normal lg:font-normal">
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
        </div>
      </div>
    </section>
  );
}
