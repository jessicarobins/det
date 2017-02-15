import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardFooter, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import * as _ from 'lodash';

if (process.env.BROWSER) {
  require('./ListList.scss');
}

class PostList extends Component {
  
  constructor(props) {
    super(props);
    
    this.perPage = 8;
    
    this.state = {
      startItemIndex: 0
    };
  }
  
  goToList(props, list) {
    props.changeTab('');
    browserHistory.push(`/lists/${list.cuid}`);
  }
  
  lastItemIndex() {
    return this.state.startItemIndex + this.perPage;
  }
  
  showFooter() {
    return this.lastItemIndex() < this.props.lists.length;
  }
  
  showHeader() {
    return this.state.startItemIndex > 0;
  }
  
  pageDown = () => {
    this.setState({startItemIndex: this.lastItemIndex()+1});
  }
  
  pageUp = () => {
    const newStartIndex = _.max([0, this.state.startItemIndex - this.perPage - 1]);
    this.setState({startItemIndex: newStartIndex});
  }
  
  render() {
    return (
      <Card 
        className={classnames({ 
          full: !this.showHeader(),
          'list-list': true
        })}>
        <CardHeader tag="h3" className='you-wanna'>You want to...</CardHeader>
        { 
          this.showHeader() &&
          <CardHeader 
            className='paginate-button up' 
            onClick={this.pageUp}>
            <FontAwesome name='chevron-up'/>
          </CardHeader>
        }
        <ListGroup className='list-group-flush'>
          {
            _.slice(this.props.lists, this.state.startItemIndex, this.lastItemIndex())
              .map(list => (
                <ListGroupItem
                  className="justify-content-between"
                  key={list.cuid}
                  tag="a"
                  onClick={() => this.goToList(this.props, list)}>
                    <h5 className='list-item'>{list.name}</h5>
                    { list.percentComplete < 100 ?
                      <Badge className='percent-span'>{list.percentComplete}%</Badge> :
                      <FontAwesome name='trophy' className='percent-trophy percent-span'/>
                    }
                  
                </ListGroupItem>
              ))
          }
        </ListGroup>
        {
          this.showFooter() &&
            <CardFooter 
              className='paginate-button'
              onClick={this.pageDown}>
              <FontAwesome name='chevron-down'/>
            </CardFooter>
        }
      </Card>
    );
  }
}

PostList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostList;
