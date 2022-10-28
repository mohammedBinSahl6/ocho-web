import React from "react";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">UV</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Graphic Design</a></li>
              <li><a class="dropdown-item" href="#">Programming Services</a></li>
              <li><a class="dropdown-item" href="#">Video Services</a></li>
            </ul>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fill the Form</a>
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