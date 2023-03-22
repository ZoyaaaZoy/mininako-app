import React from 'react';
import "./Bouquet.css";
import imgBouquet from "../../assets/img/about-flower.svg";
import imgCard from "../../assets/img/product-flower.svg";
import imgCard2 from "../../assets/img/product-flower2.svg";
import imgCard3 from "../../assets/img/product-flower3.svg";
import imgCard4 from "../../assets/img/product-flower4.svg";
import imgCard5 from "../../assets/img/product-flower5.svg";
import imgCard6 from "../../assets/img/product-flower6.svg";
import imgCard7 from "../../assets/img/product-flower7.svg";
import imgCard8 from "../../assets/img/product-flower8.svg";
import imgCard9 from "../../assets/img/product-flower9.svg";
import imgCard10 from "../../assets/img/product-flower10.svg";

const Bouquet = () => {
    return (
        <div className="container__bouquet">
            <section className="section__bouquet">
                <div className="wrapper__text">
                    <h1 className="title__bouquet">Make Your Special One Today.</h1>
                    <p className="description__bouquet">if flowers symbolizes beauty, then a bouquet of flowers symbolizes happiness and loyalty. Give a special gift to a special person .</p>
                </div>
                <div className="wrapper__bouquet">
                    <img src={imgBouquet} alt="" className="img__bouquet" />
                    <div className="shadow"></div>
                </div>
            </section>
            <section className="section__card">
                <div className="card__wrapper">
                    <h1 className="title__card">Fresh Flower</h1>
                    <div className="card__bouquet">
                        <div className="main__card first-card">
                            <h3 className='total__product'>5 Product</h3>
                            <div className='wrapper__desc'>
                                <div className="desc__product">The Best Of Gift Bouquet</div>
                                <button className="view__product">View Product</button>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Rossa</h3>
                                <h4 className="price__bouquet">Rp 150.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard2} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Dasly</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard3} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Baby Pinky</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__wrapper">
                    <h1 className="title__card">Artifical Flower</h1>
                    <div className="card__bouquet">
                        <div className="main__card second-card">
                            <h3 className='total__product'>5 Product</h3>
                            <div className='wrapper__desc'>
                                <div className="desc__product">The Best Of Gift Bouquet</div>
                                <button className="view__product">View Product</button>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard4} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Loly</h3>
                                <h4 className="price__bouquet">Rp 150.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard5} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Bounty </h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard6} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Rora</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__wrapper">
                    <h1 className="title__card">Snack & Rokok</h1>
                    <div className="card__bouquet">
                        <div className="main__card second-card">
                            <h3 className='total__product'>5 Product</h3>
                            <div className='wrapper__desc'>
                                <div className="desc__product">The Best Of Gift Bouquet</div>
                                <button className="view__product">View Product</button>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard7} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Snash</h3>
                                <h4 className="price__bouquet">Rp 150.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard8} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Sponge</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard9} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Cola</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__wrapper">
                    <h1 className="title__card">Money</h1>
                    <div className="card__bouquet">
                        <div className="main__card second-card">
                            <h3 className='total__product'>5 Product</h3>
                            <div className='wrapper__desc'>
                                <div className="desc__product">The Best Of Gift Bouquet</div>
                                <button className="view__product">View Product</button>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard10} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Crazy Money</h3>
                                <h4 className="price__bouquet">Rp 150.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard6} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Best Of Money</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={imgCard5} className="img-cards" />
                            <div className="desc">
                                <h3 className="name__bouquet">Money Glitz</h3>
                                <h4 className="price__bouquet">Rp 50.000</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bouquet