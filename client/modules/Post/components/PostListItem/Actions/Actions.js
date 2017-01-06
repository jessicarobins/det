import React,{ Component, PropTypes } from 'react';

class Actions extends Component {
  
  componentDidMount() {
    addthis.init();
    if(addthis.layers.refresh) {
       addthis.layers.refresh();
    }
  }

  render() {
    return (
      <div 
        className="addthis_inline_share_toolbox"></div>
    )
  }
}

Actions.propTypes = {
  list: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Actions;
