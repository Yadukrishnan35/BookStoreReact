import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import './Login.css';
const userservice = new UserService();
function Login() {
  const navigate = useNavigate();
    const[text,setText] =React.useState({
        email:'',
        password:'',
        emailError:false,
        passwordError:false,
    })
    const changeState = (event) => {
        setText(previousValue => {
          return {...previousValue,[event.target.name]:event.target.value}
  
        })
      }
      const validation = () => {
        let isError = false;
        const error = text;
        error.emailError = text.email === '' ? true : false;
        error.passwordError = text.password === '' ? true : false;
        
        setText({
            ...error
          })
    
          isError = error.emailError || error.passwordError 
          return isError;  
        }
        const next = () => {
            let isValidated = validation();
            let data = {
                
                 "email":text.email,
               "password":text.password
            }
             if(!isValidated) {
               console.log("Login is calling");
               console.log(data);
                
               userservice.login(data).then((response) => {
                localStorage.setItem('token', response.data.token);    
                console.log(response);

                    navigate('/dashboard');
                  }).catch((error) =>{
                    console.log(error);
                  })
            }
          }
    return (
        <div className='container'>
            
            <TextField
                id="outlined-basic"
                label="Email"
                name='email'
                variant="outlined"
                size="small"
                error = {text.emailError}
                helperText={text.emailError == true ? 'Email is required':''}
                onChange={(e) => changeState(e)}

            />
            <TextField
                id="outlined-basic"
                label="password"
                name='password'
                variant="outlined"
                size="small"
                error = {text.passwordError}
            helperText={text.passwordError == true ? 'password is required':''}
                onChange={(e) => changeState(e)}

            />
             <div class="Forget_password">
             <a className='forgetlink' href='http://localhost:3000/forgotpassword'>Forgot password?</a>
      </div>
      <div className="login_btn">
          <Button className="login-btn">
            <div style={{color:'white'}}onClick={next}>login
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