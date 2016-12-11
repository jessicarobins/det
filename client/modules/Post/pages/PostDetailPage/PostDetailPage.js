import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ListItemCreateWidget from '../../components/PostListItem/ListItemCreateWidget/ListItemCreateWidget';
import ToDoList from '../../components/PostListItem/ToDoList/ToDoList';
import { ProgressBar, Grid, Col, Row } from 'react-bootstrap';
import * as _ from 'lodash';


// Import Style
import styles from '../../components/PostListItem/ListItem.css';

// Import Actions
import { fetchList, addListItemRequest, toggleListItemRequest } from '../../PostActions';
import { toggleSpinnerOff } from '../../../App/AppActions';

// Import Selectors
import { getPost } from '../../PostReducer';
import { getUser } from '../../../User/UserReducer'; 

class PostDetailPage extends Component {
  
  componentDidMount() {
    this.props.dispatch(toggleSpinnerOff());
  }
  
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
  
  belongsToUser() {
    return _.includes(this.props.list._users, this.props.user._id);
  }
  
  render() {
    return (
      <div>
        <Helmet title={this.props.list.name} />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <div>
                <h3>I want to <strong>{this.props.list.name}</strong></h3>
                <ProgressBar 
                  striped
                  now={this.props.list.percentComplete}/>
              </div>
              <ToDoList 
                readOnly={!this.belongsToUser()}
                todos={this.props.list.items}
                toggleListItem={this.handleToggleListItem} />
              { this.belongsToUser() ? 
              <ListItemCreateWidget addListItem={this.handleAddListItem} />
              : null }
            </Col>
          </Row>
        </Grid>
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
    user: getUser(state)
  };
}

PostDetailPage.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  // user: PropTypes.shape({
  //   _id: PropTypes.string.isRequired,
  // }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
