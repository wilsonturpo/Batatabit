import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';

//Íconos e imágenes
import logo from './assets/img/logo.svg'
import footerLogo from './assets/img/batata-footer.svg'
//import clockIcon from './assets'


const databit = {
  header:{
    logo: logo,
    titulo: 'La próxima revolución en el intercambio de criptomonedas.',
    subtitulo: 'Batatabit te ayuda a navegar entre los diferentes precios y tendencias',
    boton: 'Conoce nuestros planes'
  },
  main:{
    heading:{
      titulo: 'Creamos un producto sin comparación',
      subtitulo:'Confiable y diseñado para su uso diario'
    },
    cards:[
      {
        icono:'clock icon',
        cabecera:'Tiempo real',
        cuerpo:'Nuestra API toma información minuto a minuto sobre las tasa que más determinan el comportamiento.'
      },
      {
        icono:'eye icon',
        cabecera:'No hay tasas escondidas',
        cuerpo:'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
      },
      {
        icono:'money icon',
        cabecera:'Compara monedas',
        cuerpo:'No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.'
      },
      {
        icono:'check icon',
        cabecera:'Información confiable',
        cuerpo:'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
      },
    ],
    plans:[
      {
        claseCard:'main-plans__card',
        clase:'recommened recommened--basic',
        categoria: 'Básico',
        pago:'Pago Mensual',
        precio:19,
        ahorro:'*Plan básico aunque con todas ventajas.',
        button:{
          claseBoton:'card-info__ca',
          textoBoton:'Escoge este'
        }
      },
      {
        claseCard:'main-plans__card',
        clase:'recommened recommened--basic',
        categoria: 'Básico++',
        pago:'Pago Semestral',
        precio:59,
        ahorro:'*Plan básico++ aunque con todas ventajas.',
        button:{
          claseBoton:'card-info__ca',
          textoBoton:'Escoge este'
        }
      },
      {
        claseCard:'main-plans__card',
        clase:'recommened',
        categoria: 'Recomendado',
        pago:'Pago Anual',
        precio:99,
        ahorro:'*Ahorras $129 comparado al plan mensual.',
        button:{
          claseBoton:'card-info__ca',
          textoBoton:'Escoge este'
        }
      },
      {
        claseCard:'main-plans__card main-plans__card--limited',
        clase:'recommened recommened--limited',
        categoria: 'Limitado',
        pago:'De por vida',
        precio:199,
        ahorro:'*Exclusiva para los primeros 100 clientes con un precio especial.',
        button:{
          claseBoton:'card-info__ca card-info__ca--limited',
          textoBoton:'Escoge este'
        }
      }
    ]
  },
  footer:{
    nombre:'Batatabit',
    numero:'953732685',
    direccion:'Arequipa-Perú',
    imagen:footerLogo
  }  
}


function App() {
  return (
    <div className="App">
      <Header databit={databit}/>
      <Main databit={databit} />
      <Footer databit={databit}/>
    </div>
  );
}

export default App;
