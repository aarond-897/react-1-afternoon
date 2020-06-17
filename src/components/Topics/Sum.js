import React, {Component} from 'react';

class Sum extends Component{
  constructor(){
    super();
    this.state={
      number1:0,
      number2:0,
      sum:null
    }
  }

  handleNumber1=(e)=>{
    this.setState({
      number1: e.target.value
    })
  }

  handleNumber2=(e)=>{
    this.setState({
      number2: e.target.value
    })
  }

  handleClick=()=>{
    this.setState({
      sum: Number(this.state.number1) + Number(this.state.number2)
    })
  }

  render(){
    return(
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input type="text" className='inputLine' onChange={e=>this.handleNumber1(e)} />
        <input type="text" className='inputLine'onChange={e=>this.handleNumber2(e)} />
        <button className='confirmationButton' onClick={this.handleClick}>Add</button>
        <span className='resultsBox'>Sum: {this.state.sum} </span>
      </div>

    )
  }
}

export default Sum;