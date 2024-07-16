import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'


export default function Footer() {
    return(
        <div className='foot'>
           <div className='container mt-3'>
               <div className='row'>
                  <div className='col-md-3 mt-5'>
                    <div className='foot-div'>
                    <h5>Luxehome.</h5>
                    <p> 
                        2,Isikalu Street Olodi-apapa <br/> Lagos Nigeria <br/>
                        Contact: +23481645133
                    </p>
                    </div>
                  </div>
                 <div className='col-md-2 mt-5'>
                  <div className='links-div'>
                    <h5>Links</h5>
                    <a href="http://">Home</a> <br/>
                    <a href="http://">Shop</a><br/>
                    <a href="http://">About</a><br/>
                    <a href="http://">Contact</a>
                  </div>
                  </div>
                 <div className='col-md-2 mt-5'>
                  <div className='help-div'>
                    <h5>Help</h5>
                    <a href="http://">Payment Options</a><br/>
                    <a href="http://">Return</a><br/>
                    <a href="http://">Privacy Policies</a>
                  </div>
                  </div>
                 <div className='col-md-5 mt-5'>
                  <div className='nl-div'>
                    <h5>Newsletter</h5>
                    <form action="">
                        <input type="email" name="email" id="" placeholder="Enter your email address" className=" boxx"/>
                       <input type="button" value="Subscribe" className=" box"/>
                   </form>

                  </div>
                 </div>
             </div>
             <p className='lin-div'>_____________________________________________________________________________________________________________________________________________________________________</p>
             <div class="text-center mt-4">
                  Copyright <i class="fa-regular fa-copyright"></i> 2024 Luxehome. All Rights Reserved
             </div>
            </div>
            
        </div>
    )
}