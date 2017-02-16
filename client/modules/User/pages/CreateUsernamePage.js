import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import Brand from '../../App/components/Brand/Brand';
import CreateUsernameForm from '../components/CreateUsernameForm';

import { getUser } from '../UserReducer'; 
import * as userActions from '../UserActions';

class CreateUsernamePage extends Component {
    
  handleAddUsername = (username) => {
    this.props.dispatch(userActions.setUsernameRequest({username: username}));
  };
  
  handleLogout = () => {
    this.props.dispatch(userActions.logOut());
  };
  
  render() {
    return (
      <Container className='tall'>
        <Row>
          <Col md='8'>
            <h1 className='display-4'>Welcome to <Brand />.io</h1>
            <CreateUsernameForm
              addUsername={this.handleAddUsername} />
          </Col>
        </Row>
      </Container>
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
  // user: PropTypes.object.isRequired,
};

CreateUsernamePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CreateUsernamePage);
