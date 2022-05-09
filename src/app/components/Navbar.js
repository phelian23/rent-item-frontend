import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
<<<<<<< HEAD
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
=======
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/actions/authentications'
import { useNavigate } from 'react-router-dom'
>>>>>>> dev

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
  }

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
            <div className='icon-container'><FontAwesomeIcon icon={faSearch} className="search-icon d-sm-inline"></FontAwesomeIcon></div>
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
            {user.isSignIn ? (
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
            <Nav className='order-lg-3'>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            )}
            </Container>
            
        </Navbar>
    </div>
  )
}

export default NavBar