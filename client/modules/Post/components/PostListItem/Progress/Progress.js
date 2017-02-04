import React, { Component, PropTypes } from 'react';
import { Progress as ProgressBar } from 'reactstrap';

if (process.env.BROWSER) {
  require('./Progress.scss');
}

class Progress extends Component {
  render() {
    return (
      <ProgressBar
        className='progressive'
        striped
        value={this.props.list.percentComplete}/>
    )
  }
}

Progress.propTypes = {
  list: PropTypes.shape({
    percentComplete: PropTypes.number.isRequired,
  }).isRequired,
};

export default Progress;
