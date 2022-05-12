import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../redux/actions/authentications';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionStatus = localStorage.getItem('session-status');

  const handleSignOut = () => {
    dispatch(signOut());
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const openNav = () => {
    document.querySelector('.main-navigation').classList.add('active');
  };

  const closeNav = () => {
    document.querySelector('.main-navigation').classList.remove('active');
  };

  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark" className="d-block main-navigation">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={openNav} />
        <div className="d-flex overlay d-lg-none" onClick={closeNav} />
        <Container className="d-lg-flex sidebar" id="responsive-navbar-nav">
          <Navbar.Brand href="/" className="order-2 order-lg-1 mr-auto mr-lg-3 ml-3 ml-lg-0">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGIxlIopL2Rkz2W31izyQcASgFiW-bAHDEw&usqp=CAU"
              width="30px"
              height="30px"
              className="d-inline-block align-top"
            />
            {' '}
            Scoot
          </Navbar.Brand>
          {sessionStatus ? (
            <>
              <Nav className="order-lg-2 mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/myfavourites">My Favourites</Nav.Link>
                <Nav.Link href="/addscooter">Add Scooter</Nav.Link>
                <Nav.Link href="/deletescooter">Delete Scooter</Nav.Link>
              </Nav>
              <Nav className="order-lg-3 ml-auto">
                <Nav.Link href="#" onClick={() => handleSignOut()}>Sign Out</Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav className="order-lg-3">
              <Nav.Link href="/signin">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )}
        </Container>

      </Navbar>
    </div>
  );
};

export default NavBar;
