import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import Explore from '../../components/Explore/Explore';

// Import Actions
import { fetchPaginatedLists, fetchCount } from '../../ListActions';
import { changeTab, toggleLoading } from '../../../App/AppActions';

// Import Selectors
import { getPaginatedLists, getCount } from '../../ListReducer';
import { getUser } from '../../../User/UserReducer';
import { isLoading, getShowSpinner } from '../../../App/AppReducer';

if (process.env.BROWSER) {
  require('./ExplorePage.scss');
}

class ExplorePage extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchPaginatedLists());
    this.props.dispatch(fetchCount());
  }
  
  handleChangeTab = (tab) => {
    this.props.dispatch(changeTab(''));
  }
  
  handleAddMoreLists = (page) => {
    this.props.dispatch(fetchPaginatedLists(page));
  }
  
  handleToggleLoading = (value) => {
    this.props.dispatch(toggleLoading(value));
  }

  render() {
    return (
      <div className='explore-page tall'>
        {this.props.showSpinner ? null :
        <Container>
          <Explore 
            count={this.props.count}
            toggleLoading={this.handleToggleLoading}
            loading={this.props.loading}
            addMoreLists={this.handleAddMoreLists}
            changeTab={this.handleChangeTab}
            lists={this.props.recentLists} />
        </Container>
        }
      </div>
      
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ExplorePage.need = [
  () => { return fetchPaginatedLists(); },
  () => { return fetchCount(); },
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    count: getCount(state),
    loading: isLoading(state),
    recentLists: getPaginatedLists(state),
    showSpinner: getShowSpinner(state),
    user: getUser(state)
  };
}

ExplorePage.propTypes = {
  count: PropTypes.number.isRequired,
  recentLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

ExplorePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ExplorePage);
