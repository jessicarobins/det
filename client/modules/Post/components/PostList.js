import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

require('./ListList.css');

function PostList(props) {
  return (
    <ListGroup>
      {
        props.lists.map(list => (
          <ListGroupItem
            className="justify-content-between"
            key={list.cuid}
            tag="a"
            onClick={() => goToList(props, list)}>
            {list.name}
            { list.percentComplete < 100 ?
              <Badge pill>{list.percentComplete}%</Badge> :
              <FontAwesome name='trophy'/>
            }
          </ListGroupItem>
        ))
      }
    </ListGroup>
  );
}

function goToList(props, list) {
  props.changeTab('');
  browserHistory.push(`/lists/${list.cuid}`);
}

PostList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostList;
