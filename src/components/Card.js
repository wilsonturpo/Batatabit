import React from 'react'
import './styles/Card.css'

const Card = (props) => {
    return (
        <article className="product-card__item">
            <span className={props.icono}></span>
            <p className="product-card__title">{props.cabecera}</p>
            <p className="product-card__text">{props.cuerpo}</p>
        </article>
    )
}

export default Card