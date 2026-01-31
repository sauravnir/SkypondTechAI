import NavigationBar from "@/components/reusable/NavigationBar";
import Footer from "@/components/reusable/Footer";
import RecallSection from "@/components/layout/LandingPage/RecallSection";
import ControlSubstanceHero from "@/components/layout/ControlSubstance/ControlSubstanceHero";
import ControlSubstanceFeatures from "@/components/layout/ControlSubstance/ControlSubstanceFeatures";

const ControlSubstance = () => {
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <ControlSubstanceHero/> 
            <ControlSubstanceFeatures />
            <RecallSection />
            <Footer/>
        </div>
    )
}

export default ControlSubstance