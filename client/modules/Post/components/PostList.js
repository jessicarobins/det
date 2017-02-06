import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

if (process.env.BROWSER) {
  require('./ListList.scss');
}

function PostList(props) {
  return (
    <ListGroup className='list-list'>
      {
        props.lists.map(list => (
          <ListGroupItem
            className="justify-content-between"
            key={list.cuid}
            tag="a"
            onClick={() => goToList(props, list)}>
            {list.name}
            { list.percentComplete < 100 ?
              <Badge className='percent-span'>{list.percentComplete}%</Badge> :
              <FontAwesome name='trophy' className='percent-trophy percent-span'/>
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
