import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardHeader, 
  CardBlock, CardFooter, CardSubtitle, Progress } from 'reactstrap';
import { browserHistory } from 'react-router';
import classnames from 'classnames';

if (process.env.BROWSER) {
  require('./ListCard.scss');
}

function ListCard(props) {
  const { list } = props;
  return (
    <Card 
      className={classnames({ 
        short: props.small,
        'list-card': true
      })}
      onClick={() => goToList(props, list)}>
      {props.header ? <CardHeader tag="h3">{props.header}</CardHeader> : null}
      <CardBlock>
        <CardTitle>{list.fullName}</CardTitle>
        <CardSubtitle className='text-muted'>{list.items.length} items</CardSubtitle>
        <Progress value={list.percentComplete} />
        <CardText>{items(list)}</CardText>
      </CardBlock>
      {props.footer ? <CardFooter>{props.footer}</CardFooter> : null}
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
