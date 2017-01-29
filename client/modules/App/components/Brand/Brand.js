import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

if (process.env.BROWSER) {
  require ('./Brand.scss');
}

function Brand(props) {
  const classes = `brand ${props.light ? 'light' : 'dark'}`
  return (
    <span className={classes}>e<FontAwesome className='brand-check' name='check-circle' />eree</span>
  );
}

export default Brand;
