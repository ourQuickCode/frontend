import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import Navbar from "./components/navbar";

export const App = () => {
  return (
    <Fragment>
      <Navbar />;
      <Router>
        <Home path="/" />
        <Profile path="/profile" />
      </Router>
    </Fragment>
  );
};
