import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'reactstrap';

if (process.env.BROWSER) {
  require('./Tiles.scss');
}

class Tiles extends Component {
  
  complete() {
    return this.props.list.percentComplete === 100;
  }
  
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
      <div className='tiles'>
        <div>
          <div className='detail-tile'>
            <p className='detail'>{this.percentLabel()}</p>
            <p className='caption text-muted'>complete</p>
          </div>
        </div>
        { this.complete() ? null :
        <div>
          <div className='detail-tile'>
            <p className='detail'>{this.props.list.fractionComplete.numerator}</p>
            <p className='caption text-muted'>complete</p>
          </div>
        </div>
        }
        <div>
          <div className='detail-tile'>
            <p className='detail'>{this.props.list.fractionComplete.denominator}</p>
            <p className='caption text-muted'>total</p>
          </div>
        </div>
      </div>
    )
  }
}

Tiles.propTypes = {
  list: PropTypes.shape({
    percentComplete: PropTypes.number.isRequired,
  }).isRequired,
};

export default Tiles;
