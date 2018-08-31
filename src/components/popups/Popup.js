import React, { Component } from 'react';
import {Modal} from "react-bootstrap";

 import Button from "../buttons/Button";

 export default class Popup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            merchantOtp: "",
        }
    }

    onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
            this.setState({merchantOtp: e.target.value,
                })
        }
        //console.log(this.state.merchantOtp)
    }

    closeAndNavigateScreen = () => {
        this.props.closePopup();
    }

    submitOtp=()=>{
       
        if(this.state.merchantOtp=="1234"){
            this.props.closePopup();
            console.log("this is popup component "+this.state.merchantOtp);
        }else
        {
             var wrongOTP="Please check entered OTP "
             console.log("this is popup component "+this.state.merchantOtp);
        }
        
    }

    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                  show={this.props.show}
                  onHide={this.closeAndNavigateScreen}
                  container={this}
                  aria-labelledby="contained-modal-title">
                      <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title">
                          Please enter passcode sent to email and mobile phone
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <input type="password"  className="form-control" value={this.state.value} onChange={this.onChange} minLength={4} maxLength={6} placeholder="PASSCODE" required/>
                          <p>{this.state.merchantOtp=="1234" ? "OTP Validataion success" : "wrong"}</p>
                       
                      </Modal.Body>
                      <Modal.Footer>
                          <Button buttonName="Submit"  onClick={this.submitOtp} merchantotp={this.state.merchantOtp}/>
                          <Button buttonName="Next Step" onClick={this.closeAndNavigateScreen} />
                      </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
