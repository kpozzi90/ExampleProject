import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';
import ScrollText from './ScrollText';
import Lists from './Lists';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      display: false,
    }
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  increaseCount() {
    // increase the count of times "open" has been clicked and display the modal
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
      display: true,
    })
  }

  resetCount() {
    // set the count back to zero but do not lose out modal
    this.setState({
      count: 0
    })
  }

  closeWindow() {
    // close out modal but do not reset count
    this.setState({
      display: false
    })
  }

  render() {
    return (
      <div className = 'App'>
        <button className = 'increaseButton' onClick = {this.increaseCount}>Open</button>
        { this.state.display === true ? <Modal count = {this.state.count} closeWindow = {this.closeWindow} /> : null }
        <button className = 'resetButton' onClick = {this.resetCount}>Reset</button>
        <ScrollText />
        <Lists />
      </div>
    );
  }
}

export default App;
