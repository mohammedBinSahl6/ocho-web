import React from "react";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">OCHO Services</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Arts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;