import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import Popup from "../../../components/popups/Popup";

class EnrollMerchant extends Component {
       constructor(props){
          super(props);
          this.state = {
             merchantId: "",
             showOtpModal: false
          };
         
      }

      onChange = (e) => {
          const re = /^[0-9\b a-z A-Z]+$/;
          if (e.target.value == '' || re.test(e.target.value)) {
            this.setState({merchantId: e.target.value});
          }
        //  console.log(this.state.merchantId)
      }

      checkMerchantIdAndEnterOtp = () => {
          if (this.state.merchantId) {
              this.setState({
                  showOtpModal: true
              });
          }
      }

      closeOtpPopup = () => {
          this.setState({
              showOtpModal: false
          });
      }

      submitOtp=()=>{
        this.setState({
            showOtpModal: false
        });
    
        console.log("submit "+this.props.merchantotp)
    }

      divCenter={
        width: '500px',
        height: '500px',
        position: 'absolute',
        top:'0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
        color:'blue'
    }

      render() {
        return (
            <div>
                {/*<form className="form">
                    <div className="container">
                        <div className="row">
                            <div className='col-sm-4 form-group'>
                                <label htmlFor="marchantId">Enter MerchantID below</label>
                                <input className="form-control" type="text" value={this.state.value} onChange={this.onChange} placeholder="Merchant ID" required/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                            <div className="col-sm-4 col-sm-offset-4">
                                <Button buttonName="Next Step" onClick={this.checkMerchantIdAndEnterOtp} ></Button>
                            </div>
                        </div>
                 </form>*/}
                 <div style={this.divCenter}>
                        <h5>Enter MerchantId below</h5>
                        <input  type="text" value={this.state.value} onChange={this.onChange} placeholder="Merchant ID" required/><br/><br/>
                        <Button buttonName="Next Step" onClick={this.checkMerchantIdAndEnterOtp} ></Button>
                </div> 
                <Popup show={this.state.showOtpModal} closePopup={this.closeOtpPopup} />
            </div>
        );
      }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollMerchant);
