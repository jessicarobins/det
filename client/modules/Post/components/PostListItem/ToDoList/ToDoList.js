import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

// Import Components
import PostListItem from './ToDoListItem/ToDoListItem';

function ToDoList(props) {
  return (
    <div className='todo-list'>
      <ListGroup>
      {
        props.todos.map(todo => (
          <ListGroupItem 
            key={todo._id}>
            <PostListItem
              readOnly={props.readOnly}
              todo={todo}
              toggleListItem={props.toggleListItem}
              deleteListItem={props.deleteListItem}
            />
          </ListGroupItem>
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
  deleteListItem: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default ToDoList;
