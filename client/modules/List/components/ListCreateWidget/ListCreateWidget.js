import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './ListCreateWidget.css';

export class ListCreateWidget extends Component {
  addList = () => {
    const nameRef = this.refs.name;
    if (nameRef.value) {
      this.props.addList(nameRef.value);
      nameRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddList ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewList" /></h2>
          <input placeholder={this.props.intl.messages.name} className={styles['form-field']} ref="name" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addList}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

ListCreateWidget.propTypes = {
  addList: PropTypes.func.isRequired,
  showAddList: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ListCreateWidget);
