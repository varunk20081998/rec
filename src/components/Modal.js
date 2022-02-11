import React, { Component } from "react";
import '../App.css'
class Modal extends Component {
  render() {
    return <div >
      
        <div className="modalBg" onClick={this.props.stop}/>
        {this.props.children}
        
        </div>;
  }
}

export default Modal;
