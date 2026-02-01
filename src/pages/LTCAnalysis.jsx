import NavigationBar from "@/components/reusable/NavigationBar";
import Footer from "@/components/reusable/Footer";
import LTCHero from "@/components/layout/LTCAnalysis/LTCHero";
import { LTCFeatures } from "@/components/layout/LTCAnalysis/LTCFeatures";
import RecallSection from "@/components/layout/LandingPage/RecallSection";

const LTCAnalysis=()=>{
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <LTCHero />
            <LTCFeatures /> 
            <RecallSection />
            <Footer/>
        </div>
    )
}

export default LTCAnalysis;