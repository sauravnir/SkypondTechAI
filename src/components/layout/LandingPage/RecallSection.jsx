import React from "react";
import { CircleCheck, ClockCheck, Shield } from "lucide-react";
import { PrimaryButton, RequestDemo } from "@/components/reusable/Button";

export default function RecallSection({ id }) {
  const advList = [
    {
      icon: CircleCheck,
      color: "text-emerald-300",
      title: "No credit card required",
    },
    {
      icon: ClockCheck,
      color: "text-blue-300",
      title: "Free access for 14 days",
    },
    {
      icon: Shield,
      color: "text-violet-300",
      title: "Enterprise-grade security & compliance included",
    },
  ];

  return (
    <section id={id} className="relative overflow-hidden bg-altbackground">
      <div className="flex flex-col  mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="font-heading text-h1 max-w-5xl text-white font-bold">
            <span className="text-primary">Transform</span> Your Pharmacy
            Operations <span className="text-primary">Today</span>
          </h1>
          <p className="mt-3 max-w-5xl font-body text-paragraph text-muted">
            See how leading LTC pharmacies are reducing manual work, eliminating
            errors, and driving measurable growth with{" "}
            <span className="">Skypond AI</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-8 pointer-events-auto">
          <PrimaryButton title="Get Started For FREE" size="lg" />
          <RequestDemo title="Schedule A Demo" size="lg" />
        </div>
        <div className="max-w-xl mx-auto mt-12 px-4 sm:px-6">
          <div className="flex flex-row items-center gap-6">
            

            {/* Text */}
            <div className="flex flex-row justify-center text-center md:text-center">
              <h1 className="font-body text-accent text-lg md:text-xl">
                Join hundreds of pharmacy leaders already shaping the future of
                healthcare operations.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start mt-12 md:mt-12 gap-4">
          {advList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center  gap-2">
                <span>
                  <Icon className={`w-4  ${item.color}`} />
                </span>
                <h1 className="font-ui text-muted text-small ">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
