import Login from "../components/login/Login";
import SignUp from "../components/sighnUp/SignUp";
import trolly from './../Images/trolly.png';
import './HomePage.css';
 
import React, { useState } from 'react';
import { Button } from "@mui/material";

function HomePage() {
    const [activeClick, setactiveClick] = useState(true);
    const activeLogin = () => {
        setactiveClick(false);
    };

    const activeSignup = () => {
        setactiveClick(true);
    };
    return (
        
        <div className='main-container'>
            <div className='box-container'>
                <div className='leftBox'>
                    <div className='trollyImage'>
                        <img src={trolly} alt="" className='image'>
                        </img>
                    </div>
                    <div ><h4>ONLINE BOOK SHOPPING</h4></div>
                </div>
                <div className='rightBox'>
                    <div className='tabs'>
                        <div className='loginTab' onClick={activeLogin} >
                        <Button style={{fontSize:20,fontWeight:600,color:"black"}}>LOGIN</Button>
                                <div
                                LOGIN
                                ></div>
                        </div>
                        <div className="signUp" onClick={activeSignup} style={{ fontWeight: 700, fontSize: 30 }}>
                            <Button style={{fontSize:20,fontWeight:600,color:"black"}}>SIGNUP</Button>
                        </div>
                    </div>
                    <div >
                        {activeClick ? <SignUp /> : <Login />}
                    </div>
                </div>
                
            </div>

        </div>
    );
}
export default HomePage;