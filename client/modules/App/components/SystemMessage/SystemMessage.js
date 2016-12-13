import React, { PropTypes } from 'react';
import { AlertList } from 'react-bs-notifier';
import { addSystemMessage, removeSystemMessage } from '../../AppActions';

class SystemMessage extends React.Component {

	onAlertDismissed(alert) {
		// const alerts = this.state.alerts;

		// // find the index of the alert that was dismissed
		// const idx = alerts.indexOf(alert);

		// if (idx >= 0) {
		// 	this.setState({
		// 		// remove the alert from the array
		// 		alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
		// 	});
		// }
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
