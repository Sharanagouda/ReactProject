import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import Logo from "./../../../components/Logo";
import NavMenu from "./../../../components/nav/NavMenu";
import NavItem from "./../../../components/nav/NavItem";
import Backimage from './../../../assets/backgroundimage.jpg';



class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vineet"
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
          name: "Vineet"
        })
    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUnMount() {

    }

    componentWillReceiveProps(nextPorps) {
        console.log(nextPorps);
    }

    enrollMerchant = () => {
        this.props.history.push("/enroll-merchant");
    }

    loginMerchant = () => {
        this.props.history.push("/marchant-login");
        console.log("login");
    }

    loginAdmin = () => {
        console.log("login admin");
    }
    header={
        display:'inline',
        float: 'left',
        width:'100%',
        height:'80px',
        backgroundColor: '#1F2959',
        color:'white',
      
    }
    navMenuStyle={
       marginTop:'150px;',
      
    }
    footer={
        width:'100%',
        height:'80px',
        backgroundColor: '#1F2959',
        color:'white',
        bottom:'0px'
    }
    maindiv={
        marginRight:'10px',
        width:'100%',
        height:'290px'
    }
    divBox1={
        width:'500px',
        height:'200px',
        backgroundColor: '#BDC3C7',
        border:'4px solid #E5E8E8 ',
        color:'#111029',
        float:'left',
        marginLeft:'300px',
        marginTop:'40px',
    }
    divBox2={
        width:'500px',
        height:'200px',
        backgroundColor: '#BDC3C7',
        border:'4px solid #E5E8E8 ',
        color:'#111029',
        float:'right',
        marginRight:'300px',
        marginTop:'40px',
    }
    h3={
        color:'#111029',
    }
    p={
        color:'#111029',
        fontSize:'13px'
    }
    enrollButton={
        float:'right',
       
    }

    render() {
      return (
          <div>
            <div style={this.header}>
                <Logo />
                <NavMenu style={this.navMenuStyle}>
                    <NavItem path="/login">OVERVIEW</NavItem>
                    <NavItem path="/somepath1">HOW IT WORKS</NavItem>
                    <NavItem path="/somepath2">WHY FUNDS ADVANCE</NavItem>
                </NavMenu>
                <Button style={this.enrollButton}  onClick={this.enrollMerchant} buttonName="ENROLL"/>
            </div>
                <img src={Backimage} width="100%" height="500px" alt="bckimage"/>
            <div style={this.maindiv}>
                <div style={this.divBox1}>
                    <h3>Hava an Account?</h3>
                    <Button  onClick={this.loginMerchant} buttonName="Merchant Login" /><br/>
                    <Button  onClick={this.loginAdmin} buttonName="Non-Merchant Login" />
                </div>
                <div style={this.divBox2}>
                        <h3>Create an Account</h3>
                        <p>Enroll in Advanced same day funding by completing the enrollment application</p>
                        <Button buttonClass="btn btn-primary" onClick={this.enrollMerchant} buttonName="Enroll"/></div>
                </div>
            <div style={this.footer}></div>
         </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
