import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { SocialIcon } from 'react-social-icons';

if (process.env.BROWSER) {
  require('./About.scss');
}

function About(props) {
  return (
    <div className='about'>
      <section className='tall-section'>
        <h1 className='about-title'>What is everee?</h1>
        <hr className='title-line' />
        <p>
          everee is a <strong>crowd-sourced bucket list for completionists</strong>.
        </p>
      </section>
      
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
        <h1 className='about-title'>How does it work?</h1>
        <hr className='title-line' />
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
    <section>
      <div className='container contact'>
        <h1 className='about-title'>Contact</h1>
        <hr className='title-line' />
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
  return (
    <section className='tall-section recent-section'>
      <h1 className='about-title'>Explore</h1>
      <hr className='title-line' />
      <p className='subtitle'>Get started with these recently created lists.</p>
      <ul className="fa-ul recent-ul">
      {
        props.recentLists.map(list => (
          <li key={list.cuid}>
            <i className="fa-li fa fa-angle-right"></i>
            <Link to={`/lists/${list.cuid}`} >
              {list.fullName}
            </Link>
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default About;