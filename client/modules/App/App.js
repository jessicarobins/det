import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Loader from 'react-loader-advanced';
import Header from './components/Header/Header';
import SystemMessage from './components/SystemMessage/SystemMessage';


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
  
  spinner() {
    return <div className="spinner"><i className="fa fa-spinner fa-spin fa-5x fa-fw"></i></div>;
  }

  render() {
    return (
      <div>
        <div>
          <Helmet
            title="everee.io"
            titleTemplate="%s"
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
          />
          <Loader
            foregroundStyle={{color: 'inherit'}}
            backgroundStyle={{backgroundColor: 'inherit'}}
            message={this.spinner()}
            contentBlur={5}
            show={this.props.showSpinner}>
            <Header
              user={this.props.user.data}
              logout={this.handleLogout}
            />
            <SystemMessage 
              dispatch={this.props.dispatch}
              alerts={this.props.alerts} />
            <div>
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
  alerts: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.user,
    showSpinner: store.app.showSpinner,
    alerts: store.app.systemMessages,
  };
}

export default connect(mapStateToProps)(App);
