import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4 footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Dirección: Av. de las Americas, Villa Fatima</p>
            <p>Email: niurkalelarge03@gmail.com</p>
            <p>Teléfono: +591 64164262</p>
          </Col>
          <Col md={6}>
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/FarmaciasBolivia/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/farmaciasbo?lang=es" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/farmacias.bolivia/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-2 mb-2" />
        <Row>
          <Col md={12}>
            <p className="text-center">&copy; 2024 App Farmacia. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
