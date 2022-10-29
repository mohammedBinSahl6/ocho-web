import React from "react";

export default function  SomeProducts(){

    return(
        <div className="container-fluid p-3" id="some-products">
            <div className="row pt-5">
                <h1 className="head text-center" data-aos='fade-up'>Some of Our Products</h1>
            </div>
            <div className="body-s p-3">
                <div className="row">
                    <div className="col product-col">
                        <div className="card"  data-aos='fade-right'>
                            <div className="card-info">
                                <h3 className="card-title">Product</h3>
                                <p className="price card-text">$23</p>
                                <div className="btns-bar">
                                <i class='bx bx-cart-add'></i>
                                <i class='bx bxs-heart' ></i>
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
                                <i class='bx bx-cart-add'></i>
                                <i class='bx bxs-heart' ></i>
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
                                <i class='bx bx-cart-add'></i>
                                <i class='bx bxs-heart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-holder">
                    <button className="btn btn-outline-dark btn-block ex-btn"  data-aos='fade-up' type="button">More </button>
                </div>
            </div>
        </div>
    )
}