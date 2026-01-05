import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  ChevronRight,
  CircleCheck,
  ClockCheck,
  Shield,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Logo from "@/assets/media/logosymbol.png";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import GetStartedForm from "../reusable/GetStartedForm";

export default function RecallSection() {
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
    { id: 1, icon: Logo, fallback: "SP" },
    { id: 2,icon: Logo, fallback: "AI" },
    { id: 3,icon: Logo, fallback: "RX" },
    { id: 4,icon: Logo, fallback: "PH" },
    { id: 5,icon: Logo, fallback: "LT" },
    { id: 6,icon: Logo, fallback: "24" },
  ];
  return (
    <section className="relative overflow-hidden bg-altbackground">
      <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="font-heading text-h1 max-w-5xl text-white font-bold">
            <span className="text-primary">Transform</span> Your Pharmacy
            Operations <span className="text-primary">Today</span>
          </h1>
          <p className="mt-3 max-w-3xl font-body text-paragraph text-muted">
            See how leading LTC pharmacies are reducing manual work, eliminating
            errors, and driving measurable growth with{" "}
            <span className="font-bold text-accent">Skypond AI</span> .
          </p>
        </div>

        <div className="max-w-xl mx-auto my-12 px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
    {/* Avatar Stack */}
    <div className="flex justify-center mb-6 md:mb-0">
      <div className="flex items-center -space-x-5">
        {avatars.map((item, idx) => (
          <Avatar
            key={item.id}
            className="
              h-14 w-14
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
                src={Logo}
                alt="partners"
                className="h-14 w-auto bg-altbackground"
              />
            ) : null}
            <AvatarFallback className="bg-muted text-xs font-semibold">
              {item.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center text-center md:text-left">
      <h1 className="font-body text-accent text-lg md:text-xl">
        Join hundreds of pharmacy leaders
      </h1>
      <h2 className="font-body text-muted text-sm md:text-base mt-2">
        already shaping the future of healthcare operations.
      </h2>
    </div>
  </div>
</div>


        <div className="flex flex-wrap gap-6 justify-center mt-8 pointer-events-auto">
          <div className="group">
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="default"
                  className="text-[15px] font-body rounded-full text-heading bg-primary  border-accent hover:bg-primary-foreground"
                  size="lg"
                >
                  Get Started for FREE
                  <span className="transition-transform duration-300 group-hover:scale-125">
                    <ChevronRight strokeWidth={2.75} />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
                <GetStartedForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="group">
            <Link
              to="https://meetings-na2.hubspot.com/ramesh-kc?hsCtaAttrib=259620249274&uuid=082c0e40-466f-47c6-864d-ef27eed1a791"
              target="_blank"
            >
              <Button
                variant="outline"
                className="text-[15px] font-body rounded-full text-heading bg-accent  border-accent hover:bg-primary-foreground"
                size="lg"
              >
                Schedule a Demo
                <span className="transition-transform duration-300 group-hover:scale-125">
                  <ChevronRight strokeWidth={2.75} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start mt-12 md:mt-12 gap-4">
          {advList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center  gap-2">
                <span>
                  <Icon className={`w-4  ${item.color}`} />
                </span>{" "}
                <h1 className="font-ui text-white text-paragraph">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
