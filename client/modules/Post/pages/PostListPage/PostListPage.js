import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';

if (process.env.BROWSER) {
  require('./ListListPage.scss')
}

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import NoLists from '../../components/NoLists/NoLists';
import Social from '../../components/PostListItem/Social/Social';

// Import Actions
import { addListRequest, fetchPosts, fetchRandomList } from '../../ListActions';
import * as templateActions from '../../../Template/TemplateActions';
import { toggleAddWarning, changeTab } from '../../../App/AppActions';

// Import Selectors
import { getShowAddWarning, getShowSpinner } from '../../../App/AppReducer';
import { getPosts, getRandomList } from '../../ListReducer';
import { getTemplates, getSelected } from '../../../Template/TemplateReducer';
import { getAuth, getUser } from '../../../User/UserReducer';

class PostListPage extends Component {
  
  componentDidMount() {
    this.props.dispatch(templateActions.removeSelected());
    this.props.dispatch(fetchPosts());
    this.props.dispatch(templateActions.fetchTemplates());
    this.props.dispatch(fetchRandomList());
  }

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
  
  handleChangeTab = (tab) => {
    this.props.dispatch(changeTab(''));
  }
  
  handleGetRandomList = () => {
    this.props.dispatch(fetchRandomList());
  }
  
  lists() {
    return (
      <Row>
        <Col>
          <PostList 
            changeTab={this.handleChangeTab}
            lists={this.props.lists} />
        </Col>
      </Row>
    )
  }
  
  render() {
    return (
      <div className='post-list-page'>
        <div className='post-list-page-container'>
          {this.props.showSpinner ? null :
            <Container>
              <Row>
                <Col md='7' xs='12'>
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
                <Col md='4' xs='12'>
                  {this.props.lists.length ?
                    this.lists() :
                    <NoLists 
                      getRandomList={this.handleGetRandomList}
                      list={this.props.randomList}
                      changeTab={this.handleChangeTab}/>
                  }
                </Col>
                <Col md='1' xs='12'>
                  <Social />
                </Col>
              </Row>
            </Container>
          }
        </div>
      </div>
      
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [
  () => { return fetchPosts(); },
  () => { return fetchRandomList(); },
  () => { return templateActions.fetchTemplates(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    lists: getPosts(state),
    randomList: getRandomList(state),
    templates: getTemplates(state),
    showAddWarning: getShowAddWarning(state),
    selectedTemplate: getSelected(state),
    authorized: getAuth(state),
    showSpinner: getShowSpinner(state),
    user: getUser(state)
  };
}

PostListPage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  randomList: PropTypes.object.isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  showAddWarning: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired,
  user: PropTypes.object,
  selectedTemplate: PropTypes.string.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
