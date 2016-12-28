import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

// Import Components
import Header from '../../App/components/Header/Header';
import Help from '../components/Help';

import { logOut as logoutAction } from '../../User/UserActions';

import { getUser } from '../../User/UserReducer';

class HelpPage extends Component {
    
  handleLogout = () => {
    this.props.dispatch(logoutAction());
  };

  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          logout={this.handleLogout} />
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Help />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

HelpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

HelpPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(HelpPage);
