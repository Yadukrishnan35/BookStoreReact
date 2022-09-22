import { TextField } from '@mui/material';
//import { color } from '@mui/system';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import education from '../../Images/education.png';

import './dashBar.css';

function DashBar() {
    return (
        
    <nav className='main-nav'>
             <div className='logo'>
            <img 
            className='book_image'
            src={education} />
                <h2 style={{color:'white'}}>
                    BookStore
                </h2>
            
            </div>
         
            <div className="cart_profile">
            
            <BsPerson size="2rem" color='white'/>
            <AiOutlineShoppingCart size="2rem" color='white'/>
            </div>
            
        </nav>
           
        );
}
        
export default DashBar;