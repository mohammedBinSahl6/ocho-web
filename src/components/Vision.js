import React from "react";

export default function Vision(){
    return(
        <div className="container-fluid " id="vision">
            <div className="row pt-5">
                <h1 className="head text-center">UNITY VISION'S VISION</h1>
            </div>
                <div className="row pt-3">
                    <div className="col-sm-6">
                        <h3 className="subtitle text-center" data-aos='fade-up'>Best Sells in Year</h3>
                        <p className="d-new text-center pt-3 px-3" data-aos='fade-up'>
                        I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your own content
                and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
                I’m a great place for you to tell a story and let your users know a little more about you. ​
                    This is a great space to write long text about your company
                    and your services. You can use this space to go into a little more detail about your company. 
                    Talk about your team and what services you provide. Tell your visitors the story of how you
                    came up with the idea for your business and what makes you different from your competitors
                    . Make your company stand out and show your visitors who you are.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="diagram-body">
                            <div className='diagram'>
                                <div className="idea-1" data-aos='fade-down-right'>
                                    <h2 className="text-center">Planing</h2>
                                </div>
                                <div className="ar-h"  data-aos='fade-down-right' data-aos-delay='500'><i className='bx bx-chevrons-left arrow'></i></div>
                                <div className="idea-2"  data-aos='fade-down-right'  data-aos-delay='1000'>
                                    <h2 className="text-center">Working</h2>
                                </div>
                                <div className="ar-h-2"  data-aos='fade-down-left'  data-aos-delay='1500'><i className='bx bx-chevrons-left arrow'></i></div>
                                <div className="idea-3"  data-aos='fade-down-left'  data-aos-delay='2000'>
                                    <h2 className="text-center" >Successful</h2>
                                </div>
                                


                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}