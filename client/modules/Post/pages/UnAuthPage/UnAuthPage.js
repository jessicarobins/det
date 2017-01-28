import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

// Import Components
import UnAuthWidget from '../../components/UnAuthWidget/UnAuthWidget';
import About from '../../../App/components/About/About';

// Import Actions
import { fetchDemoLists, fetchRecentLists } from '../../ListActions';

// Import Selectors
import { getDemoLists, getRecentLists } from '../../ListReducer';

class UnAuthPage extends Component {
    
  componentDidMount() {
    this.props.dispatch(fetchDemoLists());
    this.props.dispatch(fetchRecentLists());
  }

  render() {
    return (
      <div>
        <UnAuthWidget lists={this.props.lists}/>
        <About recentLists={this.props.recentLists}/>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UnAuthPage.need = [
  () => { return fetchDemoLists(); },
  () => { return fetchRecentLists(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    lists: getDemoLists(state),
    recentLists: getRecentLists(state),
  };
}

UnAuthPage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  recentLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

UnAuthPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UnAuthPage);
