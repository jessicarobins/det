import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Brand from '../Brand/Brand'

if (process.env.BROWSER) {
  require('./Header.scss');
}

export function Header(props, context) {
  return (
    <Navbar color="faded" full toggleable className='header'>
      <Container>
        <NavbarBrand tag={Link} to="/"><Brand />.io</NavbarBrand>
        <Nav className="ml-auto" navbar>
          { props.user ? <UserLink logout={props.logout} user={props.user} /> :
            <NavItem>
              <NavLink href="/auth/google">Login with Google</NavLink>
            </NavItem>
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

class UserLink extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  render() {
    return (
      this.props.user.username ? 
        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            {this.props.user.username}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.props.logout}>Log Out</DropdownItem>
          </DropdownMenu>
        </NavDropdown> :
        <NavItem>
          <NavLink onClick={this.props.logout}>Log Out</NavLink>
        </NavItem>
    );
  }
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
