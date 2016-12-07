import React, { Component, PropTypes } from 'react';

export class UnAuthWidget extends Component {
  
  addPost = () => {
    if (this.verbRef.value && this.state.selected.length) {
      this.props.addPost(this.verbRef.value, this.state.selected);
    }
  };

  render() {
    return (
      <div>
        <h1>
            {'I want to '}
            {' every '}

            {' '}
        </h1>
      </div>
    );
  }
}

UnAuthWidget.propTypes = {
  lists: PropTypes.func.isRequired,
};

export default UnAuthWidget;
