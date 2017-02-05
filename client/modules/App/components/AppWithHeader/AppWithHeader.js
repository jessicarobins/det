import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

// Import Components
import Header from '../../components/Header/Header';

// actions
import { logOut as logoutAction } from '../../../User/UserActions';
import { changeTab } from '../../AppActions';

import { getUser } from '../../../User/UserReducer';
import { getTab } from '../../AppReducer';

export class AppWithHeader extends Component {

  handleLogout = () => {
    this.props.dispatch(logoutAction());
  }
  
  handleChangeTab = (tab) => {
    this.props.dispatch(changeTab(tab));
  }

  render() {
    return (
      <StickyContainer>
        <Sticky className='top'>
          <Header
            tabs
            changeTab={this.handleChangeTab}
            currentTab={this.props.currentTab}
            user={this.props.user}
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
  currentTab: PropTypes.string,
  user: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
    currentTab: getTab(state)
  };
}

export default connect(mapStateToProps)(AppWithHeader);
