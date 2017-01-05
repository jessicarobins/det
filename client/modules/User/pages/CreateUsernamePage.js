import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import CreateUsernameForm from '../components/CreateUsernameForm';

import { getUser } from '../UserReducer'; 
import * as userActions from '../UserActions';

class CreateUsernamePage extends Component {
    
  handleAddUsername = (username) => {
    this.props.dispatch(userActions.setUsernameRequest({username: username}));
  };
  
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <h1>Welcome to Do Everything!</h1>
            <CreateUsernameForm
              addUsername={this.handleAddUsername} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

CreateUsernamePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

CreateUsernamePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CreateUsernamePage);
