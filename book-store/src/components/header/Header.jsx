import React, { useState } from 'react';
import './Header.css';
//import eduaction from '../../Images/education.png';
import education from '../../Images/education.png';
import { AppBar, Menu, MenuItem, TextField, Toolbar } from '@mui/material';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Logout, PersonOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
function Header(props) {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const cart = () => {
        navigate('/cart')
    };

    const searching = (event) => {
        props.search(event.target.value)
    }

    const goToWishlist = () => {
        navigate('/getallwishlist')
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    
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

            <div className='Search' style={{backgroundColor:'white',marginLeft:40}} onChange={searching} >
                
                <TextField 
                // <AiOutlineSearch size= "2rem"/>
                            
                className='searchBox'
                
                
                style={{width:600}}
                size='small'

                placeholder='search'>
                    
                {/* <div>
                    <img src={SearchImg} alt=''></img>    
                </div> */}
                
                   
                </TextField>
            </div>

            <div className="profile">
                    <BsPerson size="2rem" style={{ color: '#FFFFFF' }} />
                    <span
                        className="profile-name"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >Yadu </span>
                    <Menu
                        id="basic-menu"

                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={goToWishlist}>
                            <FavoriteIcon>
                            </FavoriteIcon>
                            {/* <ListItemText>My Wishlist</ListItemText> */}
                            <span className='MyWishlist'>My Wishlist</span>
                        </MenuItem>
                        <MenuItem className='Logout'>
                            <span onClick={logout} className='Logout'>Logout</span>
                        </MenuItem>

                    </Menu>



                </div>

            <div className='cartIcon'>
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