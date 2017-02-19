import React, { PropTypes, Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import smoothScroll from 'smoothscroll';
import cx from 'classnames';

import ReactSparkLoader from '../../../../../util/sparkScroll';

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
      <ReactSparkLoader>
        {({ SparkScroll }) => (
           <SparkScroll.div
            timeline={{
                bottomBottom: {opacity: 1},
                topCenter: {opacity: 0}
              }} >
            <Button color="link" 
              className={cx({ 
                light: !!this.props.light,
                'down-btn': true
              })}
              onClick={this.handleScrollClick}>
              <FontAwesome name='chevron-down' className='fa-2x'/>
            </Button>
          </SparkScroll.div>
        )}
      </ReactSparkLoader>
    )
  }
}

DownButton.propTypes = {
  selector: PropTypes.string.isRequired,
};

export default DownButton;