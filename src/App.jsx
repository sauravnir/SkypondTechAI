import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Landingpage from "./pages/LandingPage.jsx";
import Error404 from "./components/reusable/404Error";
import OrderAutomation from "./pages/OrderAutomation";
import ContactUs from "./pages/ContactUs"
export default function App() {
  return (
    <>
      <BrowserRouter basename="/SkypondTechAI">
        <Routes>
          <Route path="/404error" element={<Error404 />} />
          <Route path="/" element={<Landingpage />}/>
          <Route path="/OrderAutomation" element={<OrderAutomation />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
