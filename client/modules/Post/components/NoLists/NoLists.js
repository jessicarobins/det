import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Card, CardText, CardTitle } from 'reactstrap';

import ListCard from '../Explore/ListCard/ListCard';

if (process.env.BROWSER) {
  require('./NoLists.scss');
}

class NoLists extends Component {
  
  goExplore = () => {
    this.props.changeTab('explore');
    browserHistory.push('/explore');
  }
  
  footer() {
    return <a onClick={this.props.getRandomList}>Give me another random list!</a>
  }
  
  render() {
    return (
      <div className='no-lists-container'>
        
        <Card block className='no-lists-card'>
          <CardTitle>You have no lists.</CardTitle>
          <CardText>
            <Button 
              color="primary"
              size="lg" 
              onMouseDown={this.goExplore}>Explore Lists</Button>
          </CardText>
        </Card>
        <ListCard
          header='Need some inspiration?'
          footer={this.footer()}
          small
          list={this.props.list}
          changeTab={this.props.changeTab} />
      </div>
    );
  }
}

NoLists.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  getRandomList: PropTypes.func.isRequired,
};

export default NoLists;
