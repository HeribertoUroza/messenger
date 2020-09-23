import React, { useState } from 'react';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// LOGO IMPORT
import Logo from '../assets/Messenger_Logo.jpg'

function Login(props) {
    const [loginOrSignUp, getLoginOrSignUp] = useState(false);

    const handleOnChange = e => {
        if(e.target.name === 'email'){
            props.handleEmail(e.target.value)
        } else {
            props.handlePassWord(e.target.value)
        }
    };

    const handleLoginOrSignUpButton = e => {
        e.preventDefault();
        props.handleEmail('');
        props.handlePassWord('');
        let login_user = document.querySelector('.login-user');
        let login_pass = document.querySelector('.login-pass');
        login_user.value = '';
        login_pass.value = '';

        !loginOrSignUp? 
            getLoginOrSignUp(true) 
        :
            getLoginOrSignUp(false)
    };

    const handleLoginOrSignUp = e => {
        e.preventDefault();

        props.handleSignUpOrLogIn(loginOrSignUp)
    };

    return (
        <>
            <div className='login-container'>
                <Image 
                    src={ Logo }
                    className='login-logo'
                    rounded 
                />
                <h1 className='login-title' >Messenger</h1>
                <form className='login-form'>
                <InputGroup className="mb-3 ">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='Enter Your Email'
                            className='login-user'
                            onChange={handleOnChange}
                            type='email'
                            name='email'
                            autoComplete="off"
                        />
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='Enter Your Password'
                            className='login-pass'
                            onChange={handleOnChange}
                            type='password'
                            name='password'
                            autoComplete='off'
                        />
                    {
                        loginOrSignUp ?                            
                                <>

                                <Button variant="primary" onClick={handleLoginOrSignUp}>Sign Up</Button>
                                    <span>Already Have an Account? <button onClick={handleLoginOrSignUpButton} className='LnS-switch'>Click Here</button></span></>
                            :   <>
                                <Button variant="primary" onClick={handleLoginOrSignUp} >Log In</Button>
                                    <span>Don't Have an Account? <button onClick={handleLoginOrSignUpButton} className='LnS-switch'>Click Here</button></span></>
                    }
                </InputGroup>
                </form>
            </div>    
        </>
    )
};

export default Login;