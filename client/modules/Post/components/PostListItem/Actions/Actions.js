import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Actions extends Component {
  
  tooltip() {
    return(
      <Tooltip id="clone-tooltip">
        Clone List
      </Tooltip>
    )
  };
  
  render() {
    return (
      <OverlayTrigger placement="bottom" overlay={this.tooltip()}>
        <Button onClick={this.props.cloneList}>
          <FontAwesome name='clone'/>
        </Button>
      </OverlayTrigger>
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
