import React, { Component } from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {
    
    render() { 
        return ( 
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">SATURN</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                        
                    </Nav>  
                    <Nav>
                        <button>Log out</button>
                    </Nav> 
                    
                </Navbar> 
            </div>
         );
    }
}
 
export {Header};