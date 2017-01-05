import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../../../App/components/Header/Header';

require('./ListListPage.css')

// Import Components
import PostList from '../../components/PostList';
import RecentLists from '../../components/RecentLists/RecentLists';
import Collections from '../../components/Collections/Collections';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import NoLists from '../../components/NoLists/NoLists';

// Import Actions
import { addListRequest, fetchPosts, fetchRecentLists, deletePostRequest } from '../../ListActions';
import * as templateActions from '../../../Template/TemplateActions';
import { toggleAddWarning } from '../../../App/AppActions';
import { logOut as logoutAction } from '../../../User/UserActions';

// Import Selectors
import { getShowAddWarning } from '../../../App/AppReducer';
import { getPosts, getRecentLists } from '../../ListReducer';
import { getTemplates, getSelected } from '../../../Template/TemplateReducer';
import { getAuth, getUser } from '../../../User/UserReducer';

class PostListPage extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.props.dispatch(toggleSpinnerOn());
  // }
  
  componentDidMount() {
    this.props.dispatch(templateActions.removeSelected());
    this.props.dispatch(fetchPosts());
    this.props.dispatch(templateActions.fetchTemplates());
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
  
  handleAddSelectedTemplate = (template) => {
    this.props.dispatch(templateActions.addSelected(template));
  };
  
  handleRemoveSelectedTemplate = () => {
    this.props.dispatch(templateActions.removeSelected());
  };
  
  handleLogout = () => {
    this.props.dispatch(logoutAction());
  };
  
  lists() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={7} mdOffset={2}>
          <PostList 
            handleDeletePost={this.handleDeletePost}
            lists={this.props.lists} />
        </Col>
        <Col md={3}>
          <RecentLists
            lists={this.props.recentLists} />
          <Collections 
            templates={this.props.templates}
            addSelectedTemplate={this.handleAddSelectedTemplate}/>
        </Col>
      </Row>
    )
  }
  
  noLists() {
    return (
      <div className='no-lists-container'>
        <Row>
          <Col md={6} mdOffset={3}>
            <h3>
              You have no lists. Need some inspiration?
            </h3>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={4} mdOffset={2}>
            <Collections 
              templates={this.props.templates}
              addSelectedTemplate={this.handleAddSelectedTemplate}/>
          </Col>
          <Col md={4}>
            <RecentLists
              lists={this.props.recentLists} />
          </Col>
        </Row>
      </div>
      )
  }
  
  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          logout={this.handleLogout}
        />
        <Grid>
          <Row className='show-grid'>
            <Col md={12}>
              <PostCreateWidget 
                selectedTemplate={this.props.selectedTemplate}
                addSelectedTemplate={this.handleAddSelectedTemplate}
                removeSelectedTemplate={this.handleRemoveSelectedTemplate}
                toggleAddWarning={this.handleToggleAddWarning}
                showAddWarning={this.props.showAddWarning}
                addPost={this.handleAddList} 
                addEmptyList={this.handleAddEmptyList}
                showAddPost={true} 
                templates={this.props.templates} />
            </Col>
          </Row>
          {this.props.lists.length ?
            this.lists() :
            this.noLists() }
        </Grid>
      </div>
      
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [
  () => { return fetchPosts(); },
  () => { return templateActions.fetchTemplates(); },
  () => { return fetchRecentLists(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    lists: getPosts(state),
    recentLists: getRecentLists(state),
    templates: getTemplates(state),
    showAddWarning: getShowAddWarning(state),
    selectedTemplate: getSelected(state),
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
  // user: PropTypes.object.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
