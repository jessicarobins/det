import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ListDetails from '../../components/ListDetails/ListDetails';
import Header from '../../../App/components/Header/Header';
import { Grid, Col, Row } from 'react-bootstrap';

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
  
  handleLogout = () => {
    this.props.dispatch(logoutAction());
  };
  
  render() {
    return (
      <div>
        <Helmet title={this.props.list ? this.props.list.name : '404: List not found'} />
        <Header
          user={this.props.user}
          logout={this.handleLogout}
        />
        {this.props.list ?
        <ListDetails
          addListItem={this.handleAddListItem}
          cloneList={this.handleCloneList}
          toggleListItem={this.handleToggleListItem}
          deleteListItem={this.handleDeleteListItem}
          list={this.props.list}
          user={this.props.user}/>
        : 
        <Grid>
          <Row>
            <Col>
              <h2>404: List not found</h2>
            </Col>
          </Row>
        </Grid>}
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
  // list: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   cuid: PropTypes.string.isRequired,
  // }).isRequired,
  // user: PropTypes.shape({
  //   _id: PropTypes.string.isRequired,
  // }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
