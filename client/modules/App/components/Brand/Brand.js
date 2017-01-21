import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

require ('./Brand.css');

function Brand(props) {
  return (
    <span className='brand'>e<FontAwesome className='brand-check' name='check-circle' />eree</span>
  );
}

export default Brand;
