import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Header(props, context) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" >do<strong style={{color: '#91170a'}}>everything</strong></Link>
        </Navbar.Brand>
      </Navbar.Header>
      {props.user ? 
      <Nav pullRight>
        <LinkContainer to="/help">
          <NavItem>About</NavItem>
        </LinkContainer>
        {userLink(props)}
      </Nav> :
      <Nav pullRight>
        <NavItem href="/auth/google">Login with Google</NavItem>
      </Nav>
      }
    </Navbar>
  );
}

function userLink(props) {
  return (
    props.user.username ? 
      <NavDropdown title={props.user.username} id="basic-nav-dropdown">
        <MenuItem onClick={props.logout}>Log Out</MenuItem>
      </NavDropdown> :
      <NavItem onClick={props.logout}>Log Out</NavItem>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  // }).isRequired,
};

export default Header;
