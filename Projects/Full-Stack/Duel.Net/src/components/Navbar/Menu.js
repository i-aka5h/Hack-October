import React from 'react'
import { Navbar,  NavDropdown,  Nav, Container } from 'react-bootstrap';
import { GiCrownCoin, GiConsoleController } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Menu = ({updateUser}) =>{
  
  const history = useHistory()
  var myuser = JSON.parse(localStorage.getItem("MyUser"))
  return(
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand onClick={()=>{history.push('/home')}}><GiConsoleController size={42}/>    DUEL.NET</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick={()=>{history.push('/aboutus')}}>About Us</Nav.Link> 
      <Nav.Link onClick={()=>{history.push('/pricing')}}>Pricing</Nav.Link>
      <NavDropdown title="Games" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://playvalorant.com/en-us/">Valorant</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.leagueoflegends.com/en-us/?_gl=1*j17zia*_ga*MTc1Mjk1NDE1NS4xNjM0OTkxMTc1*_ga_FXBJE5DEDD*MTYzNDk5MTE3NC4xLjAuMTYzNDk5MTE3NC42MA..">League Of Legends</NavDropdown.Item>
        

      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link className="coins" id="coin" onClick={()=>{history.push('/pricing')}}>{myuser.dcoins} <GiCrownCoin/></Nav.Link>
      <Nav.Link className="button" onClick={() => updateUser({})}>Logout</Nav.Link>
      <Nav.Link onClick={()=>{history.push('/profile')}}>
        Welcome {myuser.name}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  )
    
}

export default Menu;