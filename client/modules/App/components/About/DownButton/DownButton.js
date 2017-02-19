import React, { PropTypes, Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import smoothScroll from 'smoothscroll';
import cx from 'classnames';

if (process.env.BROWSER) {
  require('./DownButton.scss');
}

class DownButton extends Component {
  
  handleScrollClick = (event) => {
    const scrollElement = document.querySelector(this.props.selector);
    smoothScroll(scrollElement);
    event.preventDefault();
  }
  
  render() {
    return (
      <div 
        className={cx({ 
          light: !!this.props.light,
          'down-btn': true
        })}>
        <span
          onClick={this.handleScrollClick}
          className="down-clickable">
          <Button color="link" className="animated infinite pulse">
            <FontAwesome name='chevron-down' className='fa-2x'/>
          </Button>
        </span>
      </div>
    )
  }
}

DownButton.propTypes = {
  selector: PropTypes.string.isRequired,
};

export default DownButton;