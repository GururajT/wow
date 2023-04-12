import React from 'react'
import papad from '../images/papad.jpg'
import roti from '../images/roti.jpg'
import veg from '../images/veg.jpg'
import menu1 from '../images/menu1.jpg'
import starter from '../images/starter1.jpg'
import panner from '../images/panner.jpg'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu() {
  return (
   <div className='Menu'>
        <div className='container-fluid'>
            <div className='ea'>
                <h5>OUR MENU</h5>
                <h2>CHECK OUR<span> YUMMY MENU</span></h2>
            </div>
            <div class="container mt-3">
                 <div className='menunav'>
                    <nav class="navbar navbar-expand-sm  justify-content-center">
                    <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/Menu" className='e1'>Staters</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Menu/breakfast" className='e1'>Breakfast</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/Menu/lunch" className='e1'>Lunch</Link>
                            </li>
                            <li class="nav-item/dinner">
                            <Link to="/" className='e1'>Dinner</Link>
                            </li>
                        </ul>
                    </nav>
                 </div>
            </div>
            <div className='ea'>
                <h5> MENU</h5>
            </div>
            <div className='container Index'>
                <div className='Ind'>
                    <div className=' col-md-4 Ind1'>
                    <img src={menu1}/>
                    <h3 >Breakfast</h3>
                    </div>
                    <div className='Ind1'>
                    <img src={starter}/>
                    <h3>starter & Fast Food</h3>
                    </div>
                    <div className='Ind1'>
                    <img src={papad}/>
                    <h3>Starter Course</h3>
                    </div>
                </div>
            </div>
            <div className='container Index'>
                <div className='Ind'>
                    <div className='col-md-4 Ind1'>
                    <img src={panner}/>
                    <h3>Panner</h3>
                    </div>
                    <div className='Ind1'>
                    <img src={veg}/>
                    <h3>Veg Dishes & Dal</h3>
                    </div>
                    <div className='Ind1'>
                    <img src={roti}/>
                    <h3>Roti and sweets</h3>
                    </div>
                </div>
            </div>            
        </div>
   </div>
    )
}
export default Menu