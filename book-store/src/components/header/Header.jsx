import React from 'react';
import './Header.css';
//import eduaction from '../../Images/education.png';
import education from '../../Images/education.png';
import { AppBar, TextField, Toolbar } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
function Header(props) {
    const navigate = useNavigate();
    const cart = () => {
        navigate('/cart')
    };
    return (
<div>
           <div className='MainBar'>
            <AppBar>
        <Toolbar  style={{backgroundColor:'#a03037',height:20}}>
            <div className='educationImg' style={{marginLeft:190}}>
            <img style={{marginTop:-20}}
            className='book_image'
            src={education} />
            </div>
            <div style={{marginLeft:10}}>
           <h3>Bookstore</h3>
            </div>

            <div className='Search' style={{backgroundColor:'white',marginLeft:40}}>
                <TextField
                className='searchBox'
                style={{width:600}}
                size='small'
                label='search'>
                {/* <div>
                    <img src={SearchImg} alt=''></img>    
                </div> */}
                
                   
                </TextField>
            </div>
            <div className='cartIcon'>
                <div>
                <BsPerson size="2rem" color='white'/>
                <div style={{marginBottom:-10}}>
                Person
                </div>
            </div>                
            <div onClick={cart}>
            <AiOutlineShoppingCart size="2rem" color='white'/>
            <div style={{marginBottom:-10}}>
            Cart
            </div>
            </div>
            </div>
            
        </Toolbar>
      </AppBar>
        </div> 
        </div>
    );
}

export default Header;