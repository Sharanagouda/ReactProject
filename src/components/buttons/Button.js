import React, { Component } from "react";

class Button extends Component {

    buttonStyle={
    backgroundColor: '#fff3e0',
    border: '2px solid blue',
    color: '#1F2959',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
    }
    render() {
      return (
          <button style={this.buttonStyle} className={this.props.buttonClass}  onClick={this.props.onClick}>{this.props.buttonName}</button>
      );
    }
}


export default Button;
