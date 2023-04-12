import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import kitchen from '../images/bansiwalakitchen.jfif'
function Header() {
  return (
    
    <nav className='navbar navbar-expand-sm bg-light navbar-light'>
        <div className='container-fluid'>
             <ul className='navbar-nav'>
                    <div className='Yummy'>
                    <li className='nav-item'>
                    <Link to="/" className='Yummy'><img src={kitchen}></img></Link>
                    </li>
                    </div>
                    <div className='ac2'>
                    <li className='nav-item'>
                    <Link to="/" className='a1'>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/About" className='a1'>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/Menu" className='a1'>Menu</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/Events" className='a1'>Events</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/Chefs" className='a1'>Chefs</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/Gallery" className='a1'>Gallery</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/Contact" className='a1'>Contact</Link>
                    </li>
                    </div>
                    <div className='ad'>
                    <li className='nav-item'>
                      <Link to="/Book" className='a1'>
                    <button type="button" class="btn btn-danger">Book a Table</button>
                       </Link>
                    </li>
                    </div>
            </ul>
                
        </div>
    </nav>
    
    )
}

export default Header