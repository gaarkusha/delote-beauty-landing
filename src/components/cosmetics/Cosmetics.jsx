import React from "react";
import { Link } from "react-router-dom";
import "./Cosmetics.css";
import product1 from "../../assets/img-product1.svg"
import product2 from "../../assets/img-product2.svg"
import product3 from "../../assets/img-product3.svg"
import product4 from "../../assets/img-product4.svg"

const Cosmetics = () => {
    return(
        <div className="cosmeticts-content-wrapper">
            <div className="cosmetics-content">
                <div className="masters-title">
                    <h2>Чем пользуемся</h2>
                </div>
                <div className="brands-products-wrapper">
                    <div className="product-card-wrapper">
                        <Link to='/cosmetics/kevin' className="brand-logo">
                            <img src={product1} alt="logo kevin murphy" />
                        </Link>
                        <div className="brand-info-text">
                            <p>something text info</p>
                        </div>
                    </div>
                    <div className="product-card-wrapper">
                        <Link to='/cosmetics/aldo' className="brand-logo">
                            <img src={product2} alt="logo aldo coppola" />
                        </Link>
                        <div className="brand-info-text">
                            <p>something text info</p>
                        </div>
                    </div>
                    <div className="product-card-wrapper">
                        <Link to='/cosmetics/alterna' className="brand-logo">
                            <img src={product3} alt="logo alterna" />
                        </Link>
                        <div className="brand-info-text">
                            <p>something text info</p>
                        </div>
                    </div>
                    <div className="product-card-wrapper">
                        <Link to='/cosmetics/oribe' className="brand-logo">
                            <img src={product4} alt="logo oribe" />
                        </Link>
                        <div className="brand-info-text">
                            <p>something text info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cosmetics