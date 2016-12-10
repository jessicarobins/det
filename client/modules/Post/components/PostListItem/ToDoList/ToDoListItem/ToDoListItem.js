import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export class ToDoListItem extends Component {
  
  checked() {
    return this.props.todo.complete;
  }
  
  toggleCheckbox() {
    this.props.toggleListItem(this.props.todo);
  }
  
  renderCheckbox() {
    return (
      <Checkbox 
        defaultChecked={this.checked()} 
        onChange={() => this.toggleCheckbox()}>
        {this.props.todo.text}
      </Checkbox>
    )
  }
  
  renderReadOnly() {
    const styles = this.checked() ? {} : {visibility: 'hidden'};
    return (
      <span>
        <FontAwesome style={styles} name='check'/>
        {' '}
        {this.props.todo.text}
      </span>
    )
  }
  
  render() {
    return (
      <div>
        <h4>
          {
            this.props.readOnly ?
            this.renderReadOnly() :
            this.renderCheckbox()
          }
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
