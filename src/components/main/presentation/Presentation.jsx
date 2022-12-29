import React from "react";
import './Presentation.css';
import title from "../../../assets/title.svg"

const Presentation = () => {
    return(
        <div className="present-wrapper">
            <div className="bgc-img">
                <div className="present-title">
                    <h1>
                        Салон красоты<br/>
                        «Delote-Beauty»<br/> 
                        на Крестовском
                    </h1>
                </div>
            </div>
            <div className="heading-title">
                <img src={title} alt="" />
                <div className="present-text">
                    <p>
                        A woman's beauty is not in the shape of her face, 
                        not in the clothes she wears and not in her hairstyle. 
                        Real female beauty is reflected in her soul, it is manifested 
                        in how passionately a woman gives her love.
                        <br/><br/>
                        Women's beauty grows over the years.
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Presentation