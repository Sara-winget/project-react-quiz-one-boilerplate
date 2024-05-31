import React ,{Component}from 'react'
import './Quiz.css'
class Quiz extends Component{
    constructor(){
        super();
        this.state={
            ques:"Which is the only mammel  can jump?",
            opt:["dog","elephant","goat","lion"],
            ans:["lion"],
        }
    }
    
    render(){
        return(
<div className='Quiz'>
    <h1>Question</h1>
    <h1>{this.state.ques}</h1>
    <div>
         <button className='options'>{this.state.opt[0]}</button>
         <button className='options'>{this.state.opt[1]}</button><br></br>
         <button className='options'>{this.state.opt[2]}</button>
         <button className='options'>{this.state.opt[3]}</button>
    </div>
    <button className='prv'>Previous</button>
    <button className='next'>Next</button>
    <button className='quit'>Quit</button>
</div>
        )
    }
}
export default Quiz;