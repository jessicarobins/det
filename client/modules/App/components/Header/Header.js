import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export function Header(props, context) {
  return (
    <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" >Some clever app name</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
        <Button onClick={props.logout}>Logout</Button> 
      </Navbar.Form>
    </Navbar>
    
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
