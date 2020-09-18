import React from 'react';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';

// LOGO IMPORT
import Logo from '../assets/Messenger_Logo.jpg'

function Login() {
    return (
        <>
            <div className='login-container'>
                <Image 
                    src={ Logo }
                    className='login-logo'
                    rounded 
                />
                <h1 className='login-title' >Messenger</h1>
                <InputGroup className="mb-3 login-form">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder='Enter Your Name To Login'
                        className='login-input'
                    />
                </InputGroup>
            </div>    
        </>
    )
};

export default Login;