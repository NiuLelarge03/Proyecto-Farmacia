// src/components/Contacto.jsx
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Contacto.css';

const InfoContacto = ({ titulo, informacion }) => {
  return (
    <div className="mb-4">
      <h5>{titulo}</h5>
      <p>{informacion}</p>
    </div>
  );
};

const Contacto = () => {
  return (
    <Container className="contacto-container">
      <h2 className="text-center mb-4">Contacto</h2>
      <Row>
        <Col md={6}>
          <InfoContacto
            titulo="Dirección"
            informacion="Av. de las Americas, Villa Fátima"
          />
          <InfoContacto
            titulo="Email"
            informacion="niurkalelarge03@gmail.com"
          />
          <InfoContacto
            titulo="Teléfono"
            informacion="+591 64164262"
          />
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7651.0006601280365!2d-68.1423163004964!3d-16.500819800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f207041f0c8f9%3A0xfe509a51df3cd847!2sFarmacias%20Bolivia!5e0!3m2!1ses!2sbo!4v1718416521617!5m2!1ses!2sbo"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="map-frame"
          ></iframe>
        </Col>
        <Col md={6}>
          <h4>Formulario de Contacto</h4>
          <Form>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input type="text" name="nombre" id="nombre" placeholder="Tu nombre" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Tu email" />
            </FormGroup>
            <FormGroup>
              <Label for="mensaje">Mensaje</Label>
              <Input type="textarea" name="mensaje" id="mensaje" placeholder="Tu mensaje" />
            </FormGroup>
            <Button color="primary">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
