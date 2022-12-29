import React from "react";
import "./Masters.css"
import master1 from "../../assets/master1.jpg"
import master2 from "../../assets/master2.png"
import master3 from "../../assets/master3.png"
import master4 from "../../assets/master4.png"
import master5 from "../../assets/master5.png"
import master6 from "../../assets/master6.png"


const Masters = () => {
    return(
        <div className="masters-content-wrapper">
            <div className="masters-title">
                <h2>Наши мастера</h2>
            </div>
            <div className="masters-content">
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master6} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Елена Васильевна</p>
                    </div>
                    <div className="master-skill">
                        <p>Визажист</p>
                    </div>
                </div>
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master2} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Екатерина Александровна</p>
                    </div>
                    <div className="master-skill">
                        <p>Парикхмахер</p>
                    </div>
                </div>
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master3} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Татьяна Владимировна</p>
                    </div>
                    <div className="master-skill">
                        <p>Косметолог</p>
                    </div>
                </div>
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master1} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Карина Анатольевна</p>
                    </div>
                    <div className="master-skill">
                        <p>Дерматолог</p>
                    </div>
                </div>
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master4} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Виолета Станиславовна</p>
                    </div>
                    <div className="master-skill">
                        <p>Визажист</p>
                    </div>
                </div>
                <div className="master-content">
                    <div className="master-photo">
                        <img src={master5} alt="" />
                    </div>
                    <div className="master-name">
                        <p>Диана Евгеньевна</p>
                    </div>
                    <div className="master-skill">
                        <p>Парикхмахер</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Masters