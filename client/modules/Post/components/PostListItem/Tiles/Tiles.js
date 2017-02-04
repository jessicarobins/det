import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'reactstrap';

if (process.env.BROWSER) {
  require('./Tiles.scss');
}

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
      <Row className='align-items-center tiles'>
        <Col>
          <div className='detail-tile'>
            <p className='detail'><img src={this.props.list._users[0].picture} className='rounded' /></p>
            <p className='caption'>{this.props.list._users[0].username}</p>
          </div>
        </Col>
        <Col>
          <div className='detail-tile'>
            <p className='detail'>{this.percentLabel()}</p>
          </div>
        </Col>
        <Col>
          <div className='detail-tile'>
            <p className='detail'>{this.props.list.fractionComplete.numerator}</p>
            <p className='caption'>complete</p>
          </div>
        </Col>
        <Col>
          <div className='detail-tile'>
            <p className='detail'>{this.props.list.fractionComplete.denominator}</p>
            <p className='caption'>total</p>
          </div>
        </Col>
      </Row>
    )
  }
}

Tiles.propTypes = {
  list: PropTypes.shape({
    percentComplete: PropTypes.number.isRequired,
  }).isRequired,
};

export default Tiles;
