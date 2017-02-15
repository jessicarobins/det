import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardFooter, ListGroup, ListGroupItem, Badge, Input } from 'reactstrap';
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
      startItemIndex: 0,
      filter: '',
      displayedLists: props.lists
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
    return this.lastItemIndex() < this.state.displayedLists.length;
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
  
  filter = () => {
    this.setState({filter: this.searchRef.value});
    const lists =  _.filter(this.props.lists, o => { 
      if (!this.state.filter.length) {
        return true;
      }
      return o.name.includes(this.state.filter);
    });
    this.setState({
      startItemIndex: 0,
      displayedLists: lists
    });
  }
  
  full() {
    return !this.showHeader() && this.state.displayedLists.length > this.perPage;
  }
  
  render() {
    return (
      <Card 
        className={classnames({ 
          full: this.full(),
          'list-list': true
        })}>
        <CardHeader tag="h3" className='you-wanna'>
          You want to... 
          <Input
            getRef={ref => {this.searchRef = ref}} 
            onChange={this.filter}
            name="search" 
            id="search" 
            placeholder="placeholder" />
        </CardHeader>
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
            _.chain(this.state.displayedLists)
              .slice(this.state.startItemIndex, this.lastItemIndex())
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
              .value()
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
