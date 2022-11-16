import React, { useEffect } from "react";
import Contact from "./Contact";
import SomeProducts from "./SomeProducts";
import WhatisNew from "./WhatisNew";
import logo from '../images/v-logo.svg'
import Arts from "./vectors/Arts";

export default function HomePage(){
   
  useEffect(() => {
    document.title = 'UVISION | Home';
  });
  return (
        <>
      <div className="land  ">
        <Arts />
       <div className="row p-3">
        <h1 className="text-center welcome">Welcome to </h1>
       </div>
       <div className="row p-3">
        <h1 className="text-center brand">UNITY <span>V</span>ISION</h1>
       </div>
       <div className="row p-5">
        <p className="text-center find">Find Your Passion</p>
       </div>
       <div className="row p-5">
        <div className="f-holder">
          <button className="btn btn-outline-light m-5 l-btn">News</button>
          <button className="btn btn-outline-light m-5 l-btn">Designs</button>
        </div>
       </div>
        </div>
       
<div className="f-holder" >
<img className="logo" src={logo}  style={{zIndex: '-1', position:'fixed',top:'25%'}}/>
</div>
       

      <WhatisNew />
      <SomeProducts />
      <Contact />
      <img className="black-bg" src={require('../images/black-bg.jpg')} />
        
        
        
        
        
        </>
    )
}