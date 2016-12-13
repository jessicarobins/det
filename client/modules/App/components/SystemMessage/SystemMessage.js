import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

export function SystemMessage(props) {
  return (
    <Alert bsStyle="warning">
      {props.message}
    </Alert>
  );
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SystemMessage;
