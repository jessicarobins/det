import React, { PropTypes } from 'react';
import * as _ from 'lodash';

function NoLists(props) {
  return (
    <div className="list-list">
      <h3>You have no lists. Need some inspiration?</h3>
      <ul className="fa-ul">
      {
        _.sampleSize(props.templates, 10).map(template => (
          <li key={template._id}>
            <i className="fa-li fa fa-angle-right"></i>
            {template.name}
          </li>
        ))
      }
      </ul>
    </div>
  );
}

NoLists.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default NoLists;
