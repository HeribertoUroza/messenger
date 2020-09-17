import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Login() {
    return (
        <>
        <div className='login-container'>
            <InputGroup className="mb-3 login-form">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder='Enter Your Name To Login'
                />
            </InputGroup>
        </div>    
        </>
    )
};

export default Login;