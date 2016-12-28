import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';

import ListItem from './ListItem';

class NoLists extends Component {
  
  render() {
    return (
      <div className="list-list">
        <h3>You have no lists. Need some inspiration?</h3>
        <ul className="fa-ul">
        {
          _.sampleSize(this.props.templates, 10).map(template => (
            <ListItem
              key={template._id}
              template={template}
              addSelectedTemplate={this.props.addSelectedTemplate} />
          ))
        }
        </ul>
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
