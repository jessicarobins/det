import React, { PropTypes } from 'react';
import { CardColumns } from 'reactstrap';

import ListCard from './ListCard/ListCard';

function Explore(props) {
  return (
    <div>
      <CardColumns>
      {
        props.lists.map(list => (
          <ListCard 
            key={list._id} 
            list={list}
            changeTab={props.changeTab} />
        ))
      }
      </CardColumns>
    </div>
  );
}

Explore.propTypes = {
  changeTab: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default Explore;
