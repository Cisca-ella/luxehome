import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css"



export default function Home() {
    return(
        <div className='container'>
            <nav className='navbar'>
            <div className='lh'>
                <h2>LuxeHome</h2>
            </div>
            <ul>
                <div className='h-i'>
                <li><i className="fa-solid fa-house"></i><br/> Home</li>
                </div>
                 
                <li className='sc'>
                <input type='text' placeholder='search your item' className='sb'/> 
                <span className='si'><i className="fa-solid fa-magnifying-glass"></i></span>
                </li>
                <li> <i className="fa-solid fa-user"></i><br/> Account</li> 
                <li><a href="./ShoppingCart.js" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-cart-shopping"></i></a>  <br/> Cart</li> 
            </ul>    
            </nav>

           
        </div>
    );
}