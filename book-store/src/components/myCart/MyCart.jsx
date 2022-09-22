import React, { useState } from 'react';
import Header from '../header/Header';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import bookImage from '../../Images/bookImage.png';
//import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
//import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRounded from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';
import './MyCart.css';
import { Button } from '@mui/material';
import CustomerDetails from '../customerDetails/CustomerDetails';
function MyCart(props) {

    const [customerDetails, setCustomerDetails] = useState(false)
    const [orderSummery, setOrderSummery] = useState(false)

    const customerDetailsOpen = () => {
        setCustomerDetails(true);
    }

    const ordersummery = () => {
        setOrderSummery(true);
    }
    
        return (
            
            <div className='header_controller'>
            <Header></Header>
            <div className='cartcontainer'>
                    <div className="cart-heading">
                        <span className='mycartheading'>Mycart</span>
    
                         <div className='location'><LocationOnOutlinedIcon className='locationicon' /> <button className='locationbutton' >Use Current Location</button></div> 
                    </div>
    
                    {/* {cartArray.length >0 && cartArray.map((cart, index) =>(
                        <div key={index}> */}
    
                    <div className='cartDetails'>
                        <img className='cartimage' src={bookImage}></img>
                        <div className='bookdetails'>
                            <span className='bookname'>UxDummies</span>
                            <span className='author'>by Stephen</span>
                            <span className='price'> Rs.1500</span>
                        </div>
    
    
                    </div>
    
    
                    <div className='cartQuantity'>
                        <RemoveCircleOutlineRounded  decrement className='add' />
                        <span className='cartnumber'>10</span>
                        <AddCircleOutlineRounded  increment className='add' />
    
                        <span >Remove</span>
                    </div>
                    {/* 
                        </div>
                  ) )} */}
    
    
                    <div className="placeorderbutton">
                        
                        <Button onClick={customerDetailsOpen} style={{
                            width: '150px',
                            height: '35px',
                            backgroundColor: '#3371B5',
                            color: '#FFFFFF',
                            fontSize: '13px',
                            
                                
                        }}>PLACE ORDER</Button>
                    </div>
                </div>
                
                        <div onClick={customerDetailsOpen} className='addressPlace'>
                            
                            <span style={{marginLeft:-600}}>AddressDetails</span>
                            <div >
                        {customerDetails ? <CustomerDetails/> :''}
                        
                    </div>
                      
                    </div>
                        <div className='orderPlace'>
                            <span style={{marginLeft:-600}}>OrderSummery</span>

                        </div>

                </div>
                
        );
    }

export default MyCart;