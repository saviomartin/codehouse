import React from "react";
import { Route, Switch } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./styles/App.css";
import { Home, New } from "./core";
import { Toaster } from "react-hot-toast";

const App = () => (
  <div className="h-full w-full !overflow-x-hidden">
    <Toaster position="bottom-right" reverseOrder={false} />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
    </Switch>
  </div>
);

export default App;
