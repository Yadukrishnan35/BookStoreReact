import { Button, TextField } from '@mui/material';
import { width } from '@mui/system';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import './ForgetPassword.css'; 
const userservice = new UserService();
function ForgetPassword(props) {
    const navigate = useNavigate();
    const signUp = () => {
        navigate('/')
    };
    const[text,setText] =React.useState({
        email:'',
        // password:'',
        // emailError:false,
        // passwordError:false,
    })

    const changeState = (event) => {
        setText(previousValue => {
          return {...previousValue,[event.target.name]:event.target.value}
  
        })
      }
    const next = () => {
        let data = {
            "email":text.email
    
    }
    console.log("Forget is calling");
               console.log(data);
               userservice.forget(data).then((response) => {
                    
                console.log(response);

                    
                  }).catch((error) =>{
                    console.log(error);
                  })
            }
          
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
                <div class="emaill">
                <TextField
                style={{width:300}}
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                size="small"
                onChange={(e) => changeState(e)}
            />
                </div>
                <div className='reset_button'>
                <Button onClick={next}  style={{backgroundColor:"#A03037",color:'white'}}>Reset</Button>
                </div>
                <div>
                  <Button onClick={signUp} style={{width:300,marginTop:70,fontSize:20,fontWeight:'bold',color:"black"}}
                    >CREATE ACCOUNT</Button>
                  
                </div>
                 
            </div>
            </div> 
            </div>
        </div>
    );
}

export default ForgetPassword;