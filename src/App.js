import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetail from "./components/projects/ProjectDetail";
import SignIn from "./components/auth/SignIn";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/detail/:id" component={ProjectDetail}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/createproject" component={CreateProject}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
