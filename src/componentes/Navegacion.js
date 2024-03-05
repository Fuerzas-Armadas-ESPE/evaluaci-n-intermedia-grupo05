import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Productos from '../Productos';
import Crear from '../Crear';
import Inicio from '../Inicio';
import Login from '../Login';

function Navegacion() {
  return (
    <Router>
      <Navbar
        className="custom-navbar"
        expand="md"
        variant="dark"
        style={{
          background: 'linear-gradient(to right, #ff5e62, #ff9966)',
        }}
      >
        <Container>
          <Navbar.Brand className="fw-bold text-light">Mi Prueba Intermedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/inicio" className="text-light">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productCard" className="text-light">
                Ver Actividades
              </Nav.Link>
              <Nav.Link as={Link} to="/crear" className="text-light">
                Crear Actividad
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="text-light">
                Acceder
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/productCard" element={<Productos />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Navegacion;
