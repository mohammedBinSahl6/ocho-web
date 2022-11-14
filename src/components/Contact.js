import React from "react";

export default function Contact(){
    return(
        <div className="container-fluid">
            <div className="row pt-5">
                <h1 className="head text-center text-white" data-aos='fade-up'>Contact Us</h1>
            </div>
            <div className="f-holder py-5">
            <div className="card-form p-5" data-aos='fade-up'>
           <form>
                <div className="form-group" data-aos='fade-up' data-aos-delay='300'>
                    <label for='fname' className="form-label">First Name</label>
                    <input className="form-control" placeholder="First Name..." type='text' id="fname"></input>
                </div>
                <div className="form-group" data-aos='fade-up' data-aos-delay='600'>
                    <label for='lname' className="form-label">Last Name</label>
                    <input className="form-control" placeholder="Last Name..." type='text' id="lname" />
                </div>
                <div className="form-group" data-aos='fade-up' data-aos-delay='900'>
                    <label for='email' className="form-label">Email</label>
                    <input className="form-control" placeholder="Your Email" type='email' id="email" />
                </div>
                <div className="form-group" data-aos='fade-up' data-aos-delay='1200'>
                    <label for='msg' className="form-label">Youe Message</label>
                    <textarea className="form-control" placeholder="Message..." type='text' id="msg" rows='5'></textarea>
                </div>
                <div className="form-group" data-aos='fade-up' data-aos-delay='1600'>
                    <input className="btn btn-outline-dark mt-3 "  type='submit' id="submit-msg" />
                    <input className="btn btn-outline-danger mt-3 mx-3 "  type='reset' id="reset-msg" />
                </div>
            </form>
           </div>
            </div>
        </div>
    )
}