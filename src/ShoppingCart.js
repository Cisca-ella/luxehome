import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ShoppingCart.css';


export default function ShoppingCart() {
    return(
       
        <div className='parent-div'>
           <div className='shop-div'>
            <div className='container'>
              <div className='rowx'>
                <h5 className='mt-4'>Shopping Cart</h5>
                <h5 className='mt-4'>3 items</h5> 
                
              </div>
              <div className='rowx mt-3'>
                    <p>Product Details</p>
                    <p>Quantity</p>
                    <p>Price</p> 
                    <p>Total</p> 
                </div>
                <div className='rowxx mt-2'>
                    <div className='imx-1'>
                        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/054/original/01984a81c3225c0ebb7b0fe67b4cf85b.png?1723128755" alt="" srcset="" className='couch'/>
                        <div className='imx-text'>
                            <p className='p1'>Black Leather Sectional Sofa</p>
                            <p className='p2'>Sofa</p>
                            <p className='p3'>Remove</p>
                        </div>
                    </div>
                    <div className='imx-2'>
                        <p className='p2'>-</p> 
                        <p className='p-b'>2</p> 
                        <p className='p2'>+</p> 

                    </div>
                    <div className='pr-t'>
                        <p>NGN120,000</p>
                    </div>
                    <div className='tx-t'>
                        <p>NGN240,000</p>
                    </div>
                </div>
                <div className='rowx mt-3'>
                    <div className='imx-1'>
                        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/055/original/chair.png?1723128937" alt="" srcset="" className='couch'/>
                        <div className='imx-text'>
                            <p className='p1'>White Marble Top Dining Table</p>
                            <p className='p2'>Dinning Table</p>
                            <p className='p3'>Remove</p>
                        </div>
                    </div>
                    <div className='imx-2'>
                        <p className='p2'>-</p> 
                        <p className='p-b'>1</p> 
                        <p className='p2'>+</p> 

                    </div>
                    <div className='pr-t'>
                        <p className='p2'>NGN120,000</p>
                    </div>
                    <div className='tx-t'>
                        <p className='p2'>NGN120,000</p>
                    </div>
                </div>
                <div className='rowx mt-3'>
                    <div className='imx-1'>
                        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/056/original/bed.jfif?1723129051" alt="" srcset="" className='couch'/>
                        <div className='imx-text'>
                            <p className='p1'>Dark Oak King Size Bedframe</p>
                            <p className='p2'>BedFrame</p>
                            <p className='p3'>Remove</p>
                        </div>
                    </div>
                    <div className='imx-2'>
                        <p className='p2'>-</p> 
                        <p className='p-b'>1</p> 
                        <p className='p2'>+</p> 

                    </div>
                    <div className='pr-t'>
                        <p className='p2'>NGN200,000</p>
                    </div>
                    <div className='tx-t'>
                        <p className='p2'>NGN200,000</p>
                    </div>
                </div>
                <div className='rowx mt-3'>
                    <div className='imx-1'>
                        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/057/original/coff.png?1723129130" alt="" srcset="" className='couch'/>
                        <div className='imx-text'>
                            <p className='p1'>Espresso Wood Coffee Table</p>
                            <p className='p2'>Coffee Table</p>
                            <p className='p3'>Remove</p>
                        </div>
                    </div>
                    <div className='imx-2'>
                        <p className='p2'>-</p> 
                        <p className='p-b'>2</p> 
                        <p className='p2'>+</p> 

                    </div>
                    <div className='pr-t'>
                        <p className='p2'>NGN60,000</p>
                    </div>
                    <div className='tx-t'>
                        <p className='p2'>NGN120,000</p>
                    </div>
                </div>
                <div className='rowx mt-3'>
                    <div className='imx-1'> 
                        <p className='cs'><a href="./App.js" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-left"></i></a></p>
                        <p className='cs'><a href="./App.js" target="_blank" rel="noopener noreferrer">continue shopping</a></p>
                    </div>
                </div>
              </div>
            </div> 


            <div className='order-div'>
            <div className='container'>
                    <div className='os'>
                        <h5 className='mt-4'>Order Sumary</h5>
                    </div>
                    <div className='itm'>
                        <p>4 Items</p>
                        <p>NGN700,000</p>
                    </div>
                    <div className='itm'>
                        <p>PAYMENT METHOD</p>
                    </div>
                    <div className='bank-div'>
                    <select class="form-select bktf" aria-label="Default select example">
                         <option selected>Bank Transfer</option>
                         <option value="1">Debit Cards</option>
                         <option value="2">Cryptocurrency</option>
                         <option value="3">Wallet</option>
                    </select>
                    </div>
                    <div class="mt-5">
                        <label for="exampleFormControlInput1" class="form-label promo">PROMO CODE</label>
                        <input type="email" class="form-control bktf" id="exampleFormControlInput1" placeholder="Enter your Code"/>
                    </div>
                    <div className='mt-4 itm'>
                        <button className='apply-btn'>APPLY</button>
                    </div>
                    <div className='mt-5 '>
                            <p className='line-text'>_______________________</p> 
                    </div>
                    <div className='itm'>
                        <h5 className='total-text'>TOTAL COST</h5>
                        <h6 className='total-text2'>NGN700,000</h6>
                    </div>
                    <div className='mt-4 ckb'>
                        <button className='check-btn'>CHECKOUT</button>
                    </div>
             </div>
            </div>

        </div>
       
       
    );
    
}