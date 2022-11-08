import React from "react";
import AskSection from "./AskSection";
import Contact from "./Contact";
import SomeProducts from "./SomeProducts";
import Vision from "./Vision";
import WhatisNew from "./WhatisNew";
import logo from '../images/logo.svg'

export default function HomePage(){
    return (
        <>
      <div className="land pt-5 ">
        
       
        </div>
       

        <div className="row">
            <div className="btn-holder ">
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