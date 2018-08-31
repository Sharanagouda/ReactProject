import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from "./../../../components/buttons/Button";



class PopupWindow extends Component {

   render() {
     return (
        <div>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <p className="modal-title" > Entered passcode is correct!</p>
                </div> 
                <div className="modal-footer">
                   <Button buttonName="OK"></Button>
                </div>
              </div>
           </div>
        </div>

     );
   }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindow);