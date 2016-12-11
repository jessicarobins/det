import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Label } from 'react-bootstrap';

function ListItem(props) {
  return (
    <div>
      <h3>
        <Link to={`/lists/${props.post.cuid}`} >
          {props.post.name}
        </Link>
        <Label className='pull-right'>{props.post.percentComplete}%</Label>
      </h3>
    </div>
  );
}

ListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
