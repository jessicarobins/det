import React, { Component, PropTypes } from 'react';
import { CardColumns } from 'reactstrap';
import MasonryLayout from 'react-masonry-layout';
import * as Q from 'q';

import ListCard from './ListCard/ListCard';

export class Explore extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  

  getItems = () => {
    if (this.props.lists.length >= this.props.count) return;
    const setState = Q.nbind(this.setState, this);
    this.props.toggleLoading(true);
    setState({page: this.state.page+1})
      .done( () => {
        this.props.addMoreLists(this.state.page);
      });
  }

  render() {
    return (
      <MasonryLayout
        style={{width: '100%'}}
        id="items"
        sizes={[ { columns: 3, gutter: 20 } ]}
        infiniteScroll={this.getItems}
        infiniteScrollLoading={this.props.loading} >
        
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
