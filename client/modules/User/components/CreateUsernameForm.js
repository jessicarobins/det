import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class UsernameCreateForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false};
  }
  
  createUsername = () => {
    if (this.usernameRef.value) {
      this.setState({isLoading: true});
      this.props.addUsername(this.usernameRef.value);
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Create a public-facing username</ControlLabel>
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
      </form>
    );
  }
}

UsernameCreateForm.propTypes = {
  addUsername: PropTypes.func.isRequired,
};

export default UsernameCreateForm;
