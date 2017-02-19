import React, { PropTypes, Component } from 'react';

import UnAuthWidget from '../UnAuthWidget/UnAuthWidget';
import DownButton from '../DownButton/DownButton';

if (process.env.BROWSER) {
  require('./TypingSection.scss');
}

class TypingSection extends Component {
  
  render() {
    return (
      <section className='tall-section typeahead-section'>
        <UnAuthWidget lists={this.props.demoLists}/> 
        <DownButton selector='#what-is' />
      </section>
    )
  }
}

TypingSection.propTypes = {
  demoLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
};

export default TypingSection;