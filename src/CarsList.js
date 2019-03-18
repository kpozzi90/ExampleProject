import React, { Component } from 'react';
import './SpecificList.css';

class CarsList extends Component {
  constructor() {
    super();
    this.state = {
      cars: ['Honda', 'Toyota', 'Ferrari', 'Jaguar', 'Lexus'],
      sort: 'none',
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    if (this.state.sort === 'ascending') {
      // if list is sorted in ascending order, reverse it so it is in decending order
      let newArr = this.state.cars.reverse()
      this.setState({
        cars: newArr,
        sort: 'descending',
      })

    } else {
      // if list is in descending order or not sorted, sort the list
      let newArr = this.state.cars.sort()
      this.setState({
        cars: newArr,
        sort: 'ascending',
      })
    }
  }

  render() {
    return (
      <div className = 'List'>
        <ul>
          {this.state.cars.map((car) => {
            return <li key = {car}>{car}</li>
          })}
        </ul>
        <button className = 'sortButton' onClick = {this.handleSort}>Sort</button>
      </div>
    );
  }
}

export default CarsList;