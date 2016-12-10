import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Loader from 'react-loader-advanced';
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
           <Loader
            messageStyle={{color: '#91170a', fontSize: '48px', fontWeight: '900'}}
            contentBlur={8}
            show={this.props.showSpinner}>
            {this.props.user.authenticated ? 
              <Header
                user={this.props.user.data}
                logout={this.handleLogout}
              /> : <span></span>
            }
            <div className={'container'}>
              {this.props.children}
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.user,
    showSpinner: store.app.showSpinner,
  };
}

export default connect(mapStateToProps)(App);
