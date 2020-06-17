import React, {Component} from 'react';


class FilterString extends Component{
  constructor(){
    super();
    this.state={
      unfilteredArray:['Mad Men ', 'Breaking Bad ', 'The Simpsons ', 'Futurama ', 'Mr. Robot'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange=(e)=>{
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick=()=>{
    let filteredShows=[];
    for (let i=0; i<this.state.unfilteredArray.length; i++){
      if(this.state.unfilteredArray[i].includes(this.state.userInput)){
        filteredShows.push(this.state.unfilteredArray[i])
      }
    }
    this.setState({
      filteredArray: filteredShows
    })
  }


  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {this.state.unfilteredArray}</span>
        <input type="text" className="inputLine" onChange={e=>this.handleChange(e)}/>
        <button className="confirmationButton" onClick={this.handleClick}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered: {this.state.filteredArray}</span>
      </div>
    )
  }

}

export default FilterString;