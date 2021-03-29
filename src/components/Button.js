import React from 'react'
import './styles/Button.css'

const Button = (props) => {

    return (
        <button 
            className={props.claseBoton}>{props.textoBoton}
            <span></span>
        </button>
    )
}

export default Button