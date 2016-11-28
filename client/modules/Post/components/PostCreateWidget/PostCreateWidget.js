import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';

// Import Style
import styles from './ListCreateWidget.css';

export class PostCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { selected: '' };
  }
  
  addPost = () => {
    if (this.verbRef.value && this.state.selected.length) {
      this.props.addPost(this.verbRef.value, this.state.selected);
    }
  };
  
  handleAlertDismiss = () => {
    this.clearFields();
    this.props.toggleAddWarning();
  };
  
  clearFields() {
    this.verbRef.value = '';
    this.refs.typeahead.getInstance().clear();
  }
  
  renderAlert() {
    if (this.props.showAddWarning) {
      return (
        <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss}>
          <h4>No results found for <strong>{this.state.selected}</strong>.</h4>
          <p>
            <Button bsStyle="primary">Create an empty list</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Try again</Button>
          </p>
        </Alert>
      );
    }
  }

  render() {
    const cls = `${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div>
          <Form inline>
            {'I want to '}
            <FormGroup>
              <FormControl inputRef={ref => {this.verbRef = ref}} type="text" placeholder="climb" />
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
            {' '}
            <Button onClick={this.addPost}>
              Submit
            </Button>
            
          </Form>
        </div>
        <div>
          {this.renderAlert()}
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  showAddWarning: PropTypes.bool.isRequired,
  toggleAddWarning: PropTypes.func.isRequired,
};

export default PostCreateWidget;
