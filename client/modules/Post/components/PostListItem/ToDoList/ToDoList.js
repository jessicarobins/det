import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

require('./ToDoList.css');

// Import Components
import PostListItem from './ToDoListItem/ToDoListItem';

function ToDoList(props) {
  return (
    <div className='todo-list'>
      <ListGroup>
      {
        props.todos.length ? ToDosPresent(props) :
          ToDosAbsent()
      }
      </ListGroup>
    </div>
  );
}

function ToDosAbsent() {
  return (
    <div>
      <p className='lead'>This list has no items.</p>
    </div>
  )
}

function ToDosPresent(props) {
  return (
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
  )
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
