import React from 'react'
import './styles/Main.css'
import Card from './Card'
import Plan from './Plan'

const Main = (props) => {
  //Desestructuramos el main
  const {main} = props.databit

  //Obtenemos los cards
  const cards = main.cards
  //Obtenemos los plans
  const plans = main.plans


    //Recorremos los objetos del arreglo para enviar los datos al componente Card
    const cardItems = cards.map((element, index) =>
        <Card 
            key={index} 
            icono={element.icono} 
            cabecera={element.cabecera} 
            cuerpo={element.cuerpo} 
        />

    );

    //Recorremos los objetos del arreglo para enviar los datos al componente Plans
    const planItems = plans.map((element, index) =>
        <Plan 
            key={index} 
            claseCard={element.claseCard}
            clase={element.clase} 
            categoria={element.categoria} 
            pago={element.pago} 
            precio={element.precio}
            ahorro={element.ahorro}
            button={element.button}
        />            
    );
    return (       
        <main>
            <section className="main-product-detail">
                <section className="product-card">
                    {cardItems}
                </section>
            </section>

            <section id="plans" className="main-plans">
                <div className="main-plans__heading">
                    <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                    <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                </div>

                <section className="main-plans__slider">
                    {planItems}
                </section>
            </section>
        </main>
    )
}

export default Main