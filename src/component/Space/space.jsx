import React from 'react'
import Prof from '../../aset/profesional.jpg'
import '../style/style.css'
export default function Space(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 space">
                    <img src={Prof} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-5 space text-left">
                    <h3>we have a <span>professional</span> crew</h3>
                    <p>Turn your design to high quality code with us</p>
                    <a href="#" className="btn btn-dark button">Send Your Project</a>
                </div>
            </div>
        </div>
    )
}