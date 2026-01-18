import { React ,useState , useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Landingpage from "./pages/LandingPage.jsx";
import Error404 from "./components/reusable/404Error";
import OrderAutomation from "./pages/OrderAutomation";
import ContactUs from "./pages/ContactUs"
import { MoveUp } from "lucide-react";
import { Button } from "./components/ui/button";
export default function App() {
  // Scroll to top
  const [pageScrolled, isPageScrolled] = useState(false);
  
    useEffect(() => {
      const scrollHandle = () => {
        isPageScrolled(window.scrollY > 1000);
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
    {pageScrolled ? (
        <div className="flex flex-col fixed bottom-8 right-8 z-50 space-y-4">
          <Button
            onClick={onClick}
            size="lg"
            className="rounded-full p-4 bg-accent text-primary-foreground shadow-xl hover:bg-altbackground/90 transition-transform transform hover:scale-110"
          >
            <span className="flex items-center justify-center gap-2">
              <MoveUp/>
            </span>
          </Button>
        </div>
      ) : (
        ""
      )}
      <BrowserRouter basename="/SkypondTechAI">
        <Routes>
          <Route path="/404error" element={<Error404 />} />
          <Route path="/" element={<Landingpage id="top" />}/>
          <Route path="/OrderAutomation" element={<OrderAutomation id="top"/>} />
          <Route path="/ContactUs" element={<ContactUs id="top"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
