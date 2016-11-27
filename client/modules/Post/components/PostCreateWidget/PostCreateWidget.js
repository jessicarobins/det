import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
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
      this.verbRef.value = '';
      this.refs.typeahead.getInstance().clear();
    }
  };

  render() {
    const cls = `${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <h1>
          <Form inline>
            {'I want to '}
            <FormGroup bsSize="lg">
              <FormControl 
                className={`${styles['list-input']}`}
                inputRef={ref => {this.verbRef = ref}} 
                type="text" 
                placeholder="climb" />
            </FormGroup>
            {' every '}
            <FormGroup bsSize="lg">
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
        </h1>
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
};

export default PostCreateWidget;
