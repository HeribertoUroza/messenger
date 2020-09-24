import React from 'react';
import { Redirect } from 'react-router';

// CONTEXT
import AuthContext from '../context/AuthContext';

function Messages() {
    return (
        <>
            <AuthContext.Consumer>
                {
                    (isUser) => {
                        if(isUser){
                            return (
                                <>
                                <div>Hello {isUser}</div>
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