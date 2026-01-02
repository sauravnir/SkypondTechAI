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
      <div className="grid grid-cols-3 gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-0 ">
        {/* Solutions Section */}
        <div className="flex flex-col items-start gap-4">
          <span
            variant="ghost"
            className="font-heading text-[20px] text-primary-foreground font-bold "
          >
            Solutions
          </span>
          <Separator orientation="horizontal" />

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
          <Separator orientation="horizontal" />

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
          <Separator orientation="horizontal" />

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

      <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex-col flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="SkypondTech.AI" className="pl-2 h-20 w-auto"></img>
          </Link>

          <p className="max-w-sm mx-auto px-4 sm:px-6 lg:px-5 justify-start font-body text-muted text-small">
            Transforming long-term care pharmacy with enterprise-grade AI
            solutions designed for healthcare excellence and HIPAA compliance.
          </p>
        </div>

        <div className="flex-col gap-2 space-y-8">
          <div className="flex space-x-4 justify-end 4">
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
          <Separator />
          <div className="space-y-2">
            <div className="flex flex-row gap-2 text-muted justify-end font-body text-small">
              <Copyright size={15} />
              <h1>
                {new Date().getFullYear()} Skypond AI. All rights reserved.
              </h1>
              <br></br>
            </div>
            <div className="flex flex-row gap-2 text-muted justify-end font-body text-small ">
              <h1>
                Built for healthcare. Enterprise Grade. HIPAA Compliant. SOC 2
                Type II Certified.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
