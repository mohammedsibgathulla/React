import React from 'react';
import './User.css';
const user = (props) => { //We have implemented ES6 function
    return <div className="User">
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
}

export default user;