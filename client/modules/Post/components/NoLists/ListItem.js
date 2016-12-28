import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';

class ListItem extends Component {
  
  setTemplate = () => {
    this.props.addSelectedTemplate(this.props.template.name);  
  }
  
  render() {
    return (
      <li>
        <i className="fa-li fa fa-angle-right"></i>
        <a onClick={this.setTemplate}>
          {this.props.template.name}</a>
      </li>
    );
  }
}

ListItem.propTypes = {
  template: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  addSelectedTemplate: PropTypes.func.isRequired,
};

export default ListItem;
