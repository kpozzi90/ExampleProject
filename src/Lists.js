import React, { Component } from 'react';
import './Lists.css';
import CarsList from './CarsList';
import FruitList from './FruitList';

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      // initially start with the Cars list being displayed
      list: 'Cars',
    };
    this.listChange = this.listChange.bind(this);
  }

  listChange(e) {
    // change list state to value of whatever option is selected in dropdown
    this.setState({
      list: e.target.value,
    })
  }

  render() {
    return (
      // creating two separate lists, one for fruit and one for cars
      // conditionally render one of two lists based on state
      <div className = 'Lists'>
        <label className = 'dropDown'>
          Pick the list you want to see:
          <select onChange = {this.listChange}>
            <option value = 'Cars'>Cars</option>
            <option value = 'Fruit'>Fruit</option>
          </select>
        </label>
        {this.state.list === 'Cars' ? <CarsList /> : <FruitList />}
      </div>
    );
  }
}

export default Lists;