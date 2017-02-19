import React, { PropTypes, Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import smoothScroll from 'smoothscroll';

import ReactSparkLoader from '../../../../../util/sparkScroll';

import UnAuthWidget from '../UnAuthWidget/UnAuthWidget';
import DownButton from '../DownButton/DownButton';

if (process.env.BROWSER) {
  require('./TypingSection.scss');
}

class TypingSection extends Component {
  
  handleScrollClick = (event) => {
    const scrollElement = document.querySelector("#what-is");
    smoothScroll(scrollElement);
    event.preventDefault();
  }
  
  render() {
    return (
      
        <ReactSparkLoader>
          
          {({ SparkScroll }) => (
            <section className='tall-section typeahead-section'>
              <SparkScroll.div
              timeline={{
                  topTop: {opacity: 1, transform: 'translate3d(0px,0px,0px)'},
                  'topTop+100': {opacity: 0, transform: 'translate3d(0px,-150px,0px)'}
                }} >
                <UnAuthWidget lists={this.props.demoLists}/> 
              </SparkScroll.div>
             <DownButton selector='#what-is' />
            </section>
          )}
          
        </ReactSparkLoader>
      
    )
  }
}

TypingSection.propTypes = {
  demoLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
};

export default TypingSection;