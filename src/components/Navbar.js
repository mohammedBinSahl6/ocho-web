import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import menu from '../images/menu.svg'
import WaveNav from "./vectors/WaveNav";
function Navbar(){
    return(
        <div className="the-navbar fixed-top">
          <nav className="navbar navbar-expand-lg fixed-top navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'><Logo /></a>
    <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <img className="menu" src={menu} />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink exact activeClassName='navbar__link--active' className="nav-link "to='/'>Home</NavLink>
        </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" href="#" to='/VDesign'>VDesign</NavLink></li>
              <li><a className="dropdown-item" href="#">Programming Services</a></li>
              <li><a className="dropdown-item" href="#">Video Services</a></li>
            </ul>
      </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='navbar__link--active' to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/fill-form' activeClassName='navbar__link--active'>Fill the Form</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Communities</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>

        </div>
    )
}

export default Navbar;