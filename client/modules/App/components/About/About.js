import React, { PropTypes, Component } from 'react';
import { Media } from 'react-bootstrap';
import { Card, CardDeck, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

if (process.env.BROWSER) {
  require('./About.scss');
}

function About(props) {
  return (
    <div className="container">
      <section>
        <h2>What is everee?</h2>
        <p>
          everee is a <strong>crowd-sourced bucket list for completionists</strong>.
        </p>
      </section>
      <section>
        <h2>How does it work?</h2>
        {StepsSection()}
      </section>
      <section>
        <h2>Explore</h2>
        <p>
          recent lists
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          email, twitter
        </p>
      </section>
    </div>  
  )
}

function StepsSection(props) {
  return (
    <CardDeck>
      <Card block inverse color="primary">
        <CardTitle className="vertical-align">
          <FontAwesome name='plus' className='fa-4x fa-fw'/>
          <span className="about-title">Add a new list</span>
        </CardTitle>
        <CardSubtitle>I want to... try ever flavor of oreo.</CardSubtitle>
      </Card>
      <Card block inverse color="primary">
        <CardTitle className="vertical-align">
          <FontAwesome name='search' className='fa-4x fa-fw'/>
          <span className="about-title">everee searches lists</span>
        </CardTitle>
        <CardText>everee looks at existing lists to see if we have a collection of items that matches.
        </CardText>
      </Card>
      <Card block inverse color="primary">
        <CardTitle className="vertical-align">
          <FontAwesome name='retweet' className='fa-4x fa-fw'/>
          <span className="about-title">Your list stays up-to-date</span>
        </CardTitle>
        <CardText>When others add items to their list, the items
          get added to yours too.
        </CardText>
        <CardSubtitle>A new flavor of oreo has been added to your list: Swedish Fish!</CardSubtitle>
      </Card>
    </CardDeck>
  )
}

export default About;