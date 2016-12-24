import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../../../App/components/Header/Header';

require('./ListListPage.css')

// Import Components
import PostList from '../../components/PostList';
import RecentLists from '../../components/RecentLists/RecentLists';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addListRequest, fetchPosts, fetchRecentLists, deletePostRequest } from '../../ListActions';
import { fetchTemplates } from '../../../Template/TemplateActions';
import { toggleAddWarning } from '../../../App/AppActions';
import { logOut as logoutAction } from '../../../User/UserActions';

// Import Selectors
import { getShowAddWarning } from '../../../App/AppReducer';
import { getPosts, getRecentLists } from '../../ListReducer';
import { getTemplates } from '../../../Template/TemplateReducer';
import { getAuth, getUser } from '../../../User/UserReducer';

class PostListPage extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.props.dispatch(toggleSpinnerOn());
  // }
  
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchTemplates());
    this.props.dispatch(fetchRecentLists());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddList = (verb, action) => {
    this.props.dispatch(addListRequest({ verb, action }));
  };
  
  handleAddEmptyList = (verb, action) => {
    this.props.dispatch(addListRequest({ verb, action }, 'lists'));
  };

  handleToggleAddWarning = () => {
    this.props.dispatch(toggleAddWarning());
  };
  
  handleLogout = () => {
    this.props.dispatch(logoutAction());
  };
  
  render() {
    return (
      
      <div>
        <Header
          user={this.props.user}
          logout={this.handleLogout}
        />
        <Grid className='wide-grid'>
          <Row className='show-grid'>
            <Col xs={12} md={6} mdOffset={2}>
              <h1 className='wantto-header'>I want to</h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <PostCreateWidget 
                toggleAddWarning={this.handleToggleAddWarning}
                showAddWarning={this.props.showAddWarning}
                addPost={this.handleAddList} 
                addEmptyList={this.handleAddEmptyList}
                showAddPost={true} 
                templates={this.props.templates} />
              <PostList 
                handleDeletePost={this.handleDeletePost}
                lists={this.props.lists} />
            </Col>
            <Col md={2}>
              <RecentLists
                lists={this.props.recentLists} />
            </Col>
          </Row>
        </Grid>
      </div>
      
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [
  () => { return fetchPosts(); },
  () => { return fetchTemplates(); },
  () => { return fetchRecentLists(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    lists: getPosts(state),
    recentLists: getRecentLists(state),
    templates: getTemplates(state),
    showAddWarning: getShowAddWarning(state),
    authorized: getAuth(state),
    user: getUser(state)
  };
}

PostListPage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  recentLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  showAddWarning: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
