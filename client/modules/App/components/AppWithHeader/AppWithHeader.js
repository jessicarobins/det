import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
      <div>
        <Header
          user={this.props.user.data}
          logout={this.handleLogout}
        />
        <div>
          {this.props.children}
        </div>
      </div>
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
