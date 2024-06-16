// src/components/Servicios.jsx
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaTruck, FaUserMd, FaTags } from 'react-icons/fa';
import './Servicios.css';

const Servicio = ({ icono: Icono, titulo, descripcion }) => {
  return (
    <Card className="mb-4 servicio-card">
      <CardBody className="text-center">
        <Icono className="servicio-icon mb-3" />
        <CardTitle tag="h5" className="card-title">{titulo}</CardTitle>
        <CardText className="card-text">{descripcion}</CardText>
      </CardBody>
    </Card>
  );
};

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      icono: FaTruck,
      titulo: 'Entrega a domicilio',
      descripcion: 'Entrega rápida y segura de tus productos directamente a tu hogar.',
    },
    {
      id: 2,
      icono: FaUserMd,
      titulo: 'Asesoría farmacéutica',
      descripcion: 'Consulta personalizada con nuestros farmacéuticos para resolver tus dudas.',
    },
    {
      id: 3,
      icono: FaTags,
      titulo: 'Promociones exclusivas',
      descripcion: 'Descubre nuestras ofertas especiales y promociones solo para clientes.',
    },
  ];

  return (
    <div className="servicios-background">
      <Container className="py-4">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <Row>
          {servicios.map((servicio) => (
            <Col lg={4} md={6} key={servicio.id}>
              <Servicio icono={servicio.icono} titulo={servicio.titulo} descripcion={servicio.descripcion} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;
