import NavigationBar from "@/components/reusable/NavigationBar";
import Footer from "@/components/reusable/Footer";
import LTCHero from "@/components/layout/LTCAnalysis/LTCHero";
import { LTCFeatures } from "@/components/layout/LTCAnalysis/LTCFeatures";

const LTCAnalysis=()=>{
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <LTCHero />
            <LTCFeatures /> 
            <Footer/>
        </div>
    )
}

export default LTCAnalysis;