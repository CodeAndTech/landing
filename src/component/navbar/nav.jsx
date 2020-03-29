import React from 'react';
import './nav.css'
export default function Nav() {
    return (
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
  <a className="navbar-brand colorNav" href="#">CodeAndTech</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto bar">
      <a className="nav-item nav-link " href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link " href="#">Features</a>
      <a className="nav-item nav-link " href="#">Pricing</a>
      <a className="nav-item nav-link " href="#">About</a>
      <a className="nav-item btn btn-dark button text-white" href="#">Join Us</a>
    </div>
  </div>
  </div>
</nav>
        </div>
    );
}
