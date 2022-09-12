import { Button, TextField } from '@mui/material';
import React from 'react';
//import UserService from '../../services/UserService';
import UserService from '../../services/UserService';
import './SignUp.css';
const userservice = new UserService();
function SignUp(props) {
    const[text,setText] =React.useState({
      firstName:'',
      lastName:'',
      MobileNumber:'',
      email:'',
      password:'',
      role:'',
      confirm:'',
      firstNameError:false,
      lastNameError:false,
      MobileNumberError:false,
      emailError:false,
      passwordError:false
    })
    
    const changeState = (event) => {
      setText(previousValue => {
        return {...previousValue,[event.target.name]:event.target.value}

      })
    }
    const validation = () => {
      let isError = false;
      const error = text;
      error.firstNameError = text.firstName === '' ? true : false;
      error.lastNameError = text.lastName === '' ? true : false;
      error.MobileNumberError = text.MobileNumber === '' ? true : false;
      error.emailError = text.email === '' ? true : false;
      error.passwordError = text.password === '' ? true : false;

      setText({
        ...error
      })

      isError = error.firstNameError || error.lastNameError || error.MobileNumberError || error.emailError || error.passwordError 
      return isError;  
    }
    
    const next = () => {
      let isValidated = validation();
      let data = {
        "role":text.role,
        "confirm_password":text.confirm,
        "first_name":text.firstName,
        "last_name":text.lastName,
        "phone_no":text.MobileNumber,
        "email":text.email,
        "password":text.password
      }
      if(!isValidated) {
        console.log("SignUp is calling");
        console.log(data);
        userservice.signUp(data).then((response) => {
          console.log(response);
        }).catch((error) =>{
            console.log(error);
          })
    }
  }
  return (
      <div>
                
      <div className="main">
      <div className="sub-main">
      <div className='role_part'>
          <TextField
           id="outlined_basic"
          className='role'
          name='role'
          label="Role"
           variant='outlined'
          size="small"
          onChange={(e) => changeState(e)}
          />
          </div>
      <div className="first_name">
          <TextField
            
            id="outlined-basic"
            className="inputFirstName"
            name='firstName'
            label="FirstName"
            variant="outlined"
            size="small"
            error = {text.firstNameError}
            helperText={text.emailError == true ? 'FirstName is required':''}
            
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="last_name">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name='lastName'
            label="LastName"
            variant="outlined"
            size="small"
            error = {text.lastNameError}
            helperText={text.lastNameError == true ? 'LastName is required':''}
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="mobileNumber">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name='MobileNumber'
            label="Mobile Number"
            variant="outlined"
            size="small"
            error = {text.MobileNumberError}
            helperText={text.MobileNumberError == true ? 'Mobile number is required':''}
            onChange={(e) => changeState(e)}
          />
        </div>
        
        <div className="email">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name='email'
            label="Email"
            variant="outlined"
            size="small"
            error = {text.emailError}
            helperText={text.emailError == true ? 'Email is required':''}
            onChange={(e) => changeState(e)}
          />
        </div>
        
        <div className="password">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name='password'
            label="Password"
            variant="outlined"
            size="small"
            error = {text.passwordError}
            helperText={text.passwordError == true ? 'Password is required':''}
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className='role_part'>
          <TextField
           id="outlined_basic"
          className='role'
          name='confirm'
          label="confirmPassword"
           variant='outlined'
          size="small"
          onChange={(e) => changeState(e)}
          />
          </div>        
        <div className="signUpBtn">
          <Button className="signUp-btn">
            <div style={{color:'white'}}
            onClick={next}>SignUp
            </div>
          </Button>
        </div>
      </div>
    </div>
        </div>
    );
}
export default SignUp;
