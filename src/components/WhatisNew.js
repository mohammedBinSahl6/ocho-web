import React from 'react'

export default function WhatisNew(){
    return (
       <div className='container-fluid p-3 ' id='new'>
        <div className='row pt-5'>
            <h1 className='head text-center ' data-aos='fade-up'>What is New !?</h1> 
        </div>
        <div className='row pt-5'>
           
           
            <div className='col-sm-6'>
            <h2 className='subtitle text-center'  data-aos='fade-up'>24hrs Costumer Service</h2>
            <img className='img-fluid p-3' src={require('../images/new.jpg')}  data-aos='fade-up' />
            </div>
            <div className='col-sm-6'>
                <p className='d-new'  data-aos='fade-up'>I'm a paragraph. Click here to add your own text and edit me.
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
           

                
                

             
            </div>
       </div>
       
       )
}