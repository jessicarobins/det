import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

require('./RecentLists.css');

function RecentLists(props) {
  
  return (
    <Panel className='recent-lists'>
      Others want to
      {
        props.lists.map(list => (
          <div
            className='list-link'
            key={list.cuid}>
            <FontAwesome
              name='angle-right'
              className='bullet-icon' />
            <Link to={`/lists/${list.cuid}`} >
              {list.name}
            </Link>
          </div>
        ))
      }
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
