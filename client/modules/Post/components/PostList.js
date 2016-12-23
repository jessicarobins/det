import React, { PropTypes } from 'react';

require('./ListList.css');

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="list-list">
      {
        props.lists.map(list => (
          <PostListItem
            post={list}
            key={list.cuid}
            onDelete={() => props.handleDeletePost(list.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
