import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnrollmentSuccess from "../../../components/popups/EnrollmentSuccess";
class MerchantLogin extends Component {

  goback = () => {
      this.props.history.push("/");
  }
  constructor() {
    super();
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.state = {
      checked :false,
      showSuccessModal: false
     
    };
  }

 
  handleCheckBox(e) {
    this.setState({checked : e.target.checked})
    console.log(e.target.checked);
  }
  completeProcess=()=>{
    console.log("submit");
  }
  checkMerchantIdAndEnterOtp = () => {
    if (this.state.checked) {
        this.setState({
          showSuccessModal: true
        });
    }
}
  closeOtpPopup = () => {
    this.setState({
      showSuccessModal: false
    });
  }
    render() {
      return (
          <div>
            <h5 style ={step}>Step 3 of 3</h5>
            <h2 style ={funds}>Funds Advance Agreement</h2>
                <div style = {terms}> 
                        <p style = {textAlign} >New York Stock Exchange (abbreviated as NYSE, and nicknamed "Thedddddd Big Board"),[6] is an American stock exchange located 
                                                at 11 Wall Street, Lower Manhattan, New York City, New York. It is by far[7][8] the world's largest stock exchange by market </p>
                        <p style = {textAlign} > capitalization of its listed companies at US$21.3 trillion as of June 2017.[3] The average daily trading value was approximately </p>
                        <p style = {textAlign}> US$169 billion in 2013. The NYSE trading floor is located at 11 Wall Street and is composed of 21 rooms used for the facilitation of </p>
                        <p style = {textAlign}>rading. A fifth trading room, located at 30 Broad Street, was closed in February 2007. The main building and the 11 Wall Street building </p>  
                        <p style = {textAlign} >New York Stock Exchange (abbreviated as NYSE, and nicknamed "Thedddddd Big Board"),[6] is an American stock exchange located 
                                                at 11 Wall Street, Lower Manhattan, New York City, New York. It is by far[7][8] the world's largest stock exchange by market </p>
                        <p style = {textAlign} > capitalization of its listed companies at US$21.3 trillion as of June 2017.[3] The average daily trading value was approximately </p>
                        <p style = {textAlign}> US$169 billion in 2013. The NYSE trading floor is located at 11 Wall Street and is composed of 21 rooms used for the facilitation of </p>
                        <p style = {textAlign}>rading. A fifth trading room, located at 30 Broad Street, was closed in February 2007. The main building and the 11 Wall Street building </p> 
                </div>
               <br />
              <div style ={chk} >
                          <div style={{float : "left",    marginLeft: "26%"}}>
                                <input type="checkbox" onChange={this.handleCheckBox} checked={this.state.checked} />
                          I agree to the Terms and Conditions
                          </div>
                          <div style={{float : "left",marginLeft: "28%"}}>
                              <button type="button" style={button} disabled={!this.state.checked} onClick={this.checkMerchantIdAndEnterOtp}>SUBMIT</button>
                          </div>
              </div>
              <EnrollmentSuccess show={this.state.showSuccessModal} showMessage={'Congratulations Enrollment is complete'} closePopup={this.closeOtpPopup}  />
          </div>
      );
    }
}
  const step ={
    color : "#1bd679",
    marginRight : "40%",
    width: "64%",
    textAlign : "center"
  }
  const funds ={
    color : "#004165",
    textAlign : "center",
    width: "64%",
  }
  const terms ={
    margin: "auto",
    padding: "20px",
    height : "200px",
    width: "50%",//"500px",
    overflow: "scroll",
    marginRight : "20%",
    border : "outset",//inset,solid 1px black,

    }
  const textAlign = {
    paddingLeft: "10px",
    paddingRight: "10px",
    wordWrap: "breakWord"
  }
  const chk ={
      marginRight : "24%",
      width: "50%",
      display : "inline",
      margin:"0px auto"
  }
  const button ={
    border : "1px solid gray",
    borderRadius: "25px",
    padding: "10px 18px"
  }


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantLogin);