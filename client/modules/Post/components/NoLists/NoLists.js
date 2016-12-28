import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';

import Collections from '../Collections/Collections';

class NoLists extends Component {
  
  render() {
    return (
      <div className="list-list">
        <h3>You have no lists. Need some inspiration?</h3>
        <Collections
          templates={this.props.templates}
          addSelectedTemplate={this.props.addSelectedTemplate} />
      </div>
    );
  }
}

NoLists.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  addSelectedTemplate: PropTypes.func.isRequired,
};

export default NoLists;
