import React from "react";

import NavigationBar from "../layout/NavigationBar";
import RecallSection from "../layout/RecallSection";
import Footer from "../layout/Footer";

export default function Error404(){
    return ( 
        <div className="relative overflow-hidden w-full bg-background ">
            <NavigationBar />
            <div className="flex flex-row justify-center mt-32 py-20">
                <h1 className="font-heading  text-hero text-heading leading-tight font-bold">Coming Soon <span>...</span></h1>
            </div>
            <RecallSection />
            <Footer />
        </div>
    )
}