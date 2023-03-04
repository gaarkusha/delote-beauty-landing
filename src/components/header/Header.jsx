import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header className="header-wrapper">
            <div className="header-container">
                <div className="link-container-desktop">
                    <div className="link-item">
                        <Link to='/' className="link-item-text">Главная</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/masters' className="link-item-text">Мастера</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/cosmetics' className="link-item-text">Косметика</Link>
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
                        <Link to='/' className="link-item-text">Контакты</Link>
                    </div>
                </div>
                <div className="link-container-mobile">
                    <div className="link-item">
                        <Link to='/'><div className="main-logo"></div></Link>
                    </div>
                    <div className="logo-text">
                        <h1>Delote</h1>
                    </div>
                    <div className="burger-btn burger">
                        <span className="burger-line burger-line-first"></span>
                        <span className="burger-line burger-line-second"></span>
                        <span className="burger-line burger-line-third"></span>
                    </div>
                    <div className="header-nav">
                        <div className="nav-container">
                            <div className="link-item">
                            <Link to='/' className="link-item-text">Главная</Link>
                            </div>
                            <div className="link-item">
                                <Link to='/masters' className="link-item-text">Мастера</Link>
                            </div>
                            <div className="link-item">
                                <Link to='/cosmetics' className="link-item-text">Косметика</Link>
                            </div>
                            <div className="link-item">
                                <Link to='/prices' className="link-item-text">Стоимость</Link>
                            </div>
                            <div className="link-item">
                                <Link to='/' className="link-item-text">Отзывы</Link>
                            </div>
                            <div className="link-item">
                                <Link to='/' className="link-item-text">Контакты</Link>
                            </div>
                        </div>
                        <div className="burger-btn-close">
                            <span className="burger-line-close-line"></span>
                            <span className="burger-line-close-line"></span>
                        </div>
                    </div>
                </div>
                <div className="header-line"></div>
            </div>
        </header>
    )
}

export default Header