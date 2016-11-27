import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

export function Header(props, context) {
  return (
    <PageHeader>
      <Link to="/" >Some clever app name</Link>
    </PageHeader>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
};

export default Header;
