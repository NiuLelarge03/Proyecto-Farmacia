import React, { useState } from 'react';
import { Container, Input } from 'reactstrap';
import TarjetaProducto from './TarjetaProducto';

const ListaProductos = ({ productos }) => {
  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={handleFiltroChange}
        className="filtro-input"
      />
      <div className="d-flex flex-wrap justify-content-center">
        {productosFiltrados.map((producto) => (
          <div className="m-3" key={producto.id} style={{ maxWidth: '300px' }}>
            <TarjetaProducto producto={producto} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListaProductos;
