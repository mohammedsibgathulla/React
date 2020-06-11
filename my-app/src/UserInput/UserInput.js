import React from 'react';
const userInput = (props) => {

    const style = {
        border: '2px solid red',
        marginTop: '16px'
    };
    return <div>
        <input type="text" style={style} onChange={props.changeusername} value={props.currentname}/>
    </div>
}

export default userInput;