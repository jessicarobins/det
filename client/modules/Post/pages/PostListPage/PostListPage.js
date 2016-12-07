import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addListRequest, fetchPosts, deletePostRequest } from '../../PostActions';
import { fetchTemplates } from '../../../Template/TemplateActions';
import { toggleAddWarning } from '../../../App/AppActions';

// Import Selectors
import { getShowAddWarning } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';
import { getTemplates } from '../../../Template/TemplateReducer';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchTemplates());
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

  render() {
    return (
      <div>
        <PostCreateWidget 
          toggleAddWarning={this.handleToggleAddWarning}
          showAddWarning={this.props.showAddWarning}
          addPost={this.handleAddList} 
          addEmptyList={this.handleAddEmptyList}
          showAddPost={true} 
          templates={this.props.templates} />
        <PostList 
          handleDeletePost={this.handleDeletePost}
          posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [
  () => { return fetchPosts(); },
  () => { return fetchTemplates(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    templates: getTemplates(state),
    showAddWarning: getShowAddWarning(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  showAddWarning: PropTypes.bool.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
