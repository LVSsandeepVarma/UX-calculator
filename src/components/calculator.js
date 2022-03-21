import React from 'react'
import Calculatortitle from "./calculator_title"
import OutputScreen from './calculator_output'
import Buttons from './calculator_buttons'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            query:'',
            result:''
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event){
        const value=event.target.value
        switch(value){
            case 'enter/calc':{
                if(this.state.query!==''){
                    var answer=''
                    try{
                        answer=eval(this.state.query)
                    }
                    catch(error){
                        this.setState({
                            result:"error"
                        })
                    }
                    if (answer==='undefined'){
                        this.setState({
                            result:'Math error'
                        })
                    }
                    else{
                        this.setState({result:answer,query:''})
                    }
                }
                else{
                    this.setState({result:'',query:''})
                }
                break
            }
            case 'AC':{
                this.setState({result:'',query:''})
                break
            }
            case 'del':{
                var que=this.state.query
                que=que.substr(0,que.length-1)
                this.setState({query:que})
                break
            }
            default :{
                this.setState({query:this.state.query+=value})
            }
        }
    }
    
    render(){
        return(
            <div className="Calculator ">
                <Calculatortitle value=" Pocket Calculator"/>
                <div className="output">
                    <OutputScreen query={this.state.query} result={this.state.result}/>
                    <div className="buttons">
                        <Buttons number={"/"} handleClick={this.handleClick}/>
                        <Buttons number={"*"} handleClick={this.handleClick} />
                        <Buttons number={"-"} handleClick={this.handleClick} />
                        <Buttons number={"AC"} handleClick={this.handleClick} />
                        
                    </div>
                    <div className="buttons">
                    <Buttons number={"7"} handleClick={this.handleClick} />
                    <Buttons number={"8"} handleClick={this.handleClick} />
                    <Buttons number={"9"} handleClick={this.handleClick} />
                    <Buttons  number={"del"} handleClick={this.handleClick} />
                    
                    </div>
                    <div className="buttons">
                    <Buttons number={"4"} handleClick={this.handleClick} />
                    <Buttons number={"5"} handleClick={this.handleClick} />
                    <Buttons number={"6"} handleClick={this.handleClick} />
                    <Buttons number={"+"} handleClick={this.handleClick} />
                    </div>
                    <div className="buttons">
                    <Buttons number={"1"} handleClick={this.handleClick} />
                    <Buttons number={"2"} handleClick={this.handleClick} />
                    <Buttons number={"3"} handleClick={this.handleClick} />
                    <Buttons number={"("} handleClick={this.handleClick}/>
                    </div>
                    <div className="buttons">
                    <Buttons number={"0"} handleClick={this.handleClick} />
                    <Buttons number={"."} handleClick={this.handleClick} />
                    <Buttons number={"enter/calc"} handleClick={this.handleClick} />
                    <Buttons number={")"} handleClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator