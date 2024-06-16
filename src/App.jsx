import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavbarComponent from './components/Navbar';
import ListaProductos from './components/ListaProductos';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import FormularioContacto from './components/FormularioContacto';
import ProductoCarousel from './components/ProductoCarousel';
import './App.css';

const App = () => {
  const productos = [
    {
      id: 1,
      nombre: 'NODOLEX',
      imagen: 'https://www.bago.com.bo/wp-content/uploads/2021/10/Nodolex-1.png',
      descripcion: 'Nodolex, Laboratorios Bago',
      precio: 'Bs. 50.00',
    },
    {
      id: 2,
      nombre: 'PARACETAMOL',
      imagen: 'https://www.saebolivia.com/wp-content/uploads/2022/11/2748.png',
      descripcion: 'Paracetamol, Laboratorios SAE',
      precio: 'Bs. 35.00',
    },
    {
      id: 3,
      nombre: 'ACTRON',
      imagen: 'https://farmacorp.com/cdn/shop/files/7793640215523_700x700.jpg?v=1714442119',
      descripcion: 'Ibuprofeno, Laboratorio Bayer',
      precio: 'Bs. 45.00',
    },
    {
      id: 4,
      nombre: 'NOVADOL',
      imagen: 'https://contenido.medicamentos.bo/medicamento/imagen/40888.jpg',
      descripcion: 'Novadol, Laboratorios Cofar',
      precio: 'Bs. 75.00',
    },
    {
      id: 5,
      nombre: 'ASPIRINA',
      imagen: 'https://s1.elespanol.com/2018/06/08/ciencia/salud/farmacologia-farmacologia_clinica-salud_313481328_81018046_1706x960.jpg',
      descripcion: 'Aspirina, Laboratorios Bayer',
      precio: 'Bs. 20.00',
    },
    {
      id: 6,
      nombre: 'AZITROMICINA',
      imagen: 'https://www.laboratoriochile.cl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/03/Azitromicina_500MG_3C_BE_HD.jpg.webp',
      descripcion: 'Azitromicina, Laboratorios Chile',
      precio: 'Bs. 120.00',
    },
    {
      id: 7,
      nombre: 'COTRIMOXAZOL',
      imagen: 'https://contenido.medicamentos.bo/medicamento/imagen/38463.jpg',
      descripcion: 'Cotrimoxazol, Laboratorio IFA',
      precio: 'Bs. 25.00',
    },
    {
      id: 8,
      nombre: 'NEUROVIMIN',
      imagen: 'https://contenido.medicamentos.bo/medicamento/imagen/32248.jpg',
      descripcion: 'Neurovimin, Laboratorios INTI',
      precio: 'Bs. 110.00',
    },
    {
      id: 9,
      nombre: 'MENTISAN',
      imagen: 'https://www.lostiempos.com/sites/default/files/media_imagen/2012/3/7/341592.jpg',
      descripcion: 'Mentisan, Laboratorios INTI',
      precio: 'Bs. 7.00',
    },
    {
      id: 10,
      nombre: 'REFRIANEX',
      imagen: 'https://www.bago.com.bo/wp-content/uploads/2023/12/Refrianex-Dia-%E2%80%93-Noche.png',
      descripcion: 'Refrianex, Laboratorios Bago',
      precio: 'Bs. 28.00',
    },
    {
      id: 11,
      nombre: 'VISIONAL',
      imagen: 'https://camsacorp.bo/wp-content/uploads/2022/05/101042.png',
      descripcion: 'Visional, Laboratorios Camsa',
      precio: 'Bs. 80.00',
    },
    {
      id: 12,
      nombre: 'LOSARTAN',
      imagen: 'https://contenido.medicamentos.bo/medicamento/imagen/38551.jpg',
      descripcion: 'Losartan, Laboratorios Cofar',
      precio: 'Bs. 52.00',
    },
    {
      id: 12,
      nombre: 'LOSARTAN',
      imagen: 'https://contenido.medicamentos.bo/medicamento/imagen/38551.jpg',
      descripcion: 'Losartan, Laboratorios Cofar',
      precio: 'Bs. 52.00',
    },
  ];

  return (
    <Router>
      <div className="bg-pattern">
        <NavbarComponent />

        
        <Container className="main-container">
          <Switch>
            <Route path="/productos">
              <h1 className="mt-4 text-center text-primary">Bienvenido a la Farmacia de Niurka Lelarge Roldan</h1>
              <p className="text-center text-secondary">Busca el producto de tu preferencia...</p>
              <hr className="my-4" />
              <ListaProductos productos={productos} />
            </Route>
            <Route path="/servicios">
              <Servicios />
            </Route>
            <Route path="/contacto">
              <h1 className="mt-4 text-center text-primary">Contáctanos</h1>
              <FormularioContacto />
            </Route>
            <Route path="/">
              {/* Página principal */}
              <h1 className="mt-4 text-center text-primary">Bienvenido a la Farmacia de Niurka Lelarge Roldan</h1>
              <p className="text-center text-secondary">Busca el producto de tu preferencia...</p>
              <hr className="my-4" />
              <ProductoCarousel /> {/* Reemplazamos ListaProductos por ProductoCarousel */}
              <ListaProductos productos={productos} />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
