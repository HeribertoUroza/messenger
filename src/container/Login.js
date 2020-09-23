import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// LOGO IMPORT
import Logo from '../assets/Messenger_Logo.jpg'

function Login(props) {
    const [email, getEmail] = useState('');
    const [password, getPassWord] = useState('');
    const [loginOrSignUp, getLoginOrSignUp] = useState(false);
    const [errorMessage, getError] = useState('');
    const history = useHistory();

    const handleOnChange = e => {
        if(e.target.name === 'email'){
            getEmail(e.target.value)
        } else {
            getPassWord(e.target.value)
        }
    };

    const handleLoginOrSignUpButton = e => {
        e.preventDefault();
        getEmail('');
        getPassWord('');
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

        loginOrSignUp ?
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(_ => {
                    history.push('/messages')
                })
                .catch(error => {
                    getError(error.message)
                })
            :
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(_ => {
                    history.push('/messages')
                })
                .catch(error => {
                    console.log(error.message)
                    getError(error.message)
                })
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
                
                    <InputGroup className="mb-3">
                        <form className='form-container'>
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
                        </form>
                    {
                        loginOrSignUp ?                            
                                <>
                                <Button variant="primary" className='login-btn' onClick={handleLoginOrSignUp}>Sign Up</Button>
                                    <span>Already Have an Account? <button onClick={handleLoginOrSignUpButton} className='LnS-switch'>Click Here</button></span></>
                            :   <>
                                <Button variant="primary" className='login-btn' onClick={handleLoginOrSignUp} >Log In</Button>
                                    <span>Don't Have an Account? <button onClick={handleLoginOrSignUpButton} className='LnS-switch'>Click Here</button></span></>
                    }
                </InputGroup>
                
            </div>    
        </>
    )
};

export default Login;