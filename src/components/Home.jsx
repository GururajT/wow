import React from 'react'
import Food from '../images/Food.png'
function Home() {
  return (
    <div className='Home'>
    
          <div className='ba'>
            <div className='ba1'>
              <h1>Enjoy Your Healthy Delicious Food</h1>
              <p>If you like Vegetarian cuisine,then bansiwala Kitchen is the prefect place for you and your Family to visit.</p>
              <button type="button" class="btn btn-danger">Book a Table</button>
              <button type="button" class="btn"><i class="fa fa-play-circle-o" aria-hidden="true"></i>Watch video</button>
            </div>
            <div className='ba2'>
             <img src={Food}/>
            </div>
          </div>
        
    </div>
         )
}

export default Home