import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import './Login.css';
function Login(props) {
    return (
        <div className='container'>
            
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
            />
            <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                size="small"
            />
             <div class="Forget_password">
             <Link to = 'https://google.com/'>Forgot password?</Link>
      </div>
      <div className="login_btn">
          <Button className="login-btn">
            <div style={{color:'white'}}>login
            </div>
            </Button>
            </div>
   
      <div>
      <p>--------<b>OR</b>--------</p>
      </div>
      <div className='other_btn' >
      <button
      className='facebook_btn'
      >Facebook</button>
      
      <button 
       className='google_btn'
       >Google

       </button>
        </div>
        </div>

    )
}

export default Login;