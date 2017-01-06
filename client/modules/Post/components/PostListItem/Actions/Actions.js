import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

import ShareButtons from './Share/Share';

class Actions extends Component {
  
  tooltip() {
    return(
      <Tooltip id="clone-tooltip">
        Clone List
      </Tooltip>
    )
  };
  
  popover() {
    return (
      <Popover id="social-popover">
        <ShareButtons />
      </Popover>
    )
  }
  
  render() {
    return (
      <div>
        <OverlayTrigger placement="right" overlay={this.tooltip()}>
          <Button onClick={this.props.cloneList}>
            <FontAwesome name='clone'/>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={this.popover()}>
          <Button><FontAwesome name='share-alt'/></Button>
        </OverlayTrigger>
        <ShareButtons />
      </div>
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
