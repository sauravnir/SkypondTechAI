import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Landingpage from "./pages/LandingPage.jsx";
import Error404 from "./components/reusable/404Error";
import OrderAutomation from "./pages/OrderAutomation";
import ContactUs from "./pages/ContactUs";
import { MoveUp } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      setPageScrolled(window.scrollY > 1000);
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);

  const onClick = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to top button */}
      {pageScrolled && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={onClick}
            size="lg"
            className="rounded-full p-4 bg-accent text-primary-foreground shadow-xl hover:scale-110"
          >
            <MoveUp />
          </Button>
        </div>
      )}

      <HashRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/OrderAutomation" element={<OrderAutomation />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
}
