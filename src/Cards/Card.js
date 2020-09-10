
import React from 'react';
import './Card.css';



export default function Card(props) {

        return (
            <section>
                <div className="header">
                    <h3>{props.data.title}</h3>
                </div>
                <div className="img-container" >
                    <img className ="img" src={props.data.img} alt={props.data.title} />
                </div>
                <div className="desc">
                <p>{props.data.desc}</p>
                </div>
           </section>
        )
}