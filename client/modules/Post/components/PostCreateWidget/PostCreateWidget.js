import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button, Alert, Panel } from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';

// Import Style
require('./ListCreateWidget.css');

export class PostCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      selected: '',
      isLoading: false};
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
      <Alert bsStyle="info" className='wantto-alert' onDismiss={this.handleAlertDismiss}>
        <h4>No results found for <strong>{this.state.selected}</strong>.</h4>
        <div className='wantto-alert-buttons'>
          <Button bsStyle="default" onClick={this.addEmptyList}>Create an empty list!</Button>
        </div>
      </Alert>
    );
  }

  render() {
    return (
      <div className='wantto'>
          <Form inline className='wantto-form-container'>
            <h1>
              {'I want to '}
              <FormGroup>
                <FormControl
                  className='wantto-input'
                  inputRef={ref => {this.verbRef = ref}} 
                  type="text" 
                  placeholder="climb" />
              </FormGroup>
              {' every '}
              <FormGroup>
                <Typeahead
                  ref="typeahead"
                  options={this.props.templates}
                  placeholder={'mountain'}
                  labelKey={'name'}
                  allowNew={true}
                  newSelectionPrefix={''}
                  onInputChange={selected => this.setState({selected})}
                />
              </FormGroup>
              { ' ' }
              <Button 
                disabled={this.state.isLoading || this.props.showAddWarning}
                onClick={!this.state.isLoading ? this.addList : null}>
                 {(this.state.isLoading && !this.props.showAddWarning) ? 'Creating...' : 'Create!'}
              </Button>
            </h1>
          </Form>
          { this.props.showAddWarning ? this.renderAlert() : ''}
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
