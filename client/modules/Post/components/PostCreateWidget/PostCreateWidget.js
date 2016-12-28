import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button, Alert, Panel } from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';
import * as _ from 'lodash';

// Import Style
require('./ListCreateWidget.css');

export class PostCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false};
  }
  
  addList = () => {
    if (this.verbRef.value && this.props.selectedTemplate.length) {
      this.setState({isLoading: true});
      this.props.addPost(this.verbRef.value, this.props.selectedTemplate);
    }
  };
  
  addEmptyList = () => {
    if (this.verbRef.value && this.props.selectedTemplate.length) {
      this.props.addEmptyList(this.verbRef.value, this.props.selectedTemplate);
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
    this.props.removeSelectedTemplate();
  }
  
  setSelected = (selected) => {
   this.props.addSelectedTemplate(selected);
  }
 
  renderAlert() {
    return (
      <Alert bsStyle="info" className='wantto-alert' onDismiss={this.handleAlertDismiss}>
        <h4>No results found for <strong>{this.props.selectedTemplate}</strong>.</h4>
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
                  autoFocus={true}
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
                  selected={[this.props.selectedTemplate]}
                  onInputChange={_.debounce(this.setSelected)}
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
  addSelectedTemplate: PropTypes.func.isRequired,
  removeSelectedTemplate: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
};

export default PostCreateWidget;
