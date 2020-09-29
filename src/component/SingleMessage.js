import React from 'react';

function SingleMessage(props) {
    
    const handleStyle = ( fromMe ) => {
        if(fromMe) {
            return {
                marginLeft: '20%',
            }
        } else {
            return {
                marginRight: '20%'
            }
        }
    }

    return (
        <>
            <div className='s_Message_con' key={props.data_key} >
                <label className='s_Message_label' style={handleStyle(props.fromMe)}>{props.email}</label>
                <div className='s_Message' style={handleStyle(props.fromMe)} >{props.message}</div>
            </div>
        </>
    )
}

export default SingleMessage;