import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Image, Panel } from 'react-bootstrap';

require('./Tiles.css');

class Tiles extends Component {
  
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
      <div>
        <Panel className='detail-tile'>
          <p className='detail'><Image src={this.props.list._users[0].picture} rounded /></p>
          <p className='caption'>{this.props.list._users[0].name}</p>
        </Panel>
        <Panel className='detail-tile'>
          <p className='detail'>{this.percentLabel()}</p>
        </Panel>
        <Panel className='detail-tile'>
          <p className='detail'>{this.props.list.fractionComplete.numerator}</p>
          <p className='caption'>complete</p>
        </Panel>
        <Panel className='detail-tile'>
          <p className='detail'>{this.props.list.fractionComplete.denominator}</p>
          <p className='caption'>total</p>
        </Panel>
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
