import React from 'react';

function SingleMessage(props) {
    
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
                    <div className='s_l_container' style={handleLableContainer(props.fromMe)}>
                        <label className='s_Message_label' style={handleLableStyle(props.fromMe)}>{props.email}</label>
                    </div>
                <div className='s_Message' style={handleMessageStyle(props.fromMe)} >{props.message}</div>
            </div>
        </>
    )
}

export default SingleMessage;