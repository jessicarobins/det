import React, { PropTypes } from 'react';

function ToDoListItem(props) {
  return (
    <div>
      <h4>
        {props.todo.text}
      </h4>
    </div>
  );
}

ToDoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToDoListItem;
