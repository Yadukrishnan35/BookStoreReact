import React, { useEffect, useState } from 'react';
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
import CartService from '../../services/CartService';
import OrderSummery from '../OrderSummery/OrderSummery';
import { useNavigate } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const cartService = new CartService();
const orderService=new OrderService();

function MyCart(props) {
    const navigate = useNavigate();
    const [customerDetails, setCustomerDetails] = useState(false)
    const [orderSummery, setOrderSummery] = useState(false)

    const customerDetailsOpen = () => {
        setCustomerDetails(true);
    }

    const ordersummeryOpen = () => {
        setOrderSummery(true);
    }
    useEffect(() => {
        props.getcart()
    }, [])

    const increment = (props) => {
        // console.log(props.arrayCart.id)
        let data = {
            'id': props.arrayCart.id
        }
        console.log("Increment is calling");
        console.log(data);
        cartService.incrementCartQuanitity(data)
            .then((res) => {
                console.log(res);
                props.getcart();

            }).catch((err) => {
                console.log(err);
            })

    }

    const decrement = (props) => {
        let data = {

            'id': props.arrayCart.id
        }

        cartService.decrementCartQuanitity(data)
            .then((res) => {
                console.log(res);
                props.getcart();

            }).catch((err) => {
                console.log(err);
            })
    }
    const removeCart = (props) => {
        console.log(props.arrayCart.id)
        let data = {

            'id': props.arrayCart.id
        }
        cartService.deleteBookFromCart(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    const checkout = (props) => {
        console.log(props.id)
        let data = {

            'address_id': 1,
            'name': props.arrayCart.name,
            'quantity': props.arrayCart.book_quantity
        }
        orderService.placeOrder(data)
            .then((res) => {
                console.log(res)
                navigate('/orderSuccess')

            }).catch((err) => {
                console.log(err);
            })
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
                        <span className='bookname'>{props.arrayCart.name}</span>
                        <span className='author'>{props.arrayCart.author}</span>
                        <span className='price'> Rs.{props.arrayCart.Price}</span>
                    </div>


                </div>


                <div className='cartQuantity'>
                    <RemoveCircleOutlineRounded onClick={() => decrement(props)} decrement className='add' />
                    <span className='cartnumber'>{props.arrayCart.book_quantity}</span>
                    <AddCircleOutlineRounded onClick={() => increment(props)} increment className='add' />

                    <span onClick={() => removeCart(props)}>Remove</span>
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


            {customerDetails ? <CustomerDetails />
                : <div onClick={customerDetailsOpen} className='addressPlace'>

                    <span style={{ marginLeft: -600 }}>AddressDetails</span>
                </div>}
            {orderSummery ? <div className='ordercontainer'>
                <div >
                    <span className='addressbuttons'>Order Summary</span>
                </div>


                <div className='cartDetails'>
                    <img className='cartimage' src={bookImage}></img>
                    <div className='bookdetails'>
                        <span className='bookname'>{props.arrayCart.name}</span>
                        <span className='author'>{props.arrayCart.author}</span>
                        <span className='price'> {props.arrayCart.Price}</span>
                    </div>


                </div>
                <div className="continuebutton" onClick={() => checkout(props)} >
                    <Button className="continuebutton" style={{
                        width: '150px',
                        height: '35px',
                        backgroundColor: '#3371B5',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        marginTop: '5px',

                    }}>CHECKOUT</Button>
                </div>
            </div>
                : <div onClick={ordersummeryOpen} className='orderPlace'>
                <span style={{ marginLeft: -600 }}>OrderSummery</span>
                </div>}

        </div>





    );
}

export default MyCart;