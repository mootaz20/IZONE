import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponents.css';

export default function NavbarComponents() {
  return (
   <>
    <Navbar>
    <Container>
      <Navbar.Brand href="#home"><img src='https://aigate.me/assets/logo-DZvQUOOp.png' alt="error" /></Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home" className='m-4 text-light'>Home</Nav.Link>
        <Nav.Link href="#features" className='m-4 text-light'>News</Nav.Link>
        <Nav.Link href="#pricing" className='m-4 text-light'>About Us</Nav.Link>
        <Nav.Link href="#pricing" className='mt-4 text-light'>Our Workshops</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 </>
  )
}
