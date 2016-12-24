import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

function RecentLists(props) {
  
  return (
    <Panel>
      Others want to
      {
        props.lists.map(list => (
          <div
            key={list.cuid}>
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
