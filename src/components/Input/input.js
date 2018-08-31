import React, { Component } from "react";

class Input extends Component {
    render(){
        return(
            <input type={this.props.type} onChange={this.props.onChange } placeholder={this.props.placeholder}></input>


        );
    }
}
export default Input;