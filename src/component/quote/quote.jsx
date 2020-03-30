import React, { Component } from 'react'
import '../style/style.css'

import Card from './card'
import Data from './data'
import data from './data'



export default class Quote extends Component {
    state = {
        properties: Data.app,
        property: Data.app[0]
    }

    next = (e) => {
        const plusIndex = this.state.property.index + 1
        this.setState({
            property: Data.app[plusIndex]
        })
        console.log()
    }

    prev = () => {
        const minusIndex = this.state.property.index - 1
        this.setState({
            property: Data.app[minusIndex]
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-6 quote">
                        <p>{this.state.property.quote}</p>
                    </div>
                </div>
                <div className="row justify-content-center row-card">
                    <div className="col-lg-6 d-flex justify-content-left img-card">
                        <div className="row img-card-wrapper">
                            <div className="item d-flex" style={{
                                'transform':`translateX(-${this.state.property.index*(100/this.state.properties.length)}%)`
                            }}> 
                            {
                                this.state.properties.map(property => <Card key={property.id} property={property} />)
                            }
</div>
                           
                        </div>
                    </div>
                </div>
                <button onClick={this.next}
                    disabled={this.state.property.index === Data.app.length - 1}>next</button>
                <button onClick={this.prev} disabled={this.state.property.index === 0}>prev</button>
            </div>
        )
    }

}