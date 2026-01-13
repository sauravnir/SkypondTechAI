import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Landingpage from "./pages/LandingPage.jsx";
import Error404 from "./components/reusable/404Error";
import OrderAutomation from "./pages/OrderAutomation";
export default function App() {
  return (
    <>
      <BrowserRouter basename="/SkypondTechAI">
        <Routes>
          <Route path="/404error" element={<Error404 />} />
          <Route path="/" element={<Landingpage />}/>
          <Route path="/OrderAutomation" element={<OrderAutomation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
