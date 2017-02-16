import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Container, Button, Card, CardText, CardTitle, Row, Col } from 'reactstrap';

import ListCard from '../Explore/ListCard/ListCard';
import PostCreateWidget from '../PostCreateWidget/PostCreateWidget';
import Social from '../PostListItem/Social/Social';

if (process.env.BROWSER) {
  require('./NoLists.scss');
}

class NoLists extends Component {
  
  goExplore = () => {
    this.props.changeTab('explore');
    browserHistory.push('/explore');
  }
  
  footer() {
    return <a onClick={this.props.getRandomList}>Give me another random list!</a>
  }
  
  render() {
    return (
      <Container>
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
          <Col md='4' xs='12'>
            <div className='no-lists-container'>
              <Card block className='no-lists-card'>
                <CardTitle>You have no lists.</CardTitle>
                <CardText>
                  <Button 
                    color="primary"
                    size="lg" 
                    onMouseDown={this.goExplore}>Explore Lists</Button>
                </CardText>
              </Card>
              <ListCard
                header='Need some inspiration?'
                footer={this.footer()}
                small
                list={this.props.list}
                changeTab={this.props.changeTab} />
            </div>
          </Col>
          <Col md='1' xs='12'>
            <Social />
          </Col>
        </Row>
      </Container>
    );
  }
}

NoLists.propTypes = {
  addList: PropTypes.func.isRequired,
  addEmptyList: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  removeSelectedTemplate: PropTypes.func.isRequired,
  addSelectedTemplate: PropTypes.func.isRequired,
  toggleAddWarning: PropTypes.func.isRequired,
  getRandomList: PropTypes.func.isRequired,
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  getRandomList: PropTypes.func.isRequired,
};

export default NoLists;
