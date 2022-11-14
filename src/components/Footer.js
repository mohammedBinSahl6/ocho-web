import React, { useState } from "react";
import Logo from "./Logo";

export default function Footer(){
    const [so , setso] = useState()
    const cahnge1 = ()=>{
       setso( {backgroundColor : "#1773ea"}) 
    }
    const change2 = ()=>{
        setso( {background : "linear-gradient(to right , #523fcf,#8130bc,#dd2056,#f6ba50) "}) 
    }
    const change3 = ()=>{
        setso( {backgroundColor : "#1c9cea"})
    }
    const change4 = ()=>{
        setso( {backgroundColor : "#28cd46"})
    }
    const reset = ()=>{
        setso({})
    }

    
    return (
       <>
       <footer className="footer  text-white ">
            <div className="row">
                <h3 className="mt-3 px-5">UNITY VISION</h3>
            </div>
            <div className="row pt-5">
                <div className="col-sm-6">
                    <ul className="px-5">
                        <li className="f-link">Graphic Design</li>
                        <li className="f-link">video Editing</li>
                        <li className="f-link">create your Portofolio</li>
                        <li className="f-link">Social Media manegement</li>
                        <li className="f-link">Motion Graphics</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                <ul className="px-5">
                        <li className="f-link">Home</li>
                        <li className="f-link">FAQ</li>
                        <li className="f-link">Policy Privacy</li>
                        <li className="f-link">News</li>
                        <li className="f-link">Careers</li>
                        <li className="f-link">About</li>
                        <li className="f-link">Communities</li>
                        <li className="f-link">Our Work</li>
                    </ul>
                </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <h3 className="text-center pb-3">Contact</h3>
                        <ul className="contact-list text-center">
                            <li>+123-56-789</li>
                            <li><a href="google.com">unity.vision.20@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="text-center">| Find Your Passion |</h4>
                    </div>
                    <div className="col">
                        <Logo />
                    </div>
                </div>
                <div className="container-fluid social p-3" style={so}>
                    <div className="f-holder">
                        <a href="https://instagram.com"><i className='bx bxl-instagram-alt' onMouseLeave={reset} onMouseMove={change2}></i></a>
                        <a href="#"><i className='bx bxl-facebook-circle' onMouseMove={cahnge1} onMouseLeave={reset} ></i></a>
                        <a href="#"><i className='bx bxl-twitter' onMouseMove={change3}  onMouseLeave={reset}></i></a>
                        <a href="#"><i className='bx bxl-whatsapp-square' onMouseMove={change4}  onMouseLeave={reset}></i></a>
                    </div>
                </div>
            
        </footer>
        </>
    )
}