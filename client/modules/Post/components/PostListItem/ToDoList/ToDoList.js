import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './ToDoListItem/ToDoListItem';

function ToDoList(props) {
  return (
    <div>
      {
        props.todos.map(todo => (
          <PostListItem
            todo={todo}
            key={todo._id}
          />
        ))
      }
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default ToDoList;
