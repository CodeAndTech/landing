import React from 'react';
import '../style/style.css'
import Icon1 from '../../aset/layers.png'
import Icon2 from '../../aset/web-programming.png'
import Icon3 from '../../aset/shield.png'

export default function panel(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 info-panel">
                    <div className="row text-left">
                        <div className="col-lg">
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                <img src={Icon1} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>Compressed File</h4>
                            <p>We give you small-size file, and it doesnt effect to code performance</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="row">
                                <div className="col-lg-4">
                                <img src={Icon2} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>High Quality Code</h4>
                            <p>We turn your design into high quality code!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="row">
                                <div className="col-lg-4">
                                <img src={Icon3} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>Secured file</h4>
                            <p>Dont worry about your file, we used encrypted message end-to-end</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}