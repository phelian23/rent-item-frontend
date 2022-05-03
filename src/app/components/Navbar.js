import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  const openNav = () => {
    document.querySelector(".main-navigation").classList.add("active");
  }

  const closeNav = () => {
    document.querySelector(".main-navigation").classList.remove("active");
  }
  
  return (
    <div>
        <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark" className="d-block main-navigation">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={openNav}/>
            <div className="d-flex overlay d-lg-none" onClick={closeNav}></div>
            <Container className='d-lg-flex sidebar' id="responsive-navbar-nav">
            <Navbar.Brand href="/" className="order-2 order-lg-1 mr-auto mr-lg-3 ml-3 ml-lg-0">
                <img
                    alt=""
                    src="https://www.scoot.com/assets/images/scoot-logo-white.svg"
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                />{' '}
                Scoot
            </Navbar.Brand>
            <Nav className="order-lg-2 mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/myfavourites">My Favourites</Nav.Link>
                <Nav.Link href="/addscooter">Add Scooter</Nav.Link>
                <Nav.Link href="/deletescooter">Delete Scooter</Nav.Link>
            </Nav>
            <Nav className='order-lg-3'>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <i class="fa fa-search" aria-hidden="true"></i>
              </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar