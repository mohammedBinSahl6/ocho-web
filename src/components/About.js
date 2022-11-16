import React, { useEffect } from "react";
import logo from '../images/v-logo.svg'
import AA1 from "./vectors/AA1";
import AA2 from "./vectors/AA2";
import AngleAbout1 from "./vectors/Angle-about1";
import AngleAbout2 from "./vectors/Angle-about2";
import Cys from "./vectors/Cys";
export default function About(){
    useEffect(() => {
        document.title = 'UVISION | About';
      });
    return(
        <div className="container-fluid" id="about">
             <div className="land  ">
       
                <div className="row p-3">
                    <h1 className="text-center display-1 text-white">About </h1>
                </div>
                <div className="row p-3">
                    <h1 className="text-center brand">UNITY <span>V</span>ISION</h1>
                </div>
                <div className="row story">
                    <h1 className="text-center text-white">Our Story</h1>
                    <i class='bx bxs-down-arrow text-center text-white'></i>
                </div>
       
        </div>

        <div className="container-fluid our-start">
            <Cys />
            
            <div className="row pt-5">
                <h1 className="head p-5">How we started ....</h1>
            </div>

            <div className="row mt-3 p-5">
                <div className="para p-5 col-sm-8">
                    <AA1 />
                    <h2 className="h2 mb-5">Gathering the team</h2>
                    <p>I am outgoing. I am the type of person who will talk to anyone easily. When weget into groups in class I will always try to be the first one to start talking to andnot make it so awkward between my group. Another way I show that I amoutgoing is with my best friend. I am always the most talkative one out of the twoof us. I usually talk way more with people I am already comfortable with and withher it’s like I can be myself and she won’t judge me. Lastly, my favorite place toshow how outgoing I am, is with the people that are just like me or maybe evenmore outgoing, which is my family. Every time we get to get together we always</p>
                </div>
            </div>

            <div className="row mt-3 p-5">
                <div className="para p-5 col-sm-8">
                    <AA2 />
                    <h2 className="h2 mb-5">Creative Founders</h2>
                    <p>I am outgoing. I am the type of person who will talk to anyone easily. When weget into groups in class I will always try to be the first one to start talking to andnot make it so awkward between my group. Another way I show that I amoutgoing is with my best friend. I am always the most talkative one out of the twoof us. I usually talk way more with people I am already comfortable with and withher it’s like I can be myself and she won’t judge me. Lastly, my favorite place toshow how outgoing I am, is with the people that are just like me or maybe evenmore outgoing, which is my family. Every time we get to get together we always</p>
                </div>
            </div>


        </div>

        <div className="container-fluid " id='team'>
            <div className="row pt-5">
                <h1 className="text-center">Founders</h1>
            </div>
            <div className="row pt-5">
                <div className="col-sm-6 p-5">
                    <div className="member p-3">
                        <AngleAbout1 />
                        <h2> <i class='bx bxs-user-circle'></i> Mohammed Bin Sahl</h2>
                        <h3>Web Developer</h3>

                    </div>
                </div>
                <div className="col-sm-6 p-5">
                    <div className="member p-3">
                        <AngleAbout1 />
                        <h2> <i class='bx bxs-user-circle'></i> Abdulrahman Abdulqader</h2>
                        <h3>Graphic Designer</h3>
                        
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 p-5">
                <div className="member p-3">
                    <AngleAbout2 />
                        <h2> <i class='bx bxs-user-circle'></i>Abdullah Taom</h2>
                        <h3>Marketing Maneger</h3>
                        
                    </div>
                </div>
                <div className="col-sm-6 p-5">
                <div className="member p-3">
                    <AngleAbout2 />
                        <h2> <i class='bx bxs-user-circle'></i>Yasser Ahmed</h2>
                        <h3>Graphic Designer</h3>
                        
                    </div>
                </div>
                
            </div>
        </div>
       
            <div className="f-holder" >
            <img className="logo" src={logo}  style={{zIndex: '-1', position:'fixed',top:'25%'}}/>
            </div>
        </div>
    )
}