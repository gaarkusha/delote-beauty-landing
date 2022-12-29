import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header className="header-wrapper">
            <div className="header-container">
                <div className="link-container">
                    <a target="_blank" href="https://www.instagram.com/gaarkusha/"><div className="inst-logo"></div></a>
                    <div className="link-item">
                    <Link to='/' className="link-item-text">Главная</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/masters' className="link-item-text">Мастера</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/' className="link-item-text">Косметика</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/'><div className="main-logo"></div></Link>
                    </div>
                    <div className="link-item">
                        <Link to='/prices' className="link-item-text">Стоимость</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/' className="link-item-text">Отзывы</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/contacts' className="link-item-text">Контакты</Link>
                    </div>
                    <div className="burger-btn"></div>
                </div>
                <div className="header-line"></div>
            </div>
        </header>
    )
}

export default Header