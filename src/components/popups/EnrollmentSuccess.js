import React, {Component} from 'react';
import { Link } from "react-router-dom";

import Button from '../buttons/Button';
import {Modal} from 'react-bootstrap';

class EnrollmentSuccess extends Component{

    closeAndNavigateScreen = () => {
        
        this.props.closePopup();
        //this.props.history.push("/marchant-login");
    }
    render(){
        
        return(
            <div>
               <div className="modal-container" style={{ height: 200 }}>
                 <Modal
                  show={this.props.show}
                  onHide={this.closeAndNavigateScreen}
                  container={this}
                  aria-labelledby="contained-modal-title">
                      <Modal.Body>
                        <div style={Text}>
                            <p style={this.props.messageStyle}>{this.props.showMessage}</p>
                            <Link to="/" ><Button buttonClass="btn btn-primary" onClick={this.closeAndNavigateScreen} buttonName="Go to Dashboard"/></Link>
                        </div>
                      </Modal.Body>
                 </Modal>
                </div> 
            </div>
            
             
        );
        
    }
}

const Text= {
    textAlign:"center",
    color:"#18b318",
    fontFamily:"sans-serif",
    fontSize:"45px", 
    border:"3px solid #071848",
    padding:"20px",
}

export default EnrollmentSuccess;
