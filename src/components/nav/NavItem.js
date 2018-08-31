import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavItem extends Component {

  displayNav={
  
    display: 'inline',
    float: 'left',
    padding: '10px',
    color:'white'
};
linkText={
  color:'white',
  textDecoration: 'none'
}
    render() {
      return (
          <li style={this.displayNav}>
            <Link style={this.linkText} to={this.props.path}>{this.props.children}</Link>
          </li>
      );
    }
}


export default NavItem;
