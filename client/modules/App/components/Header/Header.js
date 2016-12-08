import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';

export function Header(props, context) {
  return (
    <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" >Some clever app name</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Text pullRight>
        <Navbar.Link onClick={props.logout}>log out</Navbar.Link> 
      </Navbar.Text>
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
