import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import * as _ from 'lodash';

require('./RecentLists.css');

function RecentLists(props) {
  
  return (
    <Panel className='recent-lists'>
      Others want to
      <ul className="fa-ul">
      {
        props.lists.map(list => (
          <li key={list.cuid}>
            <i className="fa-li fa fa-angle-right"></i>
            <Link to={`/lists/${list.cuid}`} >
              {list.name}
            </Link>
          </li>
        ))
      }
      </ul>
    </Panel>
  )
}

RecentLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default RecentLists;
