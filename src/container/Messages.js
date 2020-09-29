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

    const data = [
        {
            email: 'person 1',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et felis id leo scelerisque laoreet. Maecenas vitae nulla luctus erat placerat scelerisque non eget dui. Donec ipsum libero, mollis non neque vitae, accumsan commodo felis. Ut ac suscipit velit. Proin eu laoreet tortor. Pellentesque condimentum diam vel felis facilisis, interdum porta nisi dictum. Vivamus venenatis, tortor eu fermentum aliquet, nisl diam iaculis elit, ac bibendum nisi magna vitae nunc. Fusce at tincidunt tellus. Fusce accumsan scelerisque nulla ac laoreet.',
            fromMe: true
        },
        {
            email: 'person 2',
            message: 'Ut semper, leo id auctor tincidunt, risus sem scelerisque nisl, quis porta purus velit sed ante. Cras maximus lorem vel eleifend tincidunt. Aliquam facilisis aliquet purus ut ultricies. Morbi ac ante in enim suscipit scelerisque eget a dui. Vestibulum efficitur placerat urna. Etiam laoreet euismod nunc, ac aliquet tellus feugiat at. Nullam vitae eros nec tellus suscipit iaculis non eget est. Donec dictum vel tortor et gravida. Aliquam at sapien in eros placerat aliquam. Nunc fermentum lectus ac dui luctus malesuada. Ut ultrices, velit sed dignissim imperdiet, felis odio convallis augue, a tincidunt felis velit sed urna. In vestibulum, nunc in volutpat suscipit, nulla tellus condimentum nisi, ut molestie ipsum nibh in sapien. In eu mauris quis arcu pulvinar gravida. In et pellentesque mauris, sit amet scelerisque nibh.',
            fromMe: false
        },
        {
            email: 'person 1',
            message: 'Integer id viverra nisl, non molestie lacus. Nunc a accumsan odio. Etiam mattis lectus in sagittis tristique. Integer sit amet quam in risus venenatis tincidunt. Cras eget tellus ac ligula lacinia accumsan. Vestibulum ullamcorper vestibulum consectetur. Nullam venenatis ipsum et sodales facilisis. Duis congue sollicitudin turpis, quis efficitur purus scelerisque quis. Maecenas a purus sed augue accumsan vestibulum. Aliquam erat volutpat. Morbi eu augue a ligula aliquam porta vel eget massa. Nulla sit amet condimentum magna. Aenean quis erat libero.',
            fromMe: true
        },
        {
            email: 'person 3',
            message: 'Ut at semper quam. Morbi dolor mauris, ultricies tempus hendrerit nec, dignissim sed sapien. Ut nisl nisl, aliquet at mauris eget, tristique porta arcu. In nec magna ornare, fringilla lectus a, tincidunt leo. Vivamus gravida placerat enim, et fermentum sem. Morbi bibendum posuere nunc a lacinia. Morbi finibus libero ac egestas feugiat. Integer ultricies consectetur tellus ac ullamcorper. Aenean ornare justo metus, id dictum purus imperdiet tincidunt. Proin non neque placerat, rutrum turpis eget, luctus tellus. Integer aliquet nisi neque, vitae finibus mauris malesuada eu.Nam condimentum ipsum quis accumsan malesuada.Ut iaculis ex id sem vehicula fringilla.Duis sagittis enim et nisi congue sollicitudin.Sed auctor metus augue, et efficitur felis mollis eget.Proin et libero quis felis venenatis molestie vel nec nisl.Curabitur lorem ex, lobortis at justo in, porta auctor ipsum.Praesent feugiat rutrum augue, eu commodo leo tempus a.Nulla a nisl lacus.Sed id interdum mi.Cras molestie ipsum tellus, non laoreet urna lobortis porta.Sed interdum ultricies justo, in porta nisl eleifend id.Aenean vitae bibendum magna, quis imperdiet nisl.Morbi et ex convallis, molestie tortor quis, sagittis tellus.Praesent est sapien, iaculis nec mauris ut, lobortis rhoncus magna.Sed et neque dignissim, blandit nunc a, feugiat velit.',
            fromMe: false
        },
    ];

    const user = useContext(AuthContext)

    const handleOnChange = e => {
        getTextInput(e.target.value)
    };


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
                                                />
                                                <InputGroup.Append>
                                                    <Button variant="outline-secondary">Send</Button>
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