import React from 'react';
import './Modal.css';

const Modal = (props) => {
  return (
    <div className = 'modal'>
      <p className = 'modalText'>Modal is clicked {props.count} number of times</p>
      <button className = 'closeButton' onClick = {props.closeWindow}>close</button>
    </div>
  )
}

export default Modal;