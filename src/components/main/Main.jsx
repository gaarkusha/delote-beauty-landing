import React from "react";
import Portfolio from "./portfolio/Portfolio";
import Presentation from "./presentation/Presentation";
import Services from "./services/Services";
import "./Main.css"

const Main = () => {
    return(
        <div className="main">
            <Presentation/>
            <Services/>
            <Portfolio/>
        </div>
    )
}

export default Main