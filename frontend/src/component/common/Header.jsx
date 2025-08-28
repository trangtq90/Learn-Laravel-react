import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/profile-img.jpg';

const Header = () => {
  return (
    <header>
        <Navbar expand="lg" className="fixed-top">
          <div className='container py-3'>
            <Navbar.Brand href="#home" className='logoText'>
              <img src={Logo} alt="#" className='logoImage' />
              <span className='px-2'>Lớp Toán Thầy Tráng </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Link</Nav.Link>
                <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

        </Navbar>
      </header>
  )
}

export default Header