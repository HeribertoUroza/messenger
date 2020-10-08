import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import socketIOClient from 'socket.io-client';

// COMPONENT
import SingleMessage from '../component/SingleMessage';

// CONTEXT
import AuthContext from '../context/AuthContext';

// BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Messages() {
    const [ textInput, getTextInput ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ data, getData ] = useState([]);

    const user = useContext(AuthContext)
    const socket = socketIOClient('http://192.168.0.128:5000');

    const handleOnChange = e => {
        getTextInput(e.target.value)
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(!textInput) return;
        
        let newData = [...data]

        // newData.push({
        //     email: user,
        //     message: textInput,
        //     fromMe: true
        // })

        // getData(newData);

        socket.emit('chat', {
            email: user,
            message: textInput,
            fromMe: true
        })

        socket.on('chat', data => {
            newData.push(data)
            getData(newData)
        })

        getTextInput('');
        let message_text_input = document.querySelector('.message-text-input');
        let messages_all = document.querySelector(".messages-all")
        message_text_input.value = '';
        messages_all.scrollTop = await messages_all.scrollHeight;

    };

    useEffect( _=> {
        socket.on('FromAPI', data => {
            setResponse(data);
        });

        // return () => socket.disconnect();
    }, []);

    console.log(response)

    return (
        <>
            <AuthContext.Consumer>
                {
                    (isUser) => {
                        if(!isUser){
                            return (
                                <>
                                    <div className='messages-container'>
                                        <div className='messages-all'>
                                            {
                                                data.map(( e,i ) => {
                                                    return (
                                                        <SingleMessage
                                                            key={i}
                                                            data_key={i}
                                                            email={e.email}
                                                            message={e.message}
                                                            fromMe={e.fromMe}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='messages-input'>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    aria-label="messageText"
                                                    aria-describedby="basic-addon2"
                                                    onChange={handleOnChange}
                                                    className='message-text-input'
                                                />
                                                <InputGroup.Append>
                                                    <Button variant="outline-secondary" onClick={handleSubmit}>Send</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </>
                            )
                        } else {
                            return <Redirect to='/' />
                        }
                    }
                }
            </AuthContext.Consumer>
        </>
    )
}

export default Messages;