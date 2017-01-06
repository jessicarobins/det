import React, { PropTypes } from 'react';
import Icon, { Facebook, Twitter, Google } from 'react-share-icons';

function ShareButtons(props) {
  return (
    <div>
      <a href="https://facebook.com/sharer/sharer.php?u=test" target="_blank" aria-label="">
        <Icon type="Facebook" className="shares-facebook"/>
      </a>
      <a href="https://twitter.com/intent/tweet/?text=I%20want%20to%20do%20every%20thing!&amp;url=test" target="_blank" aria-label="">
        <Twitter />
      </a>
      <a href="https://plus.google.com/share?url=test" target="_blank" aria-label="">
        <Google />
      </a>
    </div>
  )
}

export default ShareButtons;