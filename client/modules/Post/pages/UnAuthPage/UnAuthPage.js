import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

// Import Components
import UnAuthWidget from '../../components/UnAuthWidget/UnAuthWidget';

// Import Actions
import { fetchDemoLists } from '../../PostActions';

// Import Selectors
import { getPosts } from '../../PostReducer';

class UnAuthPage extends Component {
    
  componentDidMount() {
    this.props.dispatch(fetchDemoLists());
  }

  render() {
    return (
      <UnAuthWidget lists={this.props.lists}/>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UnAuthPage.need = [
  () => { return fetchDemoLists(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    lists: getPosts(state),
  };
}

UnAuthPage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

UnAuthPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UnAuthPage);
