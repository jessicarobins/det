import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col, Row, ListGroup, ListGroupItem, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { SocialIcon } from 'react-social-icons';

import * as _ from 'lodash';

if (process.env.BROWSER) {
  require('./About.scss');
}

function About(props) {
  return (
    <div className='about'>
      {WhatIsEvereeSection()}
      {StepsSection()}
      {RecentListsSection(props)}
      {ContactSection()}
    </div>  
  )
}

function StepsSection(props) {
  return (
    <section className="steps">
      <div className='container'>
        <Row>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='plus' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>1</div>Add a new list
              </span>
            </div>
            <p className='step-text'>
              Think of an action and a collection of things. For example, 
              <strong>visit</strong> every <strong>continent</strong>, or <strong>say hello in</strong> every <strong>language</strong>.
            </p>
          </Col>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='search' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>2</div>everee searches for your list
              </span>
            </div>
            <p className='step-text'>
              everee looks at <strong>existing lists</strong>
              that others have made to see if we have a collection of items that matches.
            </p>
          </Col>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='retweet' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>3</div>Your list stays up-to-date
              </span>
            </div>
            <p className='step-text'>When others add items to their list, the items
              get <strong>added</strong> to yours too.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function ContactSection(props) {
  const urls = {
    email: 'mailto:evereeapp@gmail.com',
    twitter: 'http://twitter.com/evereeapp'
  };
  return (
    <section className='contact'>
      <div className='container'>
        <p className='subtitle'>Questions? Comments? Heaps of praise? Reach out via email or Twitter!</p>
        <div>
          <SocialIcon url={urls.email} color="#CDDC39" network="email" />
          <SocialIcon url={urls.twitter} color="#CDDC39" network="twitter" />
        </div>
      </div>
    </section>
  )
}

function RecentListsSection(props) {
  
  const length = _.round(props.recentLists.length/2);
  const colOne = _.slice(props.recentLists, 0, length);
  const colTwo = _.slice(props.recentLists, length);
  
  return (
    <section className='tall-section recent-section'>
      <p className='subtitle'>
        Want some <strong>examples</strong>? Get started with these recently created lists.
      </p>
      <Row>
        <Col md='6' xs='12'>
          <ListGroup>
          {
            colOne.map(list => (
              <ListGroupItem key={list.cuid} action tag={Link} to={`/lists/${list.cuid}`}>
                  {list.fullName}
              </ListGroupItem>
            ))
          }
          </ListGroup>
        </Col>
        <Col md='6' xs='12'>
          <ListGroup>
          {
            colTwo.map(list => (
              <ListGroupItem key={list.cuid} action tag={Link} to={`/lists/${list.cuid}`}>
                  {list.fullName}
              </ListGroupItem>
            ))
          }
          </ListGroup>
        </Col>
      </Row>
      {GetStartedButton('Sign up with Google')}
    </section>
  )
}

function WhatIsEvereeSection() {
  return (
    <section className='tall-section what-is'>
      <div className='container'>
        <h2 className='what-is-title'>
          everee is a <strong>crowd-sourced bucket list</strong> for <strong>completionists</strong>.
        </h2>
        <p className='subtitle'>
          Ever wanted to keep track of your progress towards categorically completing a task?
          Trying every flavor of Oreo, for example.
          everee generates the list of items for you based on lists made by other users, and keeps your list 
          in sync, so that it stays up-to-date when another flavor of Oreo comes out.
        </p>
        {GetStartedButton('Get Started!')}
      </div>
    </section>
  )
}

function GetStartedButton(text) {
  return (
    <Button size='lg' href="/auth/google">{text}</Button>
  )
}

export default About;