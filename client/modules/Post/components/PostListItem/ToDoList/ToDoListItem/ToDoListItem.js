import React, { Component, PropTypes } from 'react';
import { Fade } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import WrapperCheckbox from './Checkbox';

require('./ToDoListItem.css');

export class ToDoListItem extends Component {
  
  constructor(props) {
    super(props);

    this.state = {open: true};
  }
  
  checked() {
    return this.props.todo.complete;
  }
  
  toggleCheckbox = () => {
    this.props.toggleListItem(this.props.todo);
  }
  
  handleDeleteItem = () => {
    this.setState({open: false})
    this.props.deleteListItem(this.props.todo);
  }
  
  renderCheckbox() {
    return (
      <Fade in={this.state.open} className='todo-list-item'>
        <h4>
          <WrapperCheckbox 
            disabled={this.props.readOnly}
            checked={this.checked()}
            onClick={this.toggleCheckbox} 
            name={this.props.todo.text} />
          {this.props.readOnly ? null :
          <FontAwesome 
            onClick={this.handleDeleteItem}
            className='trash-icon'
            name='trash'/>
          }
        </h4>
      </Fade>
    )
  }
  
  render() {
    return (
      <div className="list-group-item">
        {this.renderCheckbox()}
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
  deleteListItem: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default ToDoListItem;
