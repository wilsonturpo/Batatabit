import React from 'react'
import './styles/Header.css'

const Header = (props) => {
  //Desestructuramos el objeto header dentro de databit
  const {header} = props.databit

    return (
    <header>
        <img src={header.logo} alt="logo-batatabit"/>
        <div className="header__title">
          <h1>{header.titulo}</h1>
          <p>{header.subtitulo}</p>
          <a href="#plans" className="header__button">{header.boton}<span></span></a>
        </div>
    </header>
    )
}

export default Header