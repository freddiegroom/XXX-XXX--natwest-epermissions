import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "screens/1.ProductChoice/current-account";
import Loan from "screens/1.ProductChoice/loan/index";
import PCNewCustomer from "screens/2.PersonalDetails/PCNewCustomer/index";
import AccountDetailsBlank from "screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "screens/4.PermissionsInfo";
import Scenario1 from "screens/5.MarketingPreferences/NewCustomer/Scenario1";
import PrivacyPermissions from "screens/6.PrivacyPermissions";
import ScrollToTop from "../../ScrollToTop";

const Condition1: FC = () => {
  const { product = "current account", debug } = useEFSData();
  const [debugProduct, setDebugProduct] = useState("loan");
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <ScrollToTop />
          {debug && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDebugProduct("current account");
                }}
              >
                current account
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDebugProduct("loan");
                }}
              >
                loan
              </button>
            </>
          )}
          {!debug && product === "current account" && <CurrentAccount />}
          {!debug && product === "loan" && <Loan />}
          {debug && debugProduct === "current account" && <CurrentAccount />}
          {debug && debugProduct === "loan" && <Loan />}
        </Route>
        <Route path="/PersonalDetails">
          {" "}
          <PCNewCustomer />
        </Route>
        <Route path="/AccountDetails">
          {" "}
          <AccountDetailsBlank debugCondition={1} />
        </Route>{" "}
        <Route path="/PermissionsInfo">
          {" "}
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario1 />
        </Route>
        <Route path="/PrivacyPermissions">
          {" "}
          <PrivacyPermissions hideSubText />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition1;
