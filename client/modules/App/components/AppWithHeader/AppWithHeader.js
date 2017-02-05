import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

// Import Components
import Header from '../../components/Header/Header';

// actions
import { logOut as logoutAction } from '../../../User/UserActions';

export class AppWithHeader extends Component {

  handleLogout = () => {
    this.props.dispatch(logoutAction());
  }

  render() {
    return (
      <StickyContainer>
        <Sticky className='top'>
          <Header
            user={this.props.user.data}
            logout={this.handleLogout}
          />
        </Sticky>
        <div>
          {this.props.children}
        </div>
      </StickyContainer>
    );
  }
}

AppWithHeader.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.user
  };
}

export default connect(mapStateToProps)(AppWithHeader);
