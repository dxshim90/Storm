import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";
import Login from "../../pages/Login/Login";
import Employees from "../../pages/Employees/Employees";
import Employee from "../../pages/Employee/Employee";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/employee/:id" component={Employee} />
    </Switch>
  );
};

export default Content;
