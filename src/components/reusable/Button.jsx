import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
export function PrimaryButton({ title, size }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size={size}
          className="group text-[15px] shadow-lg rounded-full flex items-center gap-1"
        >
          {title}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            <ChevronRight strokeWidth={2.75} />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}

export function SecondaryButton({ title, size }) {
  return (
    <div className="group">
      <Link to="https://skypondtech.com" target="_blank">
        <Button
          variant="outline"
          className="text-[15px] font-body shadow-sm rounded-full text-heading bg-white hover:text-accent"
          size={size}
        >
          {title}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            <ArrowUpRight strokeWidth={2.75} />
          </span>
        </Button>
      </Link>
    </div>
  );
}

export function ScheduleDemoButton({ title, size }) {
  return (
    <div className="group ">
      <Link
        to="https://meetings-na2.hubspot.com/ramesh-kc?hsCtaAttrib=259620249274&uuid=082c0e40-466f-47c6-864d-ef27eed1a791"
        target="_blank"
      >
        <Button
          variant="default"
          className="rounded-full text-[15px] bg-primary font-body hover:bg-altbackground/90 text-primary-foreground"
          size={size}
        >
          {title}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            <ChevronRight strokeWidth={2.75} />
          </span>
        </Button>
      </Link>
    </div>
  );
}

export function RequestDemo({ title, size }) {
  return (
    <div className="group ">
      <Link
        to="https://meetings-na2.hubspot.com/ramesh-kc?hsCtaAttrib=259620249274&uuid=082c0e40-466f-47c6-864d-ef27eed1a791"
        target="_blank"
      >
        <Button
          variant="outline"
          className="rounded-full text-[15px] bg-white shadow-lg font-body text-heading hover:text-accent"
          size={size}
        >
          {title}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            <ChevronRight strokeWidth={2.75} />
          </span>
        </Button>
      </Link>
    </div>
  );
}

export function ExploreProduct({ title }) {
  return (
    <Button
      variant="default"
      size="sm"
      className="group font-body text-[15px] text-primary-foreground font-bold rounded-full mt-12"
    >
      {title}
      <ChevronRight
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125"
        strokeWidth={2.75}
      />
    </Button>
  );
}
