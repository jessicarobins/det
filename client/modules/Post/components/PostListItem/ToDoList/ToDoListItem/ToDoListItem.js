import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-bootstrap';

export class ToDoListItem extends Component {
  
  checked() {
    return this.props.todo.complete;
  }
  
  toggleCheckbox() {
    this.props.toggleListItem(this.props.todo);
  }
  
  render() {
    return (
      <div>
        <h4>
          <Checkbox 
            disabled={this.props.readOnly}
            defaultChecked={this.checked()} 
            onChange={() => this.toggleCheckbox()}>
            {this.props.todo.text}
          </Checkbox>
        </h4>
      </div>
    );
  }
}

ToDoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  toggleListItem: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default ToDoListItem;
