import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Label } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

require('./ListItem.css');

function ListItem(props) {
  return (
    <div>
      <h3>
        <Link to={`/lists/${props.post.cuid}`} >
          {props.post.name}
        </Link>
        { props.post.percentComplete < 100 ?
          <Label className='pull-right percent-span'>{props.post.percentComplete}%</Label> :
          <FontAwesome name='trophy' className='pull-right percent-span percent-trophy'/>
        }
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
