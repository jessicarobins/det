import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ListItemCreateWidget from '../../components/PostListItem/ListItemCreateWidget/ListItemCreateWidget';
import ToDoList from '../../components/PostListItem/ToDoList/ToDoList';
import { ProgressBar } from 'react-bootstrap';
import * as _ from 'lodash';

// Import Style
import styles from '../../components/PostListItem/ListItem.css';

// Import Actions
import { fetchList, addListItemRequest, toggleListItemRequest } from '../../PostActions';

// Import Selectors
import { getPost } from '../../PostReducer';

class PostDetailPage extends Component {
  
  percentComplete() {
    const numItems = this.items.length;
    const numComplete = _.filter(this.items, 'complete').length;
    return _.round(numComplete*100/numItems) || 0;
  }

  handleAddListItem = (text) => {
    const cuid = this.props.list.cuid;
    this.props.dispatch(addListItemRequest({ cuid, text }));
  };
  
  handleToggleListItem = (listItem) => {
    const cuid = this.props.list.cuid;
    const list_item_id = listItem._id;
    this.props.dispatch(toggleListItemRequest({ cuid, list_item_id }));
  };
  
  render() {
    return (
      <div>
        <Helmet title={this.props.list.name} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3>{this.props.list.name}</h3>
          <ProgressBar 
            striped
            now={this.props.list.percentComplete}
            label={`${this.props.list.percentComplete}% Complete!`}/>
        </div>
        <ToDoList 
          todos={this.props.list.items}
          toggleListItem={this.handleToggleListItem} />
        <ListItemCreateWidget addListItem={this.handleAddListItem} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostDetailPage.need = [params => {
  return fetchList(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    list: getPost(state, props.params.cuid),
  };
}

PostDetailPage.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
