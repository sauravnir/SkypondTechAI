import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion,  } from "framer-motion";

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
    description: "AI-powered verification ensures prescriptions are accurate before dispensing.",
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
    description: "Live dashboards provide instant visibility into pharmacy performance.",
    graphic: RealTime,
  },
]

// Scrolling Effect
// function useScrollActive(count) {
//   const refs = useRef([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
//     );

//     refs.current.forEach((el) => el && observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return { refs, active };
// }

export default function WhyChooseUs() {
  // const { refs, active } = useScrollActive(reasons.length);
  // const ActiveVisual = reasons[active].visual;
  return (
    <section className="relative bg-altbackground">
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="flex flex-col justify-start items-start text-start"
        >
          <MainBadge heading="Why Us" />
          <h1 className="font-heading text-h1 max-w-3xl text-primary-foreground/95 font-bold">
            Why leading LTC Pharmacies choose Skypond
          </h1>
          <p className="mt-4 max-w-xl font-body text-paragraph text-white/80">
            Because long-term care pharmacies need more than software -{" "}
            <span className="text-primary font-bold">they need certainty.</span>
          </p>
        </motion.div>
        
         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 0 - Hero (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section - Top */}
            <div className="relative h-2/3 overflow-hidden">
              <img 
                src={reasons[0].graphic} 
                alt={reasons[0].title} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50" 
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent " /> */}
              {/* Stat Badge */}
              <div className="absolute top-6 right-6 px-6 py-3 bg-primary/20 backdrop-blur-md rounded-2xl shadow-lg border border-primary/30 ring-1 ring-white/10">
                <div className="text-4xl font-bold text-white">99%</div>
                <div className="text-xs text-gray-300 font-medium">Reduction</div>
              </div>
            </div>
            
            {/* Text Section - Bottom */}
            <div className="relative p-8 h-1/3 flex flex-col justify-center bg-gradient-to-b from-gray-900/50 to-gray-900">
              <h3 className="font-heading text-h3 md:text-3xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
                {reasons[0].title}
              </h3>
              <p className="font-body text-paragraph  text-gray-300 mt-2 leading-relaxed">
                {reasons[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5">
              <img 
                src={reasons[1].graphic} 
                alt={reasons[1].title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 " 
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" /> */}
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center bg-gray-900/50">
              <h3 className="font-heading text-paragraph font-bold text-white group-hover:text-primary transition-colors">
                {reasons[1].title}
              </h3>
              <p className="font-body text-paragraph text-gray-300 mt-2 leading-relaxed">
                {reasons[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/5">
              <img 
                src={reasons[2].graphic} 
                alt={reasons[2].title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 " 
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" /> */}
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center bg-gray-900/50">
              <h3 className="font-heading text-paragraph font-bold text-white group-hover:text-primary transition-colors">
                {reasons[2].title}
              </h3>
              <p className="font-body text-paragraph text-gray-300 mt-2 leading-relaxed">
                {reasons[2].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-green-500/10 to-green-600/5">
              <img 
                src={reasons[3].graphic} 
                alt={reasons[3].title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 " 
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" /> */}
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center bg-gray-900/50">
              <h3 className="font-heading text-paragraph font-bold text-white group-hover:text-primary transition-colors">
                {reasons[3].title}
              </h3>
              <p className="font-body text-paragraph text-gray-300 mt-2 leading-relaxed">
                {reasons[3].description}
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative md:col-span-2 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/5">
              <img 
                src={reasons[4].graphic} 
                alt={reasons[4].title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 " 
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" /> */}
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center bg-gray-900/50">
              <h3 className="font-heading text-paragraph font-bold text-white group-hover:text-primary transition-colors">
                {reasons[4].title}
              </h3>
              <p className="font-body text-paragraph text-gray-300 mt-2 leading-relaxed max-w-3xl">
                {reasons[4].description}
              </p>
            </div>
          </motion.div>

        </div>
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center "
        >
          <div className="flex justify-center">
          <PrimaryButton title="See SkypondTech AI in Action" size="lg"/>
        </div>
        </motion.div>
      </div>
    </section>
  );
}


{/* <div className="flex flex-row justify-between mt-24 gap-x-20">
          
          <div className="w-full lg:w-[45%] space-y-24">
            {reasons.map((item, i) => {
              return (
                <div
                  key={item.id}
                  ref={(el) => (refs.current[i] = el)}
                  data-index={i}
                  className={`relative pl-8 p-6 transition-all duration-500 ease-out ${
                    active === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 translate-x-2"
                  }`}
                >
                  
                  <Separator
                    orientation="vertical"
                    className={`absolute left-0 top-1 w-1 h-full rounded-full bg-accent transition-opacity ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <h3 className="font-heading text-h3 font-bold hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body text-paragraph mt-3 text-muted max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          
          <div className="relative hidden lg:block w-[45%] flex-shrink-0">
            <div className="sticky top-32 w-full h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <div className="w-full h-full rounded-3xl bg-card border shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center overflow-hidden">
                    <img
                      src={ReduceError}
                      alt={reasons[active].title}
                      className="max-w-full max-h-full object-contain p-8"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div> */}

        // White section
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 0 - Hero (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-2 md:row-span-2 bg-altbackground rounded-3xl bg-white dark:bg-card border border-gray-200/80 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Section - Top */}
            <div className="relative h-2/3 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              <img 
                src={reasons[0].graphic} 
                alt={reasons[0].title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card via-transparent to-transparent" />
              {/* Stat Badge */}
              <div className="absolute top-6 right-6 px-6 py-3 bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted font-medium">Reduction</div>
              </div>
            </div>
            
            {/* Text Section - Bottom */}
            <div className="relative p-8 h-1/3 flex flex-col justify-center bg-white dark:bg-card">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-heading leading-tight group-hover:text-primary transition-colors">
                {reasons[0].title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted mt-2 leading-relaxed">
                {reasons[0].description}
              </p>
             
            </div>
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl bg-white dark:bg-card border border-gray-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
              <img 
                src={reasons[1].graphic} 
                alt={reasons[1].title} 
                className="w-full h-full object-cover " 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card via-transparent to-transparent" />
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center">
              <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
                {reasons[1].title}
              </h3>
              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                {reasons[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative rounded-2xl bg-white dark:bg-card border border-gray-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10">
              <img 
                src={reasons[2].graphic} 
                alt={reasons[2].title} 
                className="w-full h-full object-cover " 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card via-transparent to-transparent" />
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center">
              <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
                {reasons[2].title}
              </h3>
              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                {reasons[2].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-2xl bg-white dark:bg-card border border-gray-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
              <img 
                src={reasons[3].graphic} 
                alt={reasons[3].title} 
                className="w-full h-full object-cover " 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card via-transparent to-transparent" />
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center">
              <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
                {reasons[3].title}
              </h3>
              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                {reasons[3].description}
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative md:col-span-2 rounded-2xl bg-white dark:bg-card border border-gray-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10">
              <img 
                src={reasons[4].graphic} 
                alt={reasons[4].title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card via-transparent to-transparent" />
            </div>
            
            {/* Text Section */}
            <div className="p-6 h-[45%] flex flex-col justify-center">
              <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
                {reasons[4].title}
              </h3>
              <p className="font-body text-sm text-muted mt-2 leading-relaxed max-w-3xl">
                {reasons[4].description}
              </p>
            </div>
          </motion.div>

        </div>