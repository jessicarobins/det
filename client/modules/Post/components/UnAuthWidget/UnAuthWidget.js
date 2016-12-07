import React, { Component, PropTypes } from 'react';
import RestartingTypist from './RestartingTypist/RestartingTypist';

require('./UnAuthWidget.css');

export class UnAuthWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { listIndex: 0 };
  }
  
  changeList = () => {
    const newIndex = (this.state.listIndex + 1)%(this.props.lists.length-1);
    this.setState({listIndex: newIndex});
  }

  currentList() {
    return this.props.lists[this.state.listIndex];
  }

  render() {
    return (
      <div>
        <h1>
          {'I want to '}
          <RestartingTypist onTypingDone={this.changeList}>
            {this.currentList().verb}
            <span>
              {' '}
              every
              {' '}
            </span>
            {this.currentList().action}
          </RestartingTypist>
        </h1>
      </div>
    );
  }
}

UnAuthWidget.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    // verb: PropTypes.string.isRequired,
    // action: PropTypes.string.isRequired,
  })).isRequired,
};

export default UnAuthWidget;
