import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FormularioContacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Formulario enviado!');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Ingrese su correo electrónico" required />
        </FormGroup>
        <FormGroup>
          <Label for="mensaje">Mensaje</Label>
          <Input type="textarea" name="mensaje" id="mensaje" required />
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    </Container>
  );
};

export default FormularioContacto;
