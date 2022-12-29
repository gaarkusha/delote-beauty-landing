import React from "react";
import "./Portfolio.css"
import work1 from "../../../assets/work-1.png"
import work2 from "../../../assets/work-2.png"
import work3 from "../../../assets/work-3.png"
import work4 from "../../../assets/work-4.png"
import work5 from "../../../assets/work-5.png"
import work6 from "../../../assets/work-6.png"
import work7 from "../../../assets/work-7.png"
import work8 from "../../../assets/work-8.png"
import work9 from "../../../assets/work-9.png"


const Portfolio = () => {
    return(
        <div className="portfolio-wrapper">
            <div className="portfolio-title">
                <h2>Наши работы</h2>
            </div>
            <div className="portfolio-photos">
                <div className="portfolio-photo">
                    <img src={work1} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work2} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work3} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work4} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work5} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work6} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work7} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work8} alt="" />
                </div>
                <div className="portfolio-photo">
                    <img src={work9} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio