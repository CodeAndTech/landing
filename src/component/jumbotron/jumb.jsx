import React from 'react';
import './jumb.css'

export default function Jumbotron(props) {
    return(
        <div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4 text-white">Turn your <span>Design</span> into <br></br>profesional <span>Code</span> with us</h1>
    <a className="nav-item btn btn-light button" href="#">Our Work</a>
  </div>
</div>
    )
}