import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';

require('./ToDoList.css');

// Import Components
import PostListItem from './ToDoListItem/ToDoListItem';

function ToDoList(props) {
  return (
    <div className='todo-list'>
      <ListGroup>
      {
        props.todos.map(todo => (
          <PostListItem
            readOnly={props.readOnly}
            todo={todo}
            key={todo._id}
            toggleListItem={props.toggleListItem}
          />
        ))
      }
      </ListGroup>
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
  toggleListItem: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default ToDoList;
