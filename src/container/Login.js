import React from 'react';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// LOGO IMPORT
import Logo from '../assets/Messenger_Logo.jpg'

function Login(props) {
    

    const handleLogin = e => {
        if(e.target.name === 'username'){
            props.handleUserName(e.target.value)
        } else {
            props.handlePassWord(e.target.value)
        }
    }

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
                        placeholder='Enter Your Name'
                        className='login-user'
                        onChange={handleLogin}
                        type='text'
                        name='username'
                        autoComplete="off"
                    />
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder='Enter Your Password'
                        className='login-pass'
                        onChange={handleLogin}
                        type='password'
                        name='password'
                        autoComplete='off'
                    />
                    <Button variant="primary">Sign Up</Button>
                </InputGroup>
            </div>    
        </>
    )
};

export default Login;