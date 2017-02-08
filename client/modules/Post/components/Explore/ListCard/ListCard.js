import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardSubtitle, Progress } from 'reactstrap';
import { browserHistory } from 'react-router';

if (process.env.BROWSER) {
  require('./ListCard.scss');
}

function ListCard(props) {
  const { list } = props;
  return (
    <Card 
      style={{width: '300px'}}
      block 
      className='list-card' 
      onClick={() => goToList(props, list)}>
      <CardTitle>{list.fullName}</CardTitle>
      <CardSubtitle>{list.items.length} items</CardSubtitle>
      <Progress value={list.percentComplete} />
      <CardText>{items(list)}</CardText>
    </Card>
  );
}

function items(list) {
  return (
    list.items.map( (item, index) => (
      index === list.items.length-1 ? item.text : `${item.text}, `
    ))
  )
}

function goToList(props, list) {
  props.changeTab('');
  browserHistory.push(`/lists/${list.cuid}`);
}

ListCard.propTypes = {
  changeTab: PropTypes.func.isRequired,
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListCard;
