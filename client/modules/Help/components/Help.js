import React, { PropTypes } from 'react';

function Help(props) {
  return (
    <div>
    <h2>What is Do Everything?</h2>
    <p>
      Do Everything is a <strong>crowd-sourced bucket list for completionists</strong>.
      Ever want to keep track of your progress towards categorically completing a task -  
      run a 5k in every state, visit every European capital city, 
      try every flavor of Oreo, watch every James Bond movie? Do Everything will 
      help you keep track and keep your list up-to-date when another flavor of 
      Oreo comes out.
    </p>
    <h2>How does it work?</h2>
    <p>
      When you create a list, Do Everything will search existing lists to see if 
      a collection of items already exists. If it does, it will link your list to 
      that collection. When people add items to that collection, those items will 
      be automatically added to your list! So you'll never have to worry about 
      missing out when Halo Top releases a new flavor of ice cream.
      <br/><br/>
      Sometimes, there won't be a pre-existing list to link to. Never fear! You 
      can create an empty list and add the items. Other people will be able to 
      use that collection of items as their own list. When they contribute 
      their own items, you will see them on your list!
    </p>
    <h2>Why?</h2>
    <p>
      For funsies. But also because at some point, I decided it would be a pretty 
      neat goal to visit all of the botanical gardens in the USA. But I wasn't sure 
      where to find or keep a list of them all.
    </p>
    <h2>Still have questions?</h2>
    <p>
      <a href='mailto:appdoeverything@gmail.com?subject=Do Everything is awesome!' target='_blank'>Shoot me an email.</a>
    </p>
    </div>
  );
}

export default Help;
