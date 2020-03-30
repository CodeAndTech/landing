import React, { Component } from 'react'
import '../style/style.css'


 const Card =({property}) =>{
    const{id,index,quote,nama,profesi,picture}=property
        return (
           
            <div>
                <figure className={`figure-${index}`} id={index}>
                    <img src={picture}className="figure-img img-fluid" alt="..." />
                    <figcaption className="figure-caption text-center">
                        <h5>{nama}</h5>
                        <p>{profesi}</p>
                    </figcaption>
                </figure>
            </div>
        )
    
}

export default Card