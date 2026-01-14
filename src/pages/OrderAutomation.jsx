import react from "react"
import NavigationBar from "@/components/reusable/NavigationBar"
import RecallSection from "@/components/layout/LandingPage/RecallSection"
import Footer from "@/components/reusable/Footer"

import OrderAutomationHero from "@/components/layout/OrderAutomation/OrderAutomationHero"

const OrderAutomation=()=>{
    return(
        <div className="min-h-screen">
            <NavigationBar />
            <OrderAutomationHero />
            <RecallSection />
            <Footer />
        </div>
    )
}

export default OrderAutomation