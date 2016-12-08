import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button, Alert, Jumbotron } from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';

// Import Style
require('./ListCreateWidget.css');

export class PostCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { selected: '', isLoading: false };
    this.isLoading = false;
  }
  
  addList = () => {
    if (this.verbRef.value && this.state.selected.length) {
      this.setState({isLoading: true});
      this.props.addPost(this.verbRef.value, this.state.selected);
    }
  };
  
  addEmptyList = () => {
    if (this.verbRef.value && this.state.selected.length) {
      this.props.addEmptyList(this.verbRef.value, this.state.selected);
      this.handleAlertDismiss();
    }
  };
  
  handleAlertDismiss = () => {
    this.clearFields();
    this.props.toggleAddWarning();
    this.setState({isLoading: false});
  };
  
  clearFields() {
    this.verbRef.value = '';
    this.refs.typeahead.getInstance().clear();
  }
  
  renderAlert() {
    return (
      <Alert bsStyle="warning" className='wantto-alert' onDismiss={this.handleAlertDismiss}>
        <h4>No results found for <strong>{this.state.selected}</strong>.
          <span className='pull-right'>
            <Button bsStyle="primary" onClick={this.addEmptyList}>Create an empty list</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Try again</Button>
          </span>
        </h4>
      </Alert>
    );
  }

  render() {
    return (
      <div>
        <Jumbotron className='wantto-form-jumbo'>
        <h2>
          <Form inline>
            {'I want to '}
            <FormGroup bsSize="large">
              <FormControl
                className='wantto-input'
                inputRef={ref => {this.verbRef = ref}} 
                type="text" 
                placeholder="climb" />
            </FormGroup>
            {' every '}
            <FormGroup>
              <Typeahead
                bsSize="large"
                ref="typeahead"
                options={this.props.templates}
                placeholder={'mountain'}
                labelKey={'name'}
                allowNew={true}
                newSelectionPrefix={''}
                onInputChange={selected => this.setState({selected})}
              />
            </FormGroup>
          </Form>
        </h2>
        { this.props.showAddWarning ? this.renderAlert() :
        <p className='wantto-form-button-container'>
          <Button 
            disabled={this.state.isLoading}
            onClick={!this.state.isLoading ? this.addList : null}
            bsSize="large">
             {this.state.isLoading ? 'Creating...' : 'Create List'}
          </Button>
        </p>
        }
        </Jumbotron>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  addEmptyList: PropTypes.func.isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  showAddWarning: PropTypes.bool.isRequired,
  toggleAddWarning: PropTypes.func.isRequired,
};

export default PostCreateWidget;
