import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer-content-wrapper">
            <div className="footer-content">
                <div className="footer-line"></div>
                <div className="footer-content-info">
                    <div className="footer-link-item">
                        <Link to='/'><div className="footer-main-logo"></div></Link>
                    </div>
                    <div className="contats-wrapper">
                        <h3>Контакты</h3>
                        <p>+7 (812) 123-45-67</p>
                        <p>+7 (812) 123-45-67</p>
                        <p>Новоостровский проспект, дом 36 лит. С</p>
                    </div>
                    <div className="operating-mode-wrapper">
                        <h3>Режим работы</h3>
                        <p>C 10:00 до 21:00 (Пн-Пт)</p>
                        <p>С 11:00 до 20:00 (Сб-Вс)</p>
                    </div>
                    <div className="footer-inst-link">
                        <h3>Мы в Instagram</h3>
                        <a target="_blank" href="https://www.instagram.com/gaarkusha/"><div className="footer-inst-logo"></div></a>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="copyrigth-text">
                    <p>Copyright © 2017-2023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer