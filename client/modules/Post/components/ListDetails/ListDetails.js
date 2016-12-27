import React, { Component, PropTypes } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import * as _ from 'lodash';

import Tiles from '../../components/PostListItem/Tiles/Tiles';
import ToDoList from '../../components/PostListItem/ToDoList/ToDoList';
import Progress from '../../components/PostListItem/Progress/Progress';
import ListItemCreateWidget from '../../components/PostListItem/ListItemCreateWidget/ListItemCreateWidget';
import Actions from '../../components/PostListItem/Actions/Actions';

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
      <Grid>
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
              deleteListItem={this.props.deleteListItem}
              toggleListItem={this.props.toggleListItem} />
            { this.belongsToUser() ? 
            <ListItemCreateWidget addListItem={this.props.addListItem} />
            : null }
          </Col>
          <Col md={1} mdOffset={1}>
            { this.loggedIn() ?
            <Actions
              cloneList={this.props.cloneList}
              list={this.props.list} /> : null }
          </Col>
        </Row>
      </Grid>
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
