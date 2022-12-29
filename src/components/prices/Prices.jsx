import React from "react";
import "./Prices.css"
import case1 from "../../assets/case1.jpg"
import case2 from "../../assets/case2.jpg"
import case3 from "../../assets/case3.jpg"
import case4 from "../../assets/case4.png"


const Prices = () => {
    return(
        <div className="prices-content-wrapper">
            <div className="prices-title">
                <h2>Цены на услуги</h2>
            </div>
            <div className="price-service-wrapper">
                <div className="service-price-card">
                    <div className="photo-service">
                        <img src={case4} alt="" />
                    </div>
                    <div className="price-wrapper">
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Женская укладка</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка кончиков</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>1000 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Женская стрижка</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка кончиков</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>1500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Покраска</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка кончиков</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2000 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Комплекс</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка кончиков</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                    </div>
                </div>
                <div className="service-price-card">
                    <div className="photo-service">
                        <img src={case1} alt="" />
                    </div>
                    <div className="price-wrapper">
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Укрепление гелем</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>1500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Наращивание</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2300 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Маникюр с покрытием</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ дизайн</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>1200 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Коррекция + наращивание</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ обработка</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2000 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                    </div>
                </div>
                <div className="service-price-card">
                    <div className="photo-service">
                        <img src={case3} alt="" />
                    </div>
                    <div className="price-wrapper">
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Комплексные процедуры</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>3000 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Эстетическая косметология</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2000 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Аппаратная косметология</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>2500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Уход за лицом</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>1700 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                    </div>
                </div>
                <div className="service-price-card">
                    <div className="photo-service">
                        <img src={case2} alt="" />
                    </div>
                    <div className="price-wrapper">
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Свадебный макияж</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Вечерний макияж</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Креативный макияж</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                        <div className="price-block">
                            <div className="price-info-wrapper">
                                <div className="price-info">
                                    <div className="price-name">
                                        <p>Дневной макияж</p>
                                    </div>
                                    <div className="price-name-add">
                                        <p>+ рекомендации</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>500 ₽</p>
                                </div>
                            </div>
                            <div className="price-block-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices