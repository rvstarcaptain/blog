import React, { Component } from 'react'

export default class CompDidUpdate extends Component {
    constructor(){
        super();
        console.warn("constructor")
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        if(this.state.count > 0){

            return true;
        }
    }
  render() {
      console.warn("render")
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={()=>{this.setState({count:this.state.count+1})}}>+ve</button>
          <button onClick={()=>{this.setState({count:this.state.count-1})}}>-ve</button>

      </div>
    )
  }
}
