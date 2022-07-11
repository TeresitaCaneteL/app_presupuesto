import { Container, Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom'


const NavBar=()=>{

  return(
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Resultados">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default NavBar;