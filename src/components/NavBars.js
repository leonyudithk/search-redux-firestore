import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const NavBars = () => {
 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
         
                <Image width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1646005470/logo_jsnmjs.jpg" alt="" />
     
          <Nav className="me-auto">
            <Nav.Link ><Link  to="/home" style={{color: "green"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/agregar" style={{color: "green"}} >Agregar</Link></Nav.Link>
            <Nav.Link ><Link to="/register" style={{color: "green"}} >Register</Link></Nav.Link>
            <Nav.Link ><Link to="/" style={{color: "green"}} >login</Link></Nav.Link>
            <Nav.Link ><Link to="/api" style={{color: "green"}} >Api</Link></Nav.Link>
           </Nav>
        </Container>
        <Nav>
             <Button variant="outline-success" >
                 <Image  width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png" alt="" />
             </Button>
        </Nav>
        
      </Navbar>

    </div>
  );
};

export default NavBars;