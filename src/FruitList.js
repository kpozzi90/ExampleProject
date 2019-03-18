import React, { Component } from 'react';
import './SpecificList.css';

class FruitList extends Component {
  constructor() {
    super();
    this.state = {
      fruit: ['Watermelon', 'Apple', 'Banana', 'Orange', 'Cantaloupe'],
      sort: 'none',
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    if (this.state.sort === 'ascending') {
      // if list is sorted in ascending order, reverse it so it is in decending order
      let newArr = this.state.fruit.reverse()
      this.setState({
        fruit: newArr,
        sort: 'descending',
      })

    } else {
      // if list is in descending order or not sorted, sort the list
      let newArr = this.state.fruit.sort()
      this.setState({
        fruit: newArr,
        sort: 'ascending',
      })
    }
  }

  render() {
    return (
      <div className = 'List'>
        <ul>
          {this.state.fruit.map((fr) => {
            return <li key = {fr}>{fr}</li>
          })}
        </ul>
        <button className = 'sortButton' onClick = {this.handleSort}>Sort</button>
      </div>
    );
  }
}

export default FruitList;