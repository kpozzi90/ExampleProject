import React, { Component } from 'react';
import './ScrollText.css';

class ScrollText extends Component {
  constructor() {
    super();
    this.state = {
      size: 14,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    // access deltaY property in event to determine direction of scroll
    if ( e.nativeEvent.deltaY > 0 ) {
      let newSize = this.state.size - 1;
      this.setState({
        size: newSize
      })
    } else {
      let newSize = this.state.size + 1;
      this.setState({
        size: newSize
      })
    }
    // preventDefault to avoid page scrolling while adjusting text size
    e.preventDefault();
  }

  render() {
    return (
      // inline styling to link fortSize to state
      <div className = 'ScrollText' style = {{fontSize: this.state.size.toString() + 'px'}} onWheel = {this.handleScroll}>
        Hover over this text and scroll to change font size!
      </div>
    );
  }
}

export default ScrollText;
