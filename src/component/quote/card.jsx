import React, { Component } from 'react'
import '../style/style.css'


export default class Card extends Component {
    render() {
        return (
            <div>
                <figure class="figure">
                    <img src={this.props.src} class="figure-img img-fluid" alt="..." />
                    <figcaption class="figure-caption text-center">
                        <h5>{this.props.h5}</h5>
                        <p>{this.props.p}</p>
                    </figcaption>
                </figure>
            </div>
        )
    }
}