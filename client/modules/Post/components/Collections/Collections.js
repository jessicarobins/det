import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';
import { Panel } from 'react-bootstrap';

import ListItem from './ListItem';

function Collections(props) {
  
  return (
    <Panel className="recent-lists">
      Create a list of every
      <ul className="fa-ul">
      {
        _.sampleSize(props.templates, 10).map(template => (
          <ListItem
            key={template._id}
            template={template}
            addSelectedTemplate={props.addSelectedTemplate} />
        ))
      }
      </ul>
    </Panel>
  );
}

Collections.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  addSelectedTemplate: PropTypes.func.isRequired,
};

export default Collections;
