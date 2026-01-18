import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  ChevronRight,
  CircleCheck,
  ClockCheck,
  Shield,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import Avatar1 from "@/assets/media/avatar1.jpg"
import Avatar2 from "@/assets/media/avatar2.jpg"
import Avatar3 from "@/assets/media/avatar3.jpg"
import Avatar4 from "@/assets/media/avatar4.jpg"
import Avatar5 from "@/assets/media/avatar5.jpg"


import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../ui/dialog";
import ContactForm from "../../reusable/ContactForm";
import { PrimaryButton, RequestDemo, SecondaryButton } from "@/components/reusable/Button";

export default function RecallSection({id}) {
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

  const avatars = [
    { id: 1, icon: Avatar1, fallback: "CL1" },
    { id: 2,icon: Avatar2, fallback: "CL2" },
    { id: 3,icon: Avatar3, fallback: "CL3" },
    { id: 4,icon: Avatar4, fallback: "CL4" },
    { id: 5,icon: Avatar5, fallback: "CL5" },
  ];
  return (
    <section id={id} className="relative overflow-hidden bg-altbackground">
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="font-heading text-h1 max-w-5xl text-white font-bold">
            <span className="text-primary">Transform</span> Your Pharmacy
            Operations <span className="text-primary">Today</span>
          </h1>
          <p className="mt-3 max-w-3xl font-body text-paragraph text-muted">
            See how leading LTC pharmacies are reducing manual work, eliminating
            errors, and driving measurable growth with{" "}
            <span className="">Skypond AI</span> .
          </p>
        </div>

        
        <div className="flex flex-wrap gap-6 justify-center mt-16 pointer-events-auto">
         
          <PrimaryButton title="Get Started For FREE" size="lg"/>
          <RequestDemo title="Schedule A Demo" size="lg" />
        </div>
        <div className="max-w-xl mx-auto mt-12 px-4 sm:px-6">
  <div className="flex flex-row items-center gap-6">
    {/* Avatar Stack */}
    {/* <div className="flex justify-center mb-6 md:mb-0">
      <div className="flex items-center -space-x-5">
        {avatars.map((item, idx) => (
          <Avatar
            key={item.id}
            className="
              h-12 w-12
              border-2 border-background
              shadow-sm
              transition-transform
              duration-200
              hover:scale-105
              hover:z-10
              
            "
            style={{ zIndex: avatars.length - idx }}
          >
            {item.icon ? (
              <img
                src={item.icon}
                alt="partners"
                className="relative h-16 bg-altbackground"
              />
            ) : null}
            <AvatarFallback className="bg-muted text-xs font-semibold">
              {item.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div> */}

    {/* Text */}
    <div className="flex flex-row justify-center text-center md:text-center">
      <h1 className="font-body text-accent text-lg md:text-xl">
        Join hundreds of pharmacy leaders already shaping the future of healthcare operations.
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
