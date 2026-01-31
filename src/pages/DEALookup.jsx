import DEAHERO from "@/components/layout/DEALookupPage/DEAHERO"
import Footer from "@/components/reusable/Footer"
import NavigationBar from "@/components/reusable/NavigationBar"

const DEALookup = ()=>{
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <DEAHERO />
            <Footer />
        </div>
    )
}

export default DEALookup