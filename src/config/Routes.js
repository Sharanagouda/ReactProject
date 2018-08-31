import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import LandingPage from "./../containers/widgits/enrollment/LandingPage";
import EnrollMerchant from "./../containers/widgits/enrollment/EnrollMerchant";
import AddMerchantDetails from "./../containers/widgits/enrollment/AddMerchantDetails";
import Agreement from "./../containers/widgits/enrollment/Agreement";
import MerchantLogin from "../containers/widgits/enrollment/EnrollMerchantStep3";

const PageNotFound = () => (<div>404 Page Not Found.</div>);

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/enroll-merchant" exact component={EnrollMerchant} />
                    <Route path="/merchant-details" exact component={AddMerchantDetails} />
                    <Route path="/agreement" exact component={Agreement} />
                    <Route path="/marchant-login" exact component={MerchantLogin} />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
        );
    }
}

export default Routes;