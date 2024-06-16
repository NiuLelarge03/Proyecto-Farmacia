import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Card className="producto-card">
        <CardImg top width="100%" src={producto.imagen} alt={producto.nombre} className="producto-img" />
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h5" className="mb-2">{producto.nombre}</CardTitle>
          <CardSubtitle className="mb-3">{producto.precio}</CardSubtitle>
          <Button color="primary" onClick={toggleModal} className="mt-auto">Ver más</Button>
        </CardBody>
      </Card>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{producto.nombre}</ModalHeader>
        <ModalBody>
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TarjetaProducto;
