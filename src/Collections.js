import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Collections.css'

export default function Collections() {
    return(
        <div className='cont mt-5'> 
        <div className='container mt-5 '>
             <div className='row'>
                <div className='col'>
                    <div className='text-div'>
                        <h3>Product Collections</h3>
                        <p>
                        Choose from these combination collection 
                        of our products carefully selected by our
                         company experts
                        </p>
                        <div className='btx'>
                            <button>Explore More</button>
                        </div>
                    </div>
                    
                </div>
                <div className='col'>
                    <div className='img'>
                         <div className='ime-1'>
                            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/059/original/bedd.png?1723129584" alt="" srcset="" className='img-fluid'/>
                        </div>
                    </div>
                   
                </div>
                <div className='col'>
                    <div className='img'>
                        <div className='ime-2'>
                            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/060/original/whit.jfif?1723129615" alt="" srcset="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
                
             </div>
             </div>





          

        </div>
    );
}