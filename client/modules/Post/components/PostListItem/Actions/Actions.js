import React,{ Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Actions extends Component {
  
  tooltip() {
    return(
      <Tooltip id="clone-tooltip">
        Clone List
      </Tooltip>
    )
  }

  render() {
    return (
      <div>
        <OverlayTrigger placement="right" overlay={this.tooltip()}>
          <div>
          <a onClick={this.props.cloneList}>
            <FontAwesome name='clone'/>
          </a>
          </div>
        </OverlayTrigger>
        <div className="addthis_inline_share_toolbox"></div>
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
