import React from "react"

import Output from "./calculator_outputtype"

const OutputScreen=(props)=>{
    return(
    <div className="Output">
        <div>
            <Output value={props.query}/>
        </div>
        <div>
            <Output value={props.result}/>
        </div>
    </div>
    )
}
export default OutputScreen