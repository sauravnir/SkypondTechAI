import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/media/1.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Menu,
  CircleSmall,
  ArrowUpRight,
  FileText,
  Bot,
  Workflow,
  Cog,
  Contact,
  SearchCheck,
  LayoutGrid,
  ChartArea
} from "lucide-react";
// import PrerenderForm from "../reusable/PrerenderForm";
import ContactForm from "./ContactForm";
import WhatsappLogo from "@/assets/media/whatsapp.png";
import { PrimaryButton , SecondaryButton } from "./Button";

// Creating Menu Items
const menuItems = [
  {
    item: "Solutions",
    link: "services",
    subItems: [
      {
        icon: Cog,
        title: "Order Automation",
        desc: "Intelligent order processing",
        subLink: "/OrderAutomation",
      },
      {
        icon: FileText,
        title: "Document Automation",
        desc: "Convert unstructured pharmacy data",
        subLink: "/404Error",
      },
      {
        icon: Bot,
        title: "Pharmacy Copilot",
        desc: "Conversational AI assistant",
        subLink: "/404Error",
      },
      {
        icon: Workflow,
        title: "Workflow AI",
        desc: "Operational workflow intelligence",
        subLink: "/404Error",
      },
    ],
  },
  {
    item: "Our Products",
    link: "/",
    subItems: [
      {
        icon: SearchCheck,
        title: "DEA Lookup",
        desc: "Essential tool for DEA Number Verification",
        subLink: "/404Error",
      },
      {
        icon: LayoutGrid,
        title: "Controlled Substance Inventory App",
        desc: "Comprehensive inventory management solution",
        subLink: "/404Error",
      },
      {
        icon: ChartArea,
        title: "LTC Analysis",
        desc:"Advanced analytics platform for long-term care facilities",
        subLink: "/404Error",
      },
    ],
  },
  { item: "How It Works", link: "howitworks" },
  { item: "Impact", link: "impact" },
  { item: "Contact", link: "contact" },
];

