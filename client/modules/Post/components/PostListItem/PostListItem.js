import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './ListItem.css';

function ListItem(props) {
  return (
    <div>
      <h3>
        <Link to={`/lists/${props.post.cuid}`} >
          {props.post.name}
        </Link>
      </h3>
    </div>
  );
}

ListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListItem;
