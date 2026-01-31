import DEAHERO from "@/components/layout/DEALookupPage/DEAHERO"
import ExpandedFeatures from "@/components/layout/DEALookupPage/ExpandedFeatures"
import RecallSection from "@/components/layout/LandingPage/RecallSection"
import Footer from "@/components/reusable/Footer"
import NavigationBar from "@/components/reusable/NavigationBar"

const DEALookup = ()=>{
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <DEAHERO />
            <ExpandedFeatures />
            <RecallSection />
            <Footer />
        </div>
    )
}

export default DEALookup