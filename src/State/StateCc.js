import React, { Component } from 'react'

export default class StateCc extends Component {
    constructor(){
        super();
        this.state={
            text : 'click on below button to change the text',
            roll : 101
        }
    }

    clickHandler = () =>{
        this.setState({
            text : 'text is changed',
            roll :102
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <h1>Your roll number is : {this.state.roll}</h1>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}
