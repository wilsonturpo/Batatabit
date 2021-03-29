import React from 'react'
import './styles/Footer.css'

const Footer = (props) => {

    //Desestructuramos el footer para optener los datos
    const {footer} = props.databit

    return (
        <footer>
            <section className="left">
                <ul>
                    <li><a href="/">{footer.nombre}</a></li>
                    <li><a href="/">{footer.numero}</a></li>
                    <li><a href="/">{footer.direccion}</a></li>
                </ul>
            </section>
                <section className="right">
                <img src={footer.imagen} alt="logo de batatabit"/>
            </section>
        </footer>
    )
}

export default Footer