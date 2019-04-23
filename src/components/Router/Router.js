import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "../Global/App/App";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
