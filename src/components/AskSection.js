import React from "react";


export default function AskSection (){
    return(

        <div className="container-fluid" id="ask">
            <div className="row pt-5">
                <h3 className="h3 text-center" data-aos='fade-up'>Ask for your design and </h3>
                <h3 className="h3 text-center" data-aos='fade-up' data-aos-delay='300'>appoint a professional</h3>
            </div>
            <div className="row pt-5">
                <div className="f-holder p-3">
                    <a className="btn btn-outline-dark ex-btn" data-aos='fade-up' href='/fill-form' >Fill The Form</a>
                </div>
            </div>
        </div>


    )
}