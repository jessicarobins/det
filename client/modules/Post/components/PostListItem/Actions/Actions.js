import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

class Actions extends Component {
  
  percentLabel() {
    switch(this.props.list.percentComplete) {
      case 100:
        return <FontAwesome name='trophy'/>
      default:
        return `${this.props.list.percentComplete}%`
    }
  }
  
  render() {
    return (
      <Button onClick={this.props.cloneList}>
        <FontAwesome name='clone'/>
      </Button>
    )
  }
}

Actions.propTypes = {
  list: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  cloneList: PropTypes.func.isRequired,
};

export default Actions;
