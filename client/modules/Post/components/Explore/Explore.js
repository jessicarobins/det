import React, { Component, PropTypes } from 'react';
import { CardColumns } from 'reactstrap';
import MasonryLayout from 'react-masonry-layout';
import FontAwesome from 'react-fontawesome';

import * as Q from 'q';

import ListCard from './ListCard/ListCard';

export class Explore extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  
  end = () => this.props.lists.length >= this.props.count

  getItems = () => {
    if (this.end()) return;
    const setState = Q.nbind(this.setState, this);
    this.props.toggleLoading(true);
    setState({page: this.state.page+1})
      .done( () => {
        this.props.addMoreLists(this.state.page);
      });
  }
  
  spinner = () => {
    return (
      <div className='text-center p-3'>
        <FontAwesome name='spinner' className='fa-spin fa-2x' />
      </div>
    )
  }
  
  endIndicator = () => {
    return <div className='p-3' />;
  }

  render() {
    return (
      <MasonryLayout
        style={{width: '100%'}}
        id="items"
        sizes={[ { columns: 3, gutter: 30 } ]}
        infiniteScroll={this.getItems}
        infiniteScrollLoading={this.props.loading} 
        infiniteScrollEnd={this.end()}
        infiniteScrollSpinner={this.spinner()}
        infiniteScrollEndIndicator={this.endIndicator()} >
        {
          this.props.lists.map((list, i) => (
          <ListCard 
            key={i}
            list={list}
            changeTab={this.props.changeTab}
            />))
        }
      </MasonryLayout>
    )
  }
}

Explore.propTypes = {
  addMoreLists: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  toggleLoading: PropTypes.func.isRequired
};

export default Explore;
