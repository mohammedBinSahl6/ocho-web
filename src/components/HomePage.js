import React from "react";
import AskSection from "./AskSection";
import Contact from "./Contact";
import Logo from "./Logo";
import SomeProducts from "./SomeProducts";
import Vision from "./Vision";
import WhatisNew from "./WhatisNew";
import logo from '../images/logo.svg'

export default function HomePage(){
    return (
        <>
      <div className="land pt-5 ">
        <div className="row"> 
           <div className="col-sm-6">
           <div className="f-holder mt-5">
           <img className="logo" src={logo}  data-aos='flip-right' data-aos-duration='2000'/>
           </div>
           </div>
           <div className="col-sm-6">
          <div className="f-holder">
                <h1 className="brand text-white  mt-5" data-aos='fade-up' data-aos-duration='3000'>UNITY <span>V</span>ISION</h1>
          </div>
          <div className="f-holder">
                <h1 className="find text-white" data-aos='fade-right' data-aos-duration='3000' data-aos-delay='300'>Find your Passion</h1>
          </div>
          
           </div>
        </div>
       

        <div className="row">
            <div className="btn-holder mt-5">
                <button className="btn btn-outline-light ex-btn mb-3" data-aos='fade-up'>Explore</button>
            </div>
        </div>
      </div>

      <WhatisNew />
      <SomeProducts />
      <Vision />
      <AskSection />
      <Contact />
      <img className="black-bg" src={require('../images/black-bg.jpg')} />
        
        
        
        
        
        </>
    )
}