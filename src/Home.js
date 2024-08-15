import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import Main from './Main';
import Section from './Section';
import Collections from './Collections';
import Footer from './Footer';




export default function Home() {
      
    return(       
         <div >

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
                <li><Link to="./ShoppingCart.js"><i class="fa-solid fa-cart-shopping"></i></Link>  <br/> Cart</li> 
            </ul>    
            </nav>

            <Main/> 
            <Section/>
            <Collections/>
            <Footer/>
        </div>
        
    );
}