import React, { Component } from "react";
import logo from './../../assets/logo.jpg';

class Logo extends Component {

    displayUl={
        display:'inline',
      float:'left',
      margin:'5px'
      }
    render() {
      return (
        
        <img style={this.displayUl} src={logo} width="300" height="70" alt="logo"/>
     
      );
    }
}


export default Logo;
