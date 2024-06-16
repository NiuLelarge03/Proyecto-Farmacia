import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalProducto = ({ isOpen, toggle, producto }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{producto.nombre}</ModalHeader>
      <ModalBody>
        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
        <p>{producto.descripcion}</p>
        <p>Precio: {producto.precio}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalProducto;
