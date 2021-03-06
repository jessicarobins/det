import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col, Row, ListGroup, ListGroupItem, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { SocialIcon } from 'react-social-icons';
import { StickyContainer, Sticky } from 'react-sticky';
import { browserHistory } from 'react-router';

import * as _ from 'lodash';

import Header from '../Header/Header';
import Brand from '../Brand/Brand';
import TypingSection from './TypingSection/TypingSection';
import DownButton from './DownButton/DownButton';
import ListCard from '../../../Post/components/Explore/ListCard/ListCard';


if (process.env.BROWSER) {
  require('./About.scss');
}

function About(props) {
  return (
    <StickyContainer>
      <div className='about'>
        <TypingSection {...props} />
        <Sticky className='top'>
          <Header inverse />
        </Sticky>
        {WhatIsEvereeSection()}
        {StepsSection()}
        {RecentListsSection(props)}
        {ContactSection()}
      </div>  
    </StickyContainer>
  )
}

function StepsSection(props) {
  return (
    <section className="steps" id="steps">
      <div className='container'>
        <h1 className='display-4'>How does everee work?</h1>
        <Row>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='plus' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>1</div>Add a new list
              </span>
            </div>
            <p className='step-text'>
              Think of an action and a collection of things. For example, <strong>visit</strong> every <strong>continent</strong>, or <strong>say hello in</strong> every <strong>language</strong>.
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
              everee looks at <strong>existing lists</strong> that others have made to see if we have a collection of items that matches.
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
      <DownButton selector="#recent" text="show me!" />
    </section>
  )
}

function ContactSection(props) {
  const urls = {
    email: 'mailto:evereeapp@gmail.com',
    twitter: 'http://twitter.com/evereeapp'
  };
  return (
    <section className='contact' id="contact">
      <div className='container'>
        <p className='subtitle'>Questions? Comments? Heaps of praise? Reach out via email or Twitter!</p>
        <div>
          <SocialIcon url={urls.email} color="#03A9F4" network="email" />
          <SocialIcon url={urls.twitter} color="#03A9F4" network="twitter" />
        </div>
      </div>
    </section>
  )
}

function RecentListsSection(props) {
  return (
    <section className='tall-section recent-section' id="recent">
        <div>
        <h1 className='display-4'>
          Want some examples?
        </h1>
        <h4 className="text-muted subtitle">Get started with these recently created lists.</h4>
      </div>
      <div className="list-cards">          
        {
          _.take(props.recentLists, 4).map(list => (
            <ListCard key={list._id} list={list} changeTab={props.changeTab} />
          ))
        }
      </div>
      <div className='button'>
        <Button color="primary" size='lg' onClick={()=>goExplore(props)}>Explore More Lists</Button>
      </div>
      <DownButton selector="#contact" />
    </section>
  )
}

function WhatIsEvereeSection() {
  return (
    <section className='tall-section what-is' id="what-is">
      <div className='container'>
        <h2 className='display-4 what-is-title'>
          <Brand light /> is a <strong>crowd-sourced bucket list</strong> for <strong>completionists</strong>.
        </h2>
        <p className='subtitle'>
          Ever wanted to keep track of your progress towards categorically completing a task?
          Trying every flavor of Oreo, for example.
          everee generates the list of items for you based on lists made by other users, and keeps your list 
          in sync, so that it stays up-to-date when another flavor of Oreo comes out.
        </p>
        {GetStartedButton('Get Started!')}
      </div>
      <DownButton light selector="#steps" text="how?" />
    </section>
  )
}

function GetStartedButton(text) {
  return (
    <Button size='lg' href="/auth/google">{text}</Button>
  )
}

function goExplore(props) {
  props.changeTab('explore');
  browserHistory.push('/explore');
}

export default About;