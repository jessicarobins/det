import React, { Component, PropTypes } from 'react';
import { Container, Col, Row, Card } from 'reactstrap';
import * as _ from 'lodash';

import ListDetailHeader from './ListDetailHeader/ListDetailHeader';
import Tiles from '../../components/PostListItem/Tiles/Tiles';
import ToDoList from '../../components/PostListItem/ToDoList/ToDoList';
import Progress from '../../components/PostListItem/Progress/Progress';
import ListItemCreateWidget from '../../components/PostListItem/ListItemCreateWidget/ListItemCreateWidget';

export class ListDetails extends Component {
  
  belongsToUser() {
    const belongs = !!this.props.user && _.find(this.props.list._users, {_id: this.props.user._id});
    return belongs;
  }
  
  loggedIn() {
    return !!this.props.user;
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Card block>
              <ListDetailHeader 
                list={this.props.list}
                belongsToUser={!!this.belongsToUser()}
                loggedIn={this.loggedIn()}
                cloneList={this.props.cloneList} />
              <Progress list={this.props.list}/>
              <Tiles list={this.props.list} />
              { this.belongsToUser() ? 
              <ListItemCreateWidget addListItem={this.props.addListItem} />
              : null }
            </Card>
          </Col>
          <Col xs={12} md={7}>
            <ToDoList 
              readOnly={!this.belongsToUser()}
              todos={this.props.list.items}
              deleteListItem={this.props.deleteListItem}
              toggleListItem={this.props.toggleListItem} />
          </Col>
        </Row>
      </Container>
    );
  }
}

ListDetails.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  addListItem: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  toggleListItem: PropTypes.func.isRequired,
  cloneList: PropTypes.func.isRequired,
};

export default ListDetails;
