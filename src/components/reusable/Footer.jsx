import React from "react";
import {
  ChevronRight,
  Minus,
  ExternalLink,
  Copyright,
  CircleSmall,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import Logo from "@/assets/media/1.png";
import { Item } from "@radix-ui/react-navigation-menu";

const Footer = () => {
  const footerItems = [
    {
      title: "Solutions",
      link: "#",
      subItem: [
        {
          title: "Document Automation",
          link: "/404Error",
        },
        {
          title: "Order Entry",
          link: "/404Error",
        },
        {
          title: "AI Copilot",
          link: "/404Error",
        },
        {
          title: "Workflow Intelligence",
          link: "/404Error",
        },
      ],
    },
    {
      title: "Products",
      link: "#",
      subItem: [
        {
          title: "DEA Lookup",
          link: "/404Error",
        },
        {
          title: "Control Substance Inventory App",
          link: "/404Error",
        },
        {
          title: "LTC Analysis",
          link: "/404Error",
        },
      ],
    },
    {
      title: "Trust and Security",
      link: "#",
      subItem: [
        {
          title: "HIPAA Compliance",
          link: "/404Error",
        },
        { title: "Security", link: "/404Error" },
        { title: "Privacy", link: "/404Error" },
        { title: "Terms and Conditions", link: "/404Error" },
      ],
    },
    {
      title: "Company",
      link: "#",
      subItem: [
        {
          title: "Main Site",
          link: "https://www.skypondtech.com",
        },
        { title: "About", link: "/404Error" },
        { title: "Contact", link: "/404Error" },
        { title: "Blog", link: "/404Error" },
      ],
    },
  ];
  return (
    <footer className="relative overflow-hidden bg-altbackground pt-20 pb-10 z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Footer Contents */}
        {footerItems.map((column) => (
          <div key={column.title} className="space-y-4">
            <h2 className="font-base text-paragraph text-primary-foreground">
              {column.title}
            </h2>
            <ul className=" space-y-2">
              {column.subItem.map((item) => (
          <li key={item.title}>
            <div className="flex flex-row max-w-5xl justify-start items-center  gap-2">
                 <CircleSmall strokeWidth={2.75} size={15} className="text-muted"/>
            {item.link.startsWith("http") ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" font-body text-muted text-[16px] hover:underline "
              >
                {item.title}
              </a>
            ) : (
              <Link
                to={item.link}
                className="font-body text-muted text-[16px] hover:underline"
              >
                {item.title}
              </Link>
            )}
            </div>
           
          </li>
        ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Company Section */}
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 gap-12 lg:gap-0">
        <div className="flex flex-col flex-shrink-0 items-center lg:items-start text-center lg:text-left gap-4">
          <Link to="/">
            <img src={Logo} alt="SkypondTech.AI" className="h-20 w-auto" />
          </Link>

          <p className="max-w-sm font-body text-muted text-sm">
            Transforming long-term care pharmacy with enterprise-grade AI
            solutions designed for healthcare excellence and HIPAA compliance.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto lg:mt-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link to="https://www.instagram.com/skypondtech/" target="_blank">
              <FaInstagram size={30} color="white" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/skypond-tech-llc/"
              target="_blank"
            >
              <FaLinkedin size={30} color="white" />
            </Link>
          </div>

          <Separator className="w-full lg:w-auto" />

          {/* Copyright + Info */}
          <div className="flex flex-col items-center lg:items-end gap-2 text-muted text-sm font-body">
            <div className="flex flex-row gap-2 items-center">
              <Copyright size={15} />
              <span>
                {new Date().getFullYear()} Skypond AI. All rights reserved.
              </span>
            </div>
            <div className="text-center lg:text-right">
              Built for healthcare. Enterprise Grade. HIPAA Compliant. SOC 2
              Type II Certified.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
