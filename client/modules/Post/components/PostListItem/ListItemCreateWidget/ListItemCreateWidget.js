import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export class ListItemCreateWidget extends Component {
  addListItem = () => {
    if (this.textRef.value) {
      this.props.addListItem(this.textRef.value);
      this.textRef.value = '';
    }
  };

  render() {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <FormControl inputRef={ref => {this.textRef = ref}} type="text"/>
          </FormGroup>
          {' '}
          <Button onClick={this.addListItem}>
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

ListItemCreateWidget.propTypes = {
  addListItem: PropTypes.func.isRequired,
};

export default ListItemCreateWidget;
