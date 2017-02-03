import React, { Component, PropTypes } from 'react';
import RestartingTypist from './RestartingTypist/RestartingTypist';
import { Button } from 'reactstrap';
import * as _ from 'lodash';

if (process.env.BROWSER) {
  require('./UnAuthWidget.scss');
}

export class UnAuthWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { listIndex: 0 };
  }
  
  changeList = () => {
    const newIndex = _.random(this.props.lists.length-1);
    this.setState({listIndex: newIndex});
  }

  currentList() {
    if(this.props.lists.length && this.props.lists[this.state.listIndex]) {
      return this.props.lists[this.state.listIndex].name;
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className='container want-to'>
        <h1 className={'wanttoText'}>
          {'I want to '}
          <RestartingTypist onTypingDone={this.changeList} className={'action-text'}>
            {this.currentList()}
          </RestartingTypist>
        </h1>
        <p className='subtitle'>
          Keep track of what you want to do - with help from 
          the rest of the internet.
        </p>
        <p>
          <Button
            size='lg'
            href="/auth/google">Sign up with Google</Button>
        </p>
      </div>
    );
  }
}

UnAuthWidget.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default UnAuthWidget;
