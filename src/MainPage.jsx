import { useEffect } from "react";
import HomeNav from "./components/HomeNav";
import HomeContents from "./components/CenterDivContents";
function LandingPage(){
    return(
        <>
        <div className="centerDiv">
            <HomeNav />
            <HomeContents />
        </div>
        </>
    )
}
export default LandingPage;