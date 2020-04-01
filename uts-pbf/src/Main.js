import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Barang from "./Barang";
import About from "./About";
import Contact from "./Contact";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title"> F I Y A         L A P T O P</h1>
          <h3 className="subtitle">Beli Laptop disini Sekarang!</h3>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/barang">Brand</NavLink></li>
            <li><NavLink to="/about">About Store</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/barang" component={Barang}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;