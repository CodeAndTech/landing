import React from 'react';
import './panel.css'
import Icon1 from '../../aset/layers.png'
import Icon2 from '../../aset/web-programming.png'
import Icon3 from '../../aset/shield.png'

export default function panel(props) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-lg-8 info-panel">
                    <div className="row text-left">
                        <div className="col-lg">
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                <img src={Icon1} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>Compressed File</h4>
                            <p>lorem ipsum dolor sit ipsum dolor que amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="row">
                                <div className="col-lg-4">
                                <img src={Icon2} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>Compressed File</h4>
                            <p>lorem ipsum dolor sit ipsum dolor que amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="row">
                                <div className="col-lg-4">
                                <img src={Icon3} alt="icon" className="float-left" />
                                </div>
                                <div className="col-lg-6 desc">
                                <h4>Compressed File</h4>
                            <p>lorem ipsum dolor sit ipsum dolor que amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}