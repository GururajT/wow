import React from 'react';


export default function Contact() {
  return (
    <div className='con'>  
      <div className='container-fluid'>
        <div className='ea'>
                    <h5>CONTACT</h5>
                    <h2>NEED HELP?<span> CONTACT US </span></h2>
                </div>
                <div className='Contact'>  
                <React.Fragment>
                      <div class="responsive-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!22.7358779,75.8864528"  allowfullscreen></iframe>
                      </div>
                </React.Fragment>
        </div>
          <div className='ha'>
              <div className='ha1'>
                <div className='hb'>
                  <i class="fa fa-map" aria-hidden="true"></i>
                </div>
                <div className='hb1'>
                  <h4>Our Address</h4>
                  <p>C-16 H.I.G. Colony in front of Christian Eminent school.,</p>
                </div>
              </div>
              <div className='ha2'>
                <div className='hb'>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className='hb1'>
                  <h4>Email Us</h4>
                  <p>contact@example.com</p>
                </div>
              </div>
          </div>
          <div className='ha'>
              <div className='ha1'>
                <div className='hb'>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className='hb1'>
                  <h4>Call Us</h4>
                  <p>+91 9630088808</p>
                </div>
              </div>
              <div className='ha2'>
                <div className='hb'>
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                </div>
                <div className='hb1'>
                  <h4>Opening Hours</h4>
                  <p><b>Mon-Sat:</b> 9AM - 11PM; <b>Sunday:</b> Closed</p>
                </div>
              </div>
          </div>
          <div className='hc'>
              <div class="container mt-3">
                <form>
                    <div className='hc2'>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Name" name="Name"></input>
                        </div>
                        <div class="col">
                          <input type="password" class="form-control" placeholder="Your Email" name=" Email"></input>
                        </div>
                      </div>
                    </div>
                    <div className='hd'>
                         <input type="text" class="form-control mt-3" placeholder="Subject"></input>
                    </div>
                    <div class="mb-3 mt-3">
                         <textarea class="form-control" rows="4" id="comment" placeholder="Message" name="text"></textarea>
                     </div>
                     <div className='hf'>
                     <button type="button" class="btn btn-danger">Send Message</button>
                     </div>
                </form>
             </div>
           
          </div>
      </div>  
    </div>  
  )
}
