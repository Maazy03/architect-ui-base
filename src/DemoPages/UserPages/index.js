import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import LoginBoxed from "./LoginBoxed/";
import LoggedIn from "./LoginBoxed/LoggedIn"
import RegisterBoxed from "./RegisterBoxed/";

import ForgotPasswordBoxed from "./ForgotPasswordBoxed/";

import VerifyCode from "./VerifyCode";
import ResetPassword from "./ResetPassword";

const UserPages = ({ match }) => (
  < Fragment >
    <div className="app-container">
      <Route path={`${match.url}/login-boxed`} component={LoginBoxed} />
      <Route path={`${match.url}/LoggedIn`} component={LoggedIn} />
      <Route path={`${match.url}/register-boxed`} component={RegisterBoxed} />
      <Route path={`${match.url}/forgot-password-boxed`} component={ForgotPasswordBoxed} />
      <Route path={`${match.url}/verify-code-boxed`} component={VerifyCode} />
      <Route path={`${match.url}/reset-password-boxed`} component={ResetPassword} />
    </div>
  </Fragment >
);

export default UserPages;
