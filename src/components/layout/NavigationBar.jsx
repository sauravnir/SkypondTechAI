import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/media/1.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { ChevronRight, Menu, CircleSmall, ArrowUpRight } from "lucide-react";
import GetStartedForm from "../reusable/GetStartedForm";
import WhatsappLogo from "@/assets/media/whatsapp.png";

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

  // Creating Menu Items
  const menuItems = [
    { title: "Solutions", link: "#" },
    { title: "Impact", link: "#" },
    { title: "How It Works", link: "#" },
    { title: "Contact", link: "#" },
  ];

  // Creating Whatsapp Container
  const phone = "17207246828";
  const message = encodeURIComponent(
    "Hello! I am interested in your services. Please let me know the details. "
  );
  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  return (
    <header className="fixed w-full z-50">
      {/* Applying isScrolled Ternary Conditional and changing navbar css */}
      <div
        className={`flex justify-between items-center px-4 md:px-10 h-20 ${
          isScrolled
            ? "bg-altbackground/80 backdrop-blur-sm text-white"
            : "bg-transparent"
        }`}
      >
        {/* Navigation Bar Logo */}

        <div className="flex-shrink-0">
          <Link to="#">
            <img src={Logo} alt="SkypondTech.AI" className="h-20 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.link}
                      className={`font-body hover:text-accent transition-all delay-400 text-heading text-small px-3 py-2 ${
                        isScrolled ? "text-primary-foreground" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Menu Items */}

        {/* CTA Buttons */}
        <div className=" flex hidden md:flex gap-3 font-body font-medium items-center">
          <div className="group">
            <Link to="https://skypondtech.com" target="_blank">
              <Button
                variant="ghost"
                className={`text-[14px] hover:text-accent flex items-center border-heading rounded-full ${
                  isScrolled ? "text-primary-foreground border-white" : ""
                }`}
                size="sm"
              >
                SkypondTech
                <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                  <ArrowUpRight strokeWidth={2.75} />
                </span>
              </Button>
            </Link>
          </div>
          {/* <Separator orientation="vertical" className="h-6 bg-border" /> */}
          <div className="group">
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="default"
                  className="text-[14px] text-primary-foreground rounded-full flex items-center "
                  size="md"
                >
                  Get Started
                  <span className="transition-transform duration-300 group-hover:scale-150 ">
                    <ChevronRight strokeWidth={2.75} />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
                <GetStartedForm />
              </DialogContent>
            </Dialog>
          </div>
          {/* Whatsapp Redirection */}
          <div className="group">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <Button className="relative flex items-center justify-center rounded-full bg-[#D8FBE6] shadow hover:bg-[#DCF8C6] hover:shadow-lg overflow-hidden">
                <img
                  src={WhatsappLogo}
                  alt="whatsapp"
                  className="w-7 h-7"
                />
                <span className="flex items-center gap-1 max-w-0 overflow-hidden whitespace-nowrap text-[#075E54] text-[15px] font-bold transition-all duration-500 group-hover:max-w-xs">
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
              <Button
                size="icon"
                variant="outline"
                className={`${isScrolled ? "bg-primary" : ""}`}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full">
              <nav className="flex flex-col justify-start space-y-2 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="hover:text-accent transition-all delay-400 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <CircleSmall size={18} strokeWidth={2.75} />{" "}
                      <span className="font-body text-heading text-h3 font-medium">
                        {item.title}
                      </span>
                    </div>
                  </Link>
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
                      <GetStartedForm />
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
