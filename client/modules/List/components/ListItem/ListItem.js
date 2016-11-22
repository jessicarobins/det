import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './ListItem.css';

function ListItem(props) {
  return (
    <div className={styles['single-list']}>
      <h3 className={styles['list-title']}>
        <Link to={`/lists/${props.list.cuid}`} >
          {props.list.name}
        </Link>
      </h3>
      <p className={styles['list-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteList" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

ListItem.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListItem;
