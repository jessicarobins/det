import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export function Header(props, context) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" >Some clever app name</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown title={props.user.name} id="basic-nav-dropdown">
          <MenuItem onClick={props.logout}>log out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
