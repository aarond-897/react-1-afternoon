import React, {Component} from 'react';
import { render } from 'react-dom';

class FilterObject extends Component{
  constructor(){
    super();
    this.state={
      unFilteredArray: [
        {name: 'Aaron', age: 26, title:'computer guy' },
        {name: 'Timmy', car: 'honda', title:'old guy' },
        {name: 'Bruce', hairColor: 'black', title:'Batman' }
      ],
      userInput: '',
      filteredArray:[]
    }
  }

  handleChange=(e)=>{
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick=()=>{
    console.log(this.state.userInput)
    let filteredProps=this.state.unFilteredArray.filter(person=>person.hasOwnProperty(this.state.userInput))
    this.setState({
      filteredArray: filteredProps
    })
    console.log(this.state.filteredArray)
  }

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input type="text" className="inputLine" onChange={(e)=>this.handleChange(e)}/>
        <button className="confirmationButton" onClick={this.handleClick}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject;