import react from "react"
import NavigationBar from "@/components/reusable/NavigationBar"
import RecallSection from "@/components/layout/LandingPage/RecallSection"
import Footer from "@/components/reusable/Footer"

import OrderAutomationHero from "@/components/layout/OrderAutomation/OrderAutomationHero"
import HowItWorks from "@/components/layout/OrderAutomation/HowItWorks"

const OrderAutomation=({id})=>{
    return(
        <div className="min-h-screen" id={id}>
            <NavigationBar />
            <OrderAutomationHero />
            <HowItWorks />
            <RecallSection />
            <Footer />
        </div>
    )
}

export default OrderAutomation