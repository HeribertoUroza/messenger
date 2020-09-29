import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';

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
    const [data, getData] = useState([
        {
            email: 'person 1',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et felis id leo scelerisque laoreet. Maecenas vitae nulla luctus erat et.',
            fromMe: true
        },
        {
            email: 'person 2',
            message: 'Ut semper, leo id auctor tincidunt, risuscies. Morbi ac ante in enim suscipit scelerisque eget a dui. Vestibulum efficitur placerat urna. Etiam laoreet euismod nunc, ac aliquet tellus feugiat at. Nullam vitae eros nec tellus suscipit iaculis non eget est. Donec dictum vel tortor et gravida. Aliquam at sapien in eros placerat aliquam. Nunc fermentum lectus ac dui luctus malesuada. Ut ultrices, velit sed dignissi velit sed urna. In vestibulum, nunc in volutpat suscipit, nulla tellus condimentum nisi, ut molestie ipsum nibh in sapien. In eu mauris quis arcu pulvinar gravida.',
            fromMe: false
        },
        {
            email: 'person 1',
            message: 'Integer id viverra nisl, non molestie lacus. uis erat libero.',
            fromMe: true
        },
        {
            email: 'person 3',
            message: 'Ut at sempe a nisl lalit.',
            fromMe: false
        },
    ])

    const user = useContext(AuthContext)

    const handleOnChange = e => {
        getTextInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!textInput) return;
        
        let newData = [...data]

        newData.push({
            email: user,
            message: textInput,
            fromMe: true
        })
        getData(newData);
        getTextInput('');
        let message_text_input = document.querySelector('.message-text-input');
        message_text_input.value = '';
    }


    return (
        <>
            <AuthContext.Consumer>
                {
                    (isUser) => {
                        if(isUser){
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