import React from 'react';
import "./Home.css";
import contentImg from "../../assets/img/main-flower.svg";
import iconflower from "../../assets/img/icon-flower.svg";
import iconflower2 from "../../assets/img/icon-flower2.svg";
import iconflower3 from "../../assets/img/icon-flower3.svg";

const Home = () => {
    return (
        <div className=" container">
            <div className="content__title">
                <h1 className="text__title">Premium Affordable Bouquet & Flower</h1>
            </div>
            <div className='wrapper__img'>
                <div className="content__img"></div>
                <img src={contentImg} alt="flower" className='main-img' />
            </div>
            <div className="content__card">
                <a href='#' className="wrapper__icon">
                    <img src={iconflower} className="icon-flower" />
                    <h3 className="text__content">Design Bouquet</h3>
                </a>

                <a href='#' className="wrapper__icon">
                    <img src={iconflower2} className="icon-flower" />
                    <h3 className="text__content">Premium Flower</h3>
                </a>

                <a href='#' className="wrapper__icon">
                    <img src={iconflower3} className="icon-flower" />
                    <h3 className="text__content">Secure Pack</h3>
                </a>
            </div>
        </div>
    )
}

export default Home