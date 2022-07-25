import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar Header expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">BGMIBUZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">SCHEDULE</Nav.Link>
            <Nav.Link href="#pricing">STATS</Nav.Link>
            <NavDropdown title="TEAMS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SOUL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                GODLIKE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">OG</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                MORE
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">RANKINGS</Nav.Link>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;