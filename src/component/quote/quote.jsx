import React from 'react'
import '../style/style.css'
import Card from './card'
import Girls1 from '../../aset/girls1.jpg'
import Girls2 from '../../aset/girls2.jpg'
import Girls3 from '../../aset/girls3.jpg'



export default function Quote(props) {
    return(
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col-6 quote">
                    <p>“Before we even did a kickoff call, I knew we'd make the right choice to work with the codeandtech team. Their body of work and influence on the industry speak volumes.”</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center img-card">
                    <Card src={Girls1}/>
                    <Card src={Girls2} h5={'Alice Max'} p={'Designer'} className="Utama"/>
                    <Card src={Girls3}/>
                </div>
            </div>
        </div>
    )
}