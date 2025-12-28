import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const DURATION = 5000; // auto-rotate (optional)

export default function SplitTimelineServices({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // Optional auto-rotation
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleSelect = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
        {/* ================= LEFT TIMELINE ================= */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

          <ul className="space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <li
                  key={service.id}
                  onClick={() => handleSelect(index)}
                  className="relative cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Dot */}
                    <div className="relative z-10">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                          isActive
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={
                            isActive ? "text-primary" : "text-muted"
                          }
                        />
                      </span>
                    </div>

                    {/* Label */}
                    <div>
                      <p
                        className={`text-sm transition-colors ${
                          isActive
                            ? "text-heading font-medium"
                            : "text-muted"
                        }`}
                      >
                        {service.title}
                      </p>

                      {isActive && (
                        <motion.div
                          className="mt-2 h-[2px] w-10 bg-primary rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transformOrigin="left"
                        />
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={services[activeIndex].id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Card className="rounded-3xl bg-card shadow-xl">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        {React.createElement(
                          services[activeIndex].icon,
                          {
                            className: "w-6 h-6 text-primary",
                          }
                        )}
                      </div>

                      <div>
                        <h3 className="font-heading text-h2 font-bold text-heading">
                          {services[activeIndex].title}
                        </h3>
                        <p className="mt-3 text-paragraph text-muted">
                          {services[activeIndex].body}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {services[activeIndex].features.map(
                        (feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.15 + i * 0.07,
                            }}
                          >
                            <CheckCircle
                              size={18}
                              className="text-primary mt-1"
                            />
                            <span className="text-paragraph text-muted">
                              {feature}
                            </span>
                          </motion.li>
                        )
                      )}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary/10"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
