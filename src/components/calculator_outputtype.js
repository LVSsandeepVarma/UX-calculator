import React from "react";

const Output =(props)=>{
    return(
        <input type="text" readOnly on value={props.value}/>
    )
}

export default Output