import React, { Component, PropTypes } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class NoResultsModal extends Component {
  render() {
    return (
      <Modal isOpen={true} toggle={this.props.handleAlertDismiss}>
        <ModalBody>
          <h4>No results found for <strong>{this.props.selectedTemplate}</strong>.</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.addEmptyList}>Create an empty list!</Button>{' '}
          <Button color="secondary" onClick={this.props.handleAlertDismiss}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

NoResultsModal.propTypes = {
  addEmptyList: PropTypes.func.isRequired,
  handleAlertDismiss: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
};

export default NoResultsModal;