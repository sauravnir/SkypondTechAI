import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/media/1.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { ExternalLink, ChevronRight, Menu, CircleSmall , MoveUpRight } from "lucide-react";

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

  return (
    <header className="fixed w-full z-50 border-b border-muted">
      {/* Applying isScrolled Ternary Conditional and changing navbar css */}
      <div
        className={`flex justify-between items-center px-10 h-16 ${
          isScrolled
            ? "bg-altbackground/80 backdrop-blur-sm "
            : "bg-transparent"
        }`}
      >
        {/* Navigation Bar Logo */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
          <Link to="/">
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
                      className="font-body hover:text-accent transition-all delay-400 text-[#E5E7EB] text-small font-bold px-3 py-2"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        </div>
        

        {/* Menu Items */}
       


        {/* CTA Buttons */}
        <div className=" flex hidden md:flex space-x-4 font-body font-medium items-center">
          
          <div className="group">
            <Link to="https://skypondtech.com" target="_blank">
              <Button
                variant="outline"
                className="text-[14px] text-[#E5E7EB] bg-null flex items-center rounded-full"
                size="sm"
              >
                Main Website
                <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                  <MoveUpRight strokeWidth={2.75}/>
                </span>
              </Button>
            </Link>
          </div>
          <Separator orientation="vertical" className="h-6 bg-border" />
          <div className="group">
            <Button
              variant="default"
              className="text-[14px] btn-gradient text-primary-foreground rounded-full flex items-center hover:bg-accent "
              size="sm"
            >
              Get Started
              <span className="transition-transform duration-300 group-hover:scale-150 ">
                <ChevronRight strokeWidth={2.75}/>
              </span>
            </Button>
          </div>
        </div>
     
        

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          {/* Creating Side-Drawer / Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" >
                <Menu  />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full">
              <nav className="flex flex-col justify-start space-y-2 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="font-body hover:text-accent transition-all delay-400 text-heading text-button font-medium  py-2"
                  >
                    <div className="flex items-center gap-2">
                      <CircleSmall size={12} /> {item.title}
                    </div>
                  </Link>
                ))}
              </nav>
              <Separator orientation="horizontal" className="my-4" />
              <div className="p-2 space-y-4">
                <div className="group">
                  <Link to="https://skypondtech.com" target="_blank">
                    <Button
                      variant="ghost"
                      className="text-button flex items-center hover:underline w-full justify-center"
                    >
                      Main Website
                      <span className="transition-transform duration-300 group-hover:scale-125 inline-block">
                        <ExternalLink />
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="group">
                  <Button
                    variant="default"
                    className="text-button btn-gradient text-primary-foreground flex items-center w-full justify-center"
                    size="lg"
                  >
                    Get Started
                    <span className="transition-transform duration-300 group-hover:scale-150 ">
                      <ChevronRight />
                    </span>
                  </Button>
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
