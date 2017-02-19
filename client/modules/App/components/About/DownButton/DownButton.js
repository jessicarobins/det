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
      <Button color="link" 
        className={cx({ 
          light: !!this.props.light,
          'down-btn': true
        })}
        onClick={this.handleScrollClick}>
        <FontAwesome name='chevron-down' className='fa-2x'/>
      </Button>
    )
  }
}

DownButton.propTypes = {
  selector: PropTypes.string.isRequired,
};

export default DownButton;