import React from 'react';
import logoImg from "../../assets/img/logo.svg";
import "./Header.css";
import { BsFlower3 } from 'react-icons/bs';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className='nav__link'>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#bouquet" className='nav__link'>Bouquet</a>
                        </li>
                        <li className="nav__item">
                            <a href="#flower" className='nav__link'>Flower</a>
                        </li>
                        <li className="nav__item">
                            <a href="index.html"><img src={logoImg} className="nav__logo" /></a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className='nav__link'>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#team" className='nav__link'>Team</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className='nav__link'>Contact</a>
                        </li>
                    </ul>
                    <hr className='lineNav' />
                </div>
            </nav>
            {/* <div className="wrapper">
                <div className="icon">
                    <BsFlower3 />
                </div>
            </div> */}
        </header>
    )
}

export default Header