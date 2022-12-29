import React from "react";
import "./Services.css"
import services1 from "../../../assets/services1.png"
import services2 from "../../../assets/services2.png"
import services3 from "../../../assets/services3.png"
import services4 from "../../../assets/services4.png"
import services5 from "../../../assets/services5.png"
import services6 from "../../../assets/services6.png"
import product1 from "../../../assets/img-product1.svg"
import product2 from "../../../assets/img-product2.svg"
import product3 from "../../../assets/img-product3.svg"
import product4 from "../../../assets/img-product4.svg"



const Services = () => {
    return(
        <div className="services-cards-wrapper">
            <div className="services-cards">
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services1} alt="make-up photos" />
                    </div>
                    <div className="card-name">
                        <p>Визаж</p> 
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services2} alt="manicure photo" />
                    </div>
                    <div className="card-name">
                        <p>Маникюр</p> 
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services3} alt="cosmetology photo" />
                    </div>
                    <div className="card-name">
                        <p>Косметология</p> 
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services4} alt="pedicure photo" />
                    </div>
                    <div className="card-name">
                        <p>Педикюр</p> 
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services5} alt="barber shop photo" />
                    </div>
                    <div className="card-name">
                        <p>Парикмахерские услуги</p> 
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-photo">
                        <img src={services6} alt="body aestheticist photo" />
                    </div>
                    <div className="card-name">
                        <p>Эстетист по телу</p> 
                    </div>
                </div>
            </div>
            <div className="products-card">
                <div className="product-card">
                    <a target="_blank" href="https://kevinmurphy.com.au/">
                        <img src={product1} alt="logo kevin murphy" />
                    </a>
                </div>
                <div className="product-card">
                    <a target="_blank" href="https://www.aldocoppola.com/">
                        <img src={product2} alt="logo aldo coppola" />
                    </a>
                </div>
                <div className="product-card">
                    <a target="_blank" href="https://alternahaircare.com/">
                        <img src={product3} alt="logo alterna" />
                    </a>
                </div>
                <div className="product-card">
                    <a target="_blank" href="https://www.oribe.com/">
                        <img src={product4} alt="logo oribe" />
                    </a>
                </div>
            </div>    
        </div>
    )
}

export default Services