import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import Navigation from './components/Navigation';
import About from "./routers/About";
import Home from './routers/Home';
import Detail from "./routers/Detail";
import "./App.css";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;