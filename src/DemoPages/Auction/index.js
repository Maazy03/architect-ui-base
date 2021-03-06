import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Forms
import AddAuction from "./AddAuction";
import AuctionArts from "./AuctionArts";
// Layout
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions";

const Forms = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/all`} component={AuctionArts} />
          <Route path={`${match.url}/add`} component={AddAuction} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Forms;