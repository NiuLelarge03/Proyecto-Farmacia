import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">Farmacias Bolivia</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/productos">Productos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/servicios">Servicios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/contacto">Contacto</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
