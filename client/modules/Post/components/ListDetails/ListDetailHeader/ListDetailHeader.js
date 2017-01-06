import React, { Component, PropTypes } from 'react';

require('./ListDetailHeader.css');

export class ListDetailHeader extends Component {
  
  myList() {
    return <h2>I want to <strong>{this.props.list.name}</strong></h2>
  }
  
  yourList() {
    return (
      <div>
        <h2>
          {this.props.list._users[0].username} wants to <strong>{this.props.list.name}</strong>
        </h2>
        {this.showCloneList()}
      </div>
    )
  }
  
  showCloneList() {
    return (
      !this.props.belongsToUser && this.props.loggedIn ?
        <p className='clone-list'>Want to do this too? <a onClick={this.props.cloneList}>Clone this list!</a></p> : null
    )
  }
  
  render() {
    return (
      this.props.belongsToUser ? this.myList() : this.yourList()
    );
  }
}

ListDetailHeader.propTypes = {
  list: PropTypes.object.isRequired,
  belongsToUser: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  cloneList: PropTypes.func.isRequired,
};

export default ListDetailHeader;