function NavigationBar() {
  //setting up states for scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Listening to scroll event on asynchronous basis
  useEffect(() => {
    // Creating a call-back function that changes the value of isScrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Listening to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Unmounting the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Creating Whatsapp Container
  const [isHovered, setIsHovered] = useState(false);
  const phone = "17207246828";
  const message = encodeURIComponent(
    "Hello! I am interested in your services. Please let me know the details. "
  );
  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  // Mobile Menu Items Toggles
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Applying isScrolled Ternary Conditional and changing navbar css */}
      <div
        className={`flex justify-between items-center px-8 md:px-16 h-24  ${
          isScrolled
            ? "bg-background backdrop-blur-sm border-b"
            : "bg-transparent"
        }`}
      >
        {/* Navigation Bar Logo */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            <Link to="/">
            <button
            >
              <img src={Logo} alt="SkypondTech.AI" className="h-20 w-auto" />
            </button>
            </Link>
          </div>
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((menu, idx) => (
                  <NavigationMenuItem key={idx} className={`flex font-body  `}>
                    {menu.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={`font-body font-medium  ${isScrolled ? "bg-transparent" : ""}`}
                        >
                          <button>
                            {menu.item}
                          </button>
                        </NavigationMenuTrigger>
                     
                        <NavigationMenuContent className="bg-card">
                          <ul className="grid w-max grid-cols-1 md:grid-cols-2 gap-3 p-4">
                            {menu.subItems.map((subItem, subIdx) => {
                              const Icon = subItem.icon;
                              return (
                                <li key={subIdx}>
                                  <Link to={subItem.subLink} > 
                                  <a
                                   
                                    className="flex items-start gap-3 rounded-xl p-3 hover:bg-muted/10 transition-all"
                                  >
                                    <div className="p-2 rounded-lg bg-accent">
                                      <Icon className="w-5 h-5 text-primary-foreground" />
                                    </div>

                                    <div className="space-y-1">
                                      <p className="font-heading font-bold text-button ">
                                        {subItem.title}
                                      </p>
                                      <p className="text-sm text-muted">
                                        {subItem.desc}
                                      </p>
                                    </div>
                                  </a>
                                  </Link>
                                  
                                </li>
                              );
                            })}
                          </ul>
                        </NavigationMenuContent>

                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => {
                            document
                              .getElementById(menu.link)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-3 py-2 text-sm font-medium hover:text-accent transition"
                        >
                          {menu.item}
                        </button>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Menu Items */}

        {/* CTA Buttons */}
        <div className=" flex hidden md:flex gap-3 font-body font-medium items-center">
          <SecondaryButton title="SkypondTech" size="sm"/>
          <PrimaryButton title="Get Started" size="sm" />
          {/* Whatsapp Redirection */}
          <div className="group">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <Button className="relative flex items-center justify-center rounded-full bg-[#D8FBE6] shadow hover:bg-[#DCF8C6] hover:shadow-lg overflow-hidden">
                <img src={WhatsappLogo} alt="whatsapp" className="w-7 h-7" />
                <span
                  className={` flex items-center gap-1 max-w-0 overflow-hidden whitespace-nowrap text-[#075E54] text-[15px] font-bold transition-all duration-500 group-hover:max-w-xs`}
                >
                  Whatsapp Us
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden lg:hidden flex gap-4">
          {/* Creating Side-Drawer / Sheet */}
          <div className="group">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <Button
                className={`flex text-heading flex-row items-center px-2 py-1 shadow rounded-full bg-[#DCF8C6] hover:bg-null hover:shadow-lg gap-1`}
              >
                <img
                  src={WhatsappLogo}
                  alt="whatsapp"
                  className="w-7 h-7 group-hover:scale-105"
                  aria-placeholder="Whatsapp Us!"
                />
              </Button>
            </a>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full">
              <nav className="flex flex-col space-y-2 mt-8 md:hidden">
                {menuItems.map((menu, idx) => (
                  <div key={menu.item} className="flex flex-col w-full">
                    {/* Parent item / trigger */}
                    <button
                      onClick={() => menu.subItems && toggleOpen(idx)}
                      className="flex items-center w-full justify-start gap-2 py-2 px-1 text-left hover:text-accent transition-colors font-medium"
                    >
                      <CircleSmall size={18} strokeWidth={2.75} />
                      <span className="font-body text-heading text-paragraph ">
                        {menu.item}
                      </span>
                      {menu.subItems && (
                        <span className="ml-auto">
                          {openIndex === idx ? (
                            <ChevronUp strokeWidth={2.75} />
                          ) : (
                            <ChevronDown strokeWidth={2.75} />
                          )}
                        </span>
                      )}
                    </button>

                    {/* Sub-items */}
                    {menu.subItems && openIndex === idx && (
                      <div className="flex flex-col ml-6 mt-1 space-y-1 bg-card/70 p-2 gap-2">
                        {menu.subItems.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <a
                              key={sub.title}
                              href={sub.subLink}
                              className="flex items-center gap-2 px-3 py-2 rounded-md hover:text-accent hover:bg-muted/10 transition-colors"
                            >
                              <div className="p-1 rounded bg-accent">
                                <Icon className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <span className="font-body text-button">
                                {sub.title}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <Separator orientation="horizontal" className="my-4" />
              <div className="p-2 space-y-4">
                <div className="group">
                  <Link to="https://skypondtech.com" target="_blank">
                    <Button
                      variant="outline"
                      className="text-[15px] rounded-full flex items-center hover:text-accent w-full"
                      size="lg"
                    >
                      Skypond Tech
                      <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                        <ArrowUpRight strokeWidth={2.75} />
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="default"
                        className="text-[15px] bg-primary rounded-full text-primary-foreground flex items-center w-full justify-center"
                        size="lg"
                      >
                        Get Started
                        <span className="transition-transform duration-300 group-hover:scale-150 ">
                          <ChevronRight strokeWidth={2.75} />
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
