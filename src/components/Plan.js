import React from 'react'
import './styles/Plan.css'
import Button from './Button'

const Plan = (props) => {

    return (
        <article className={props.claseCard}>
            <p className={props.clase}>{props.categoria}</p>
            <div className="card-info">
                <h3 className="card-info__title">{props.pago}</h3>
                <p className="card-info__price"><span>$</span> {props.precio}</p>
                <p className="card-info__savings">{props.ahorro}</p>
                <Button claseBoton={props.button.claseBoton} textoBoton={props.button.textoBoton} />
            </div>
        </article>      
    )
}

export default Plan