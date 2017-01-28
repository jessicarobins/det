import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

// Import Components
import UnAuthWidget from '../../components/UnAuthWidget/UnAuthWidget';
import About from '../../../App/components/About/About';

// Import Actions
import { fetchDemoLists } from '../../ListActions';

// Import Selectors
import { getDemoLists } from '../../ListReducer';

class UnAuthPage extends Component {
    
  componentDidMount() {
    this.props.dispatch(fetchDemoLists());
  }

  render() {
    return (
      <div>
        <UnAuthWidget lists={this.props.lists}/>
        <About />
      </div>
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
    lists: getDemoLists(state),
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
