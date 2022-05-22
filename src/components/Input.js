import React, {useState} from "react";


function Input(props) {

    return (
        <div>
            <p> {props.age}</p>
            <p>{props.name}</p>
            
        </div>
    );
}

export default Input;