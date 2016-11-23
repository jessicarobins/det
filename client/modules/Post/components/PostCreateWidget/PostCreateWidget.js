import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

// Import Style
import styles from './ListCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    // const verbRef = this.refs.verb;
    // const actionRef = this.refs.action;
    if (this.verbRef.value && this.actionRef.value) {
      this.props.addPost(this.verbRef.value, this.actionRef.value);
      this.verbRef.value = this.actionRef.value = '';
    }
  };

  render() {
    const cls = `${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <Form inline>
          {'I want to '}
          <FormGroup>
            <FormControl inputRef={ref => {this.verbRef = ref}} type="text" placeholder="climb" />
          </FormGroup>
          {' every '}
          <FormGroup>
            <FormControl inputRef={ref => {this.actionRef = ref}} type="text" placeholder="mountain" />
          </FormGroup>
          {' '}
          <Button onClick={this.addPost}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
