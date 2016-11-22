import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import List from '../../components/List';
import ListCreateWidget from '../../components/ListCreateWidget/ListCreateWidget';

// Import Actions
import { addListRequest, fetchLists, deleteListRequest } from '../../ListActions';
import { toggleAddList } from '../../../App/AppActions';

// Import Selectors
import { getShowAddList } from '../../../App/AppReducer';
import { getLists } from '../../ListReducer';

class ListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLists());
  }

  handleDeleteList = list => {
    if (confirm('Do you want to delete this list')) { // eslint-disable-line
      this.props.dispatch(deleteListRequest(list));
    }
  };

  handleAddList = (name) => {
    this.props.dispatch(toggleAddList());
    this.props.dispatch(addListRequest({ name }));
  };

  render() {
    return (
      <div>
        <ListCreateWidget addList={this.handleAddList} showAddList={this.props.showAddList} />
        <List handleDeleteList={this.handleDeleteList} lists={this.props.lists} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ListPage.need = [() => { return fetchLists(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddList: getShowAddList(state),
    lists: getLists(state),
  };
}

ListPage.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  showAddList: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ListPage);
