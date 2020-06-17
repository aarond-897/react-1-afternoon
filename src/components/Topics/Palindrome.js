import React, {Component} from 'react';

class Palindrome extends Component{
  constructor(){
    super();
    this.state={
      userinput:'',
      palindrome: ''
    }
  }

  handleChange=(e)=>{
    this.setState({
      userinput: e.target.value
    })
  }
  
  handleClick=()=>{
    console.log(this.state.userinput)
    let pali = this.state.userinput.split('').reverse().join('')
    this.setState({
      palindrome: pali===this.state.userinput? 'true': 'false'
    })
  }


  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input type="text" className="inputLine" onChange={e=>this.handleChange(e)} value={this.state.userinput}/>
        <button className="confirmationButton" onClick={this.handleClick}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;