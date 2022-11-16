import React from "react";
import { Link } from "react-router-dom";

export default function  SomeProducts(){

    return(
        <div className="container-fluid " id="some-products">
            <div className="row pt-5">
                <h1 className="head text-center" data-aos='fade-up'>Some of Our Products</h1>
            </div>
            <div className="body-s ">
                {/* <div className="row">
                    <div className="col product-col">
                        <div className="card"  data-aos='fade-right'>
                            <div className="card-info">
                                <h3 className="card-title">Product</h3>
                                <p className="price card-text">$23</p>
                                <div className="btns-bar">
                                <i className='bx bx-cart-add'></i>
                                <i className='bx bxs-heart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col product-col">
                        <div className="card"  data-aos='fade-up'>
                            <div className="card-info">
                                <h3 className="card-title">Product</h3>
                                <p className="price card-text">$23</p>
                                <div className="btns-bar">
                                <i className='bx bx-cart-add'></i>
                                <i className='bx bxs-heart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col product-col">
                        <div className="card"  data-aos='fade-left'>
                            <div className="card-info">
                                <h3 className="card-title">Product</h3>
                                <p className="price card-text">$23</p>
                                <div className="btns-bar">
                                <i className='bx bx-cart-add'></i>
                                <i className='bx bxs-heart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                 <div className="f-holder">
           <div className="banner " data-aos='fade-up' data-aos-duration='1000'>
                <div className="imgs-holder">
                    <img className="img-show" src={require('../images/p1.webp')} />
                    <img className="img-show" src={require('../images/p2.jpg')} />
                    <img className="img-show" src={require('../images/p3.jpg')} />
                    <img className="img-show" src={require('../images/p4.jpg')} />
                    <img className="img-show" src={require('../images/p5.webp')} />
                    <img className="img-show" src={require('../images/p6.png')} />
                </div>
            </div>
           </div>
                <div className="f-holder">
                    <a className="btn btn-outline-dark btn-block ex-btn mt-5"  data-aos='fade-up' href='/VDesign'>More </a>
                </div>
            </div>



          
        </div>
    )
}