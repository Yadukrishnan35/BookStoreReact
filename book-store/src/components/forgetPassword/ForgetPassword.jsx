import { Button, TextField } from '@mui/material';
import { width } from '@mui/system';

import React from 'react';
import './ForgetPassword.css'; 
function ForgetPassword(props) {
    return (
        <div className='centreAlign'>
            <div className="heading_tag">
                <h3>Forgot Your Password?</h3>
            </div>
            <div class="centrebox">
            <div class="box_with_paddingg">  
            <div>
               
               <div className='paragraph'>
               <span
                >Enter your email address and we'll send you a link to reset
                your password</span>
                </div>
                <div class="email">
                <TextField
                style={{width:300}}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
            />
                </div>
                <div className='reset_button'>
                <Button style={{backgroundColor:"#A03037",color:'white'}}>Reset</Button>
                </div>
                <div>
                  <Button  style={{width:300,marginTop:70,fontSize:20,fontWeight:'bold',color:"black"}}
                    >CREATE ACCOUNT</Button>
                  
                </div>
                 
            </div>
            </div> 
            </div>
        </div>
    );
}

export default ForgetPassword;