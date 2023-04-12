import React from 'react'
import about from '../images/about.jpg'
import imgg from "../images/imgg.jpg"
import imggg from "../images/imggg.jpg"
function About
() {
  return (
    <div className='About'>
        <div className='container-fluid'>
           <div className='about'>
             <h5>ABOUT US</h5>
             <h2>LEARN MORE<span> ABOUT US</span></h2>
           </div>
           <div className='ca'>
             <div className='ca1'>
               <div className='ca12'>
                   <h2>Book a Table</h2>
                   <p>+91 9630088808</p>
               </div>
             </div>
             <div className='ca2'>
               <p>If you like Vegetarian cuisine, come to this restaurant. Drink the good juice offered here. </p>
               <p><i class="fa fa-thumb-tack" aria-hidden="true"></i>Most users state that the staff is gracious.</p>
               <p><i class="fa fa-thumb-tack" aria-hidden="true"></i>The cool service shows a high level of quality at City Heart Restaurant..</p>
               <p><i class="fa fa-thumb-tack" aria-hidden="true"></i>The homey atmosphere is to be found here. This place scored 4.2 in the Google rating system.</p>
               <p>If you like Vegetarian cuisine, come to this restaurant. Drink the good juice offered here. Most users state that the staff is gracious. 
                The cool service shows a high level of quality at City Heart Restaurant. The homey atmosphere is to be found here. This place scored 4.2 in the Google rating system.
               </p>
               <img src={imggg}/>
             </div>
           </div>
           <div className='d1'>
              <div class="db">
                <div class="dc">
                    <h1>232</h1>
                    <p>Clients</p>
                </div>
                <div class="dc">
                    <h1>512</h1>
                    <p>Projects</p>
                </div>
                <div class="dc">
                    <h1>1453</h1>
                    <p>Hours Of Support</p>
                </div>
                <div class="dc">
                    <h1>32</h1>
                    <p>Workers</p>
                </div>
              </div>
           </div>          
           <div className='cb'>
                <div className='cb1'>
                   <h2>Why Choose <br></br>Bansiwala Kitchen?</h2>
                   <p>If you like Vegetarian cuisine, come to this restaurant. Drink the good juice offered here. Most users state that the staff is gracious. The cool service shows a high 
                    level of quality at City Heart Restaurant. The homey atmosphere is to be found here. This place scored 4.2 in the Google rating system.</p>
                    <button type="button" class="btn btn-danger">Learn More</button>
                </div>
                <div className='cb2'>
                  <i class="fa fa-clipboard" aria-hidden="true"></i>
                  <h4>Variety in Dishes</h4>
                  <p>We have over 100+ variety of dishes,and all are super Delicious in taste</p>
                </div>
                <div className='cb3'>
                <i class="fa fa-diamond" aria-hidden="true"></i>
                  <h4>Best Chefs</h4>
                  <p>We have the best Chefs that hold 10+ years of experience in the field</p>
                </div>
                <div className='cb4'>
                <i class="fa fa-inbox" aria-hidden="true"></i>
                  <h4>Suitable & friendly Enviroment</h4>
                  <p>Our Hotel is in one of the prime location in the Area</p>
                </div>
           </div>
          
         </div>
    </div>
  )
}
export default About
