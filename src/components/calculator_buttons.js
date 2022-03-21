import React from "react"

const Buttons=(props)=>{
    return(
        <input className="input" type="button" value={props.number} onClick={props.handleClick}/>

    )
}
export default Buttons