import React, { PropTypes } from 'react';

// Import Components
import ListItem from './ListItem/ListItem';

function List(props) {
  return (
    <div className="listView">
      {
        props.lists.map(list => (
          <ListItem
            list={list}
            key={list.cuid}
            onDelete={() => props.handleDeleteList(list.cuid)}
          />
        ))
      }
    </div>
  );
}

List.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteList: PropTypes.func.isRequired,
};

export default List;
