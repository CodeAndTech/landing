import React from 'react'
import Prof from '../../aset/profesional.jpg'
import './space.css'
export default function Space(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Prof}alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}