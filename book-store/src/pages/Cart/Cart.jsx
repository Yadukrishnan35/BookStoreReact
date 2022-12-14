import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import MyCart from '../../components/myCart/MyCart';
import OrderSummery from '../../components/OrderSummery/OrderSummery';
import CartService from '../../services/CartService';
const cartService = new CartService();
function Cart(props) {
    
    const [cartArray, setcartArray] = useState([])
   
    useEffect(() => {
        getCartList();
    }, [])
    
    const getCartList = () => {
        cartService.getAllBooksFromCart()
            .then((res) => {
                console.log(res.data);
                setcartArray(res.data.Cart)
            }).catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <Header />
            {cartArray.length > 0 && cartArray.map((cart, index) => (
                <MyCart key={index} arrayCart={cart} getcart={getCartList} />
                
            ))}
            {/* <OrderSummery cartArray={cartArray}/> */}

            {/* <Mycart /> */}
        </div>
    );
}

export default Cart;