import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ListItemCreateWidget from '../../components/PostListItem/ListItemCreateWidget/ListItemCreateWidget';
import ToDoList from '../../components/PostListItem/ToDoList/ToDoList';
import Progress from '../../components/PostListItem/Progress/Progress';
import Tiles from '../../components/PostListItem/Tiles/Tiles';
import Actions from '../../components/PostListItem/Actions/Actions';
import Header from '../../../App/components/Header/Header';
import { Grid, Col, Row } from 'react-bootstrap';
import * as _ from 'lodash';

// Import Actions
import { fetchList, addListItemRequest, toggleListItemRequest, deleteListItemRequest, cloneListRequest } from '../../ListActions';
import { toggleSpinnerOff } from '../../../App/AppActions';
import { logOut as logoutAction } from '../../../User/UserActions';

// Import Selectors
import { getPost } from '../../ListReducer';
import { getUser } from '../../../User/UserReducer'; 

class PostDetailPage extends Component {
  
  componentDidMount() {
    this.props.dispatch(toggleSpinnerOff());
  }

  handleAddListItem = (text) => {
    const cuid = this.props.list.cuid;
    this.props.dispatch(addListItemRequest({ cuid, text }));
  };
  
  handleCloneList = () => {
    const cuid = this.props.list.cuid;
    this.props.dispatch(cloneListRequest({ cuid }));
  };
  
  handleToggleListItem = (listItem) => {
    const cuid = this.props.list.cuid;
    const list_item_id = listItem._id;
    this.props.dispatch(toggleListItemRequest({ cuid, list_item_id }));
  };
  
  handleDeleteListItem = (listItem) => {
    const cuid = this.props.list.cuid;
    const list_item_id = listItem._id;
    this.props.dispatch(deleteListItemRequest({ cuid, list_item_id }));
  };
  
  belongsToUser() {
    const belongs = !!this.props.user && _.find(this.props.list._users, {_id: this.props.user._id});
    return belongs;
  }
  
  loggedIn() {
    return !!this.props.user;
  }
  
  handleLogout = () => {
    this.props.dispatch(logoutAction());
  };
  
  render() {
    return (
      <div>
        <Helmet title={this.props.list.name} />
        <Header
          user={this.props.user}
          logout={this.handleLogout}
        />
        <Grid className='container'>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <h2>I want to <strong>{this.props.list.name}</strong></h2>
            </Col>
          </Row>
          <Row>
            <Col md={1} mdOffset={1}>
              <Tiles list={this.props.list} />
            </Col>
            <Col xs={12} md={6} mdOffset={1}>
              <Progress list={this.props.list}/>
              <ToDoList 
                readOnly={!this.belongsToUser()}
                todos={this.props.list.items}
                deleteListItem={this.handleDeleteListItem}
                toggleListItem={this.handleToggleListItem} />
              { this.belongsToUser() ? 
              <ListItemCreateWidget addListItem={this.handleAddListItem} />
              : null }
            </Col>
            <Col md={1} mdOffset={1}>
              { this.loggedIn() ?
              <Actions
                cloneList={this.handleCloneList}
                list={this.props.list} /> : null }
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
