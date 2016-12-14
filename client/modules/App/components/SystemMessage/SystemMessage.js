import React, { PropTypes } from 'react';
import { AlertList } from 'react-bs-notifier';
import { addSystemMessage, removeSystemMessage } from '../../AppActions';

class SystemMessage extends React.Component {

	onAlertDismissed(alert) {
		this.props.dispatch(removeSystemMessage());
	}

	render() {
		return (
			<AlertList
				position={'top-right'}
				alerts={this.props.alerts}
				timeout={5000}
				dismissTitle="Dismiss"
				onDismiss={this.onAlertDismissed.bind(this)}
			/>
		);
	}
}

SystemMessage.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SystemMessage;
