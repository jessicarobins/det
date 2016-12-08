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
      isLoading: false,
      panelOpen: false };
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
        {this.state.panelOpen ? 
            '':
            <a onClick={ () => this.setState({panelOpen: true})}>create a new list</a>
          }
        <div className='wantto-form-container'>
          <Panel collapsible expanded={this.state.panelOpen}>
            <h2>
              <Form inline>
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
                   {this.state.isLoading ? 'Creating...' : 'Create List'}
                </Button>
              </Form>
              { this.props.showAddWarning ? this.renderAlert() : ''}
            </h2>
          </Panel>
        </div>
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
