import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

export class ListItemCreateWidget extends Component {
  addListItem = (e) => {
    e.preventDefault();
    if (this.textRef.value) {
      this.props.addListItem(this.textRef.value);
      this.textRef.value = '';
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addListItem}>
          <FormGroup>
            <InputGroup>
              <FormControl 
                inputRef={ref => {this.textRef = ref}}
                type="text" />
              <InputGroup.Button>
                <Button onClick={this.addListItem}>Add Item</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

ListItemCreateWidget.propTypes = {
  addListItem: PropTypes.func.isRequired,
};

export default ListItemCreateWidget;
