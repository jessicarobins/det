import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class UsernameCreateForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false};
  }
  
  createUsername = (e) => {
    e.preventDefault();
    if (this.usernameRef.value) {
      this.setState({isLoading: true});
      this.props.addUsername(this.usernameRef.value);
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <Form onSubmit={this.createUsername}>
        <FormGroup>
          <ControlLabel>First, create a public-facing username</ControlLabel>
          <FormControl
            autoFocus={true}
            inputRef={ref => {this.usernameRef = ref}} 
            type="text" 
            placeholder="username" />
        </FormGroup>
        <Button 
          disabled={this.state.isLoading}
          onClick={!this.state.isLoading ? this.createUsername : null}>
           {this.state.isLoading ? 'Creating...' : 'Create!'}
        </Button>
      </Form>
    );
  }
}

UsernameCreateForm.propTypes = {
  addUsername: PropTypes.func.isRequired,
};

export default UsernameCreateForm;
