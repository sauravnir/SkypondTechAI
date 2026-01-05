import React from "react";
import { ChevronRight, Minus, ExternalLink, Copyright } from "lucide-react";
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

const Footer = () => {
  const solutionMenu = [
    {
      title: "Document Automation",
      link: "#",
    },
    {
      title: "Order Entry",
      link: "#",
    },
    {
      title: "AI Copilot",
      link: "#",
    },
    {
      title: "Workflow Intelligence",
      link: "#",
    },
  ];

  const companyMenu = [
    {
      title: "Main Site",
      link: "#",
    },
    { title: "About", link: "#" },
    { title: "Contact", link: "#" },
    { title: "Blog", link: "#" },
  ];

  const trustSecurity = [
    {
      title: "HIPAA Compliance",
      link: "#",
    },
    { title: "Security", link: "#" },
    { title: "Privacy", link: "#" },
    { title: "Terms and Conditions", link: "#" },
  ];
  return (
    <footer className="relative overflow-hidden bg-altbackground pt-20 pb-10 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-0 ">
        {/* Solutions Section */}
        <div className="flex flex-col items-start gap-4">
          <span
            variant="ghost"
            className="font-heading text-[20px] text-primary-foreground font-bold "
          >
            Solutions
          </span>
          <Separator orientation="horizontal" className="w-20" />

          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4 items-start mt-8">
              {solutionMenu.map((items, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={items.link}
                      className="flex font-body text-muted text-[16px] hover:underline gap-2 "
                    >
                      <Minus /> {items.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Trust and Security Section*/}
        <div className="flex flex-col items-start gap-4">
          <span className="font-heading text-[20px] text-primary-foreground font-bold ">
            Trust and Security
          </span>
          <Separator orientation="horizontal" className="w-20" />

          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4 items-start mt-8">
              {trustSecurity.map((items, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={items.link}
                      className="flex font-body text-muted text-[16px] hover:underline gap-2"
                    >
                      <Minus /> {items.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-start gap-4">
          <span className="font-heading text-[20px] text-primary-foreground font-bold ">
            Company
          </span>
          <Separator orientation="horizontal" className="w-20" />

          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4 items-start mt-8">
              {companyMenu.map((items, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={items.link}
                      className="flex font-body text-muted text-[16px] hover:underline gap-2"
                    >
                      <Minus />
                      {items.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
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
        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
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
