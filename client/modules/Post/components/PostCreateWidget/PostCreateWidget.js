import React, { Component, PropTypes } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Typeahead from 'react-bootstrap-typeahead';
import * as _ from 'lodash';

// Import Style
if (process.env.BROWSER) {
  require('./ListCreateWidget.scss');
}

import NoResultsModal from './NoResultsModal/NoResultsModal';

export class PostCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false};
  }
  
  addList = (e) => {
    e.preventDefault();
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
      <NoResultsModal 
        addEmptyList={this.addEmptyList}
        handleAlertDismiss={this.handleAlertDismiss}
        selectedTemplate={this.props.selectedTemplate} />
    );
  }

  render() {
    return (
      <div className='wantto'>
          <Form className='wantto-form-container'>
            <h1>
              I want to
            </h1>
            <h1>
              <FormGroup>
                <Input
                  autoFocus={true}
                  className='wantto-input'
                  getRef={ref => {this.verbRef = ref}} 
                  type="text" 
                  placeholder="climb" />
              </FormGroup>
            </h1>
            <h1>every</h1>
            <h1>
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
            </h1>
              <Button 
                size="lg"
                disabled={this.state.isLoading || this.props.showAddWarning}
                onClick={!this.state.isLoading ? this.addList : null}>
                 {(this.state.isLoading && !this.props.showAddWarning) ? 'Creating...' : 'Create!'}
              </Button>
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
