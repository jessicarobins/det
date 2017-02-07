import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, 
  NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

import Brand from '../Brand/Brand'

if (process.env.BROWSER) {
  require('./Header.scss');
}

export function Header(props, context) {
  return (
    <Navbar toggleable inverse={props.inverse} className='header'>
      <Container className='justify-content-between'>
        { props.tabs ?
        <Tabs 
          currentTab={props.currentTab}
          changeTab={props.changeTab}/> : null }
        <Brand light={props.inverse}/>
        <Nav navbar>
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

class Tabs extends Component {
  
  goHome = () => {
    if(this.props.currentTab !== 'home') {
      this.toggle('home');
      browserHistory.push('/');
    }
  }
  
  goExplore = () => {
    if(this.props.currentTab !== 'expore') {
      this.toggle('explore');
      browserHistory.push('/explore');
    }
  }
  
  toggle(tab) {
    if (this.props.currentTab !== tab) {
      this.props.changeTab(tab);
    }
  }
  
  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ 
              active: this.props.currentTab === 'home',
              'tab-link': true
            })}
            onClick={this.goHome} >
            <FontAwesome name='home' /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ 
              active: this.props.currentTab === 'explore',
              'tab-link': true
            })}
            onClick={this.goExplore} >
            <FontAwesome name='compass' /> Explore
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
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
  inverse: PropTypes.bool,
  logout: PropTypes.func,
  tabs: PropTypes.bool,
  changeTab: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Header;
