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
        { props.userData.authenticated ? 
        <Button>Logout</Button> :
        <Button href="/auth/google">Login</Button>
        }
      </Navbar.Form>
    </Navbar>
    
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Header;
