import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Todo App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      </Nav.Link>
        <Link to='/profile' >Profile</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavigationBar;
