import React, { Component, PropTypes } from 'react';
import { ProgressBar } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

require('./Progress.css');

class Progress extends Component {
  
  progressLabel() {
    switch(this.props.list.percentComplete) {
      case 0:
        return;
      case 100:
        return <FontAwesome className='progress-percent' name='trophy'/>
      default:
        return <span className='progress-percent'>{this.props.list.percentComplete}%</span>
    }
  }
  
  render() {
    return (
      <ProgressBar 
        striped
        now={this.props.list.percentComplete}/>
    )
  }
}

Progress.propTypes = {
  list: PropTypes.shape({
    percentComplete: PropTypes.number.isRequired,
  }).isRequired,
};

export default Progress;
