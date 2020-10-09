import React, { useContext } from 'react';

// CONTEXT
import AuthContext from '../context/AuthContext';

function SingleMessage(props) {
    let currentUser = useContext(AuthContext)
    let fromMe = false
    if(currentUser === props.email){
        fromMe = true
    }

    const handleMessageStyle = ( fromMe ) => {
        if(fromMe) {
            return {
                marginLeft: '20%',
                boxShadow: '6px 4px 17px 2px rgba(0, 116, 253,0.33)'
            }
        } else {
            return {
                marginRight: '20%',
                boxShadow: '-6px 4px 17px 2px rgba(0, 116, 253,0.33)'
            }
        }
    }

    const handleLableStyle = ( fromMe ) => {
        if(fromMe) {
            return {
                marginLeft: '65%',
                boxShadow: '6px 4px 17px 2px rgba(0, 116, 253,0.33)'
            } 
        } else {
            return {
                marginRight: '20%',
                boxShadow: '-6px 4px 17px 2px rgba(0, 116, 253,0.33)'
            }
        }
    }

    const handleLableContainer = ( fromMe ) => {
        if(fromMe) {
            return {
                display: 'flex',
                flexDirection: 'row-reverse'
            }
        }
    };

    return (
        <>
            <div className='s_Message_con' key={props.data_key} >
                    <div className='s_l_container' style={handleLableContainer(fromMe)}>
                        <label className='s_Message_label' style={handleLableStyle(fromMe)}>{props.email}{props.time}</label>
                    </div>
                <div className='s_Message' style={handleMessageStyle(fromMe)} >{props.message}</div>
            </div>
        </>
    )
}

export default SingleMessage;