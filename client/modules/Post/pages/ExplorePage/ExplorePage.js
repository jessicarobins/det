import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import Explore from '../../components/Explore/Explore';

// Import Actions
import { fetchRecentLists } from '../../ListActions';
import { changeTab } from '../../../App/AppActions';

// Import Selectors
import { getRecentLists } from '../../ListReducer';
import { getUser } from '../../../User/UserReducer';

if (process.env.BROWSER) {
  require('./ExplorePage.scss');
}

class ExplorePage extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchRecentLists());
  }
  
  handleChangeTab = (tab) => {
    this.props.dispatch(changeTab(''));
  }

  render() {
    return (
      <div className='explore-page tall'>
        <Container>
          <Explore 
            changeTab={this.handleChangeTab}
            lists={this.props.recentLists} />
        </Container>
      </div>
      
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ExplorePage.need = [
  () => { return fetchRecentLists(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    recentLists: getRecentLists(state),
    user: getUser(state)
  };
}

ExplorePage.propTypes = {
  recentLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

ExplorePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ExplorePage);
