import React, { Component, PropTypes } from 'react';
import RestartingTypist from './RestartingTypist/RestartingTypist';
import { Button, Jumbotron } from 'react-bootstrap';
import * as _ from 'lodash';

require('./UnAuthWidget.css');

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
    if(this.props.lists.length) {
      return this.props.lists[this.state.listIndex].name;
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div>
        <Jumbotron className={'jumbo'}>
          <h1 className={'wanttoText'}>
            {'I want to '}
            <RestartingTypist onTypingDone={this.changeList} className={'action-text'}>
              {this.currentList()}
            </RestartingTypist>
          </h1>
          <h2>do<strong style={{color: '#91170a'}}>everything</strong></h2>
          <p>
            Keep track of what you want to do - with help from 
            the rest of the internet.
          </p>
          <p>
            <Button bsStyle="primary" href="/auth/google">Login with Google</Button>
          </p>
        </Jumbotron>
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
