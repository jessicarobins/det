import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';

// actions
import { logOut as logoutAction } from '../User/UserActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  handleLogout = () => {
    this.props.dispatch(logoutAction());
  }

  render() {
    return (
      <div>
        <div>
          <Helmet
            title="insert clever name here"
            titleTemplate="%s - insert clever name here"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
            link={[
              {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"}
            ]}
          />
          <Header
            logout={this.handleLogout}
            userData={this.props.user}
          />
          <div className={'container'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(mapStateToProps)(App);
