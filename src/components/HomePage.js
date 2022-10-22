import React from "react";
import logo from '../images/logo.png';
import design from '../images/design.gif'
import bag from '../images/money-bag.gif'
import idea from '../images/idea.gif'
import tablet from '../images/tablet.gif';
export default function HomePage(){
    return (
        <>
        <div className="land pt-5">
            <div className="row logo-holder">
                <img src={logo} className='logo-land' data-aos='fade-up' data-aos-duration='1000'/>
                <div className="row " data-aos='fade-up' data-aos-duration='1200'>
                    <p className="subtitle text-center text-white">Welcome to OCHO !  Create Your brand and Add your creativety !</p>
                </div>
                <div className="row m-3 icons-holder">
                    <div className="col">
                        
                      <div className="icon-wrap">
                      <div className="icon" data-aos='flip-right' data-aos-delay='500'>
                            <img src={idea} className='the-icon'></img>
                        </div>
                      <h4 className="subname text-white text-center">Have an Idea?</h4>
                      
                      </div>
                    </div>

                    <div className="col">
                      <div className="icon-wrap">
                      <div className="icon" data-aos='flip-right' data-aos-delay='1000'>
                            <img src={design} className='the-icon'></img>
                        </div>
                        <h4 className="subname text-white text-center">Create it in Real !</h4>
                      </div>
                    </div>

                    <div className="col">
                      <div className="icon-wrap">
                      <div className="icon" data-aos='flip-right' data-aos-delay='1500'>
                            <img src={bag} className='the-icon'></img>
                        </div>
                        <h4 className="subname text-white text-center">With Perfect Price!</h4>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container mt-5 services">
            <div className="row m-3 ">
                <h1 className="head text-center">Our Services</h1>
            </div>
            <div className="row mt-3">
                <h4 className="text-center">some text here!</h4>
                <div className="card">
                    <img src={tablet} className='card-img-top'></img>
                    <div className="card-title">Graphic Design</div>
                    <p className="card-text">some text here!</p>    
                </div>
            </div>
        </div>
        
        
        
        
        
        
        </>
    )
}