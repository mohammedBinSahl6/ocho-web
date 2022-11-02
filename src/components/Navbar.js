import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import menu from '../images/menu.svg'
function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'><Logo /></a>
    <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <img className="menu" src={menu} />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link activeclassNAme- className="nav-link active"to='/'>Home</Link>
        </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Graphic Design</a></li>
              <li><a className="dropdown-item" href="#">Programming Services</a></li>
              <li><a className="dropdown-item" href="#">Video Services</a></li>
            </ul>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/fill-form'>Fill the Form</Link>
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
    )
}

export default Navbar;