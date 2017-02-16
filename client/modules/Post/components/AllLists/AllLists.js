import React, { Component, PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import PostList from '../PostList';
import PostCreateWidget from '../PostCreateWidget/PostCreateWidget';
import Social from '../PostListItem/Social/Social';

if (process.env.BROWSER) {
  require('./AllLists.scss');
}

class AllLists extends Component {
  
  render() {
    return (
      <Container className='all-lists'>
        <Row>
          <Col md='7' xs='12'>
            <Row>
              <Col md='12'>
              <PostCreateWidget 
                selectedTemplate={this.props.selectedTemplate}
                addSelectedTemplate={this.props.addSelectedTemplate}
                removeSelectedTemplate={this.props.removeSelectedTemplate}
                toggleAddWarning={this.props.toggleAddWarning}
                showAddWarning={this.props.showAddWarning}
                addPost={this.props.addList} 
                addEmptyList={this.props.addEmptyList}
                showAddPost={true} 
                templates={this.props.templates} />
              </Col>
            </Row>
          </Col>
          <Col md='5' xs='12'>
            <PostList 
              changeTab={this.props.changeTab}
              lists={this.props.lists} />
          </Col>
        </Row>
        <Row className='social-row'>
          <Col md='12'>
            <Social />
          </Col>
        </Row>
      </Container>
    );
  }
}

AllLists.propTypes = {
  addList: PropTypes.func.isRequired,
  addEmptyList: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  removeSelectedTemplate: PropTypes.func.isRequired,
  addSelectedTemplate: PropTypes.func.isRequired,
  toggleAddWarning: PropTypes.func.isRequired,
  getRandomList: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  randomList: PropTypes.object.isRequired,
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  showAddWarning: PropTypes.bool.isRequired,
  user: PropTypes.object,
  selectedTemplate: PropTypes.string.isRequired,
};

export default AllLists;
