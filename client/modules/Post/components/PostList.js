import React, { PropTypes } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

if (process.env.BROWSER) {
  require('./ListList.scss');
}

function PostList(props) {
  return (
    <Card className='list-list'>
      <CardHeader tag="h3">You want to...</CardHeader>
      <ListGroup className='list-group-flush'>
        {
          props.lists.map(list => (
            <ListGroupItem
              className="justify-content-between"
              key={list.cuid}
              tag="a"
              onClick={() => goToList(props, list)}>
                <h5 className='list-item'>{list.name}</h5>
                { list.percentComplete < 100 ?
                  <Badge className='percent-span'>{list.percentComplete}%</Badge> :
                  <FontAwesome name='trophy' className='percent-trophy percent-span'/>
                }
              
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Card>
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
