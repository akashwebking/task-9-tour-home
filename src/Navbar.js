import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <h1>TamilNadu Tourism</h1>
            <div>
                <ul>
                    <Link to="/"><li><a>Home</a></li></Link> 
                   
                    <li><a>Place To Visit</a></li>
                    <li><a>Best Time to Visit</a></li>
                    <li><a>Package</a></li>
                    <li><a>Destination</a></li>
                    <li><a>Food</a></li>
                    
                </ul>
            </div>

        </div>
    )
}
export default Navbar;