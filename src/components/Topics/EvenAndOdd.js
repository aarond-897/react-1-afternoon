import React, {Component} from'react';

class EvenAndOdd extends Component{
  constructor(){
    super();
    this.state={
      evenArray:[],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange = (e)=>{
    this.setState({
      userInput: e.target.value
    })
  }

  splitsInput=()=>{
    console.log(this.state.userInput)
    let splitUp = this.state.userInput.split(',');
    console.log(splitUp)
    let evens=splitUp.filter(num=>num%2===0);
    console.log(evens)
    let odds=splitUp.filter(num=>num%2===1);
    console.log(odds)
    this.setState({
      evenArray: evens,
      oddArray: odds
  })
}

  render(){
    return(
      <div className="puzzleBox evenAndOddPB"> 
        <h4>Evens and Odds</h4>
        <input type="text" className="inputLine" onChange={(e)=>this.handleChange(e)} value={this.state.userInput}/>
        <button className="confirmationButton" onClick={this.splitsInput}>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}


export default EvenAndOdd;