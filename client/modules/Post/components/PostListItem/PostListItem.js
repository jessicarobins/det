import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './ListItem.css';

function ListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.cuid}`} >
          {props.post.name}
        </Link>
      </h3>
      <hr className={styles.divider} />
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
