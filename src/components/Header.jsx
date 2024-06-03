import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <div>

<Navbar  expand="lg" className="bg" fixed-top>
      <Container>
        <Navbar.Brand href="#home" ><strong className='logo'>LandKit Mob.</strong></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="col d-flex justify-content-center">
            <Nav.Link href="#link">Landing</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">Documentation</Nav.Link>
          </Nav>
    <Button variant="primary"className='btnm'>Buy Now</Button>{' '}
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
