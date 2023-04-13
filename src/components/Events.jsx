import React from 'react'
import events1 from '../images/pic5.jpg'
import events2 from '../images/pic2.jpg'
import events3 from '../images/picii.jpg'
import Carousel from 'react-bootstrap/Carousel';
export default 
function Events() {
  return (
    <div className='Events'>
        <div className='container-fluid'>
            <div className='ea'>
                <h5>EVENTS</h5>
                <h2>SHARE<span> YOUR MOMENTS </span> IN OUR RESTRAURNT</h2>
            </div>
            
                <Carousel>
                        <Carousel.Item>
                            <img class="img_content"src={events1}/>
                                <Carousel.Caption>
                                    <h3>Family Parties</h3>
                                    <p>A Perfect Destination for family and cultural gathering and Parties .</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                    <Carousel.Item>
                        <img src={events2}/>
                            <Carousel.Caption>
                                <h3>Family Parties</h3>
                                <p>A Perfect Destination for family and cultural gathering and Parties .</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={events3}/>
                                <Carousel.Caption>
                                    <h3>Family Parties</h3>
                                    <p>A Perfect Destination for family and cultural gathering and Parties .</p>
                                </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
       
    </div>
    
  )
}
