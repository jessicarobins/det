import React, { PropTypes, Component } from 'react';
import { Media } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

if (process.env.BROWSER) {
  require('./About.scss');
}

function About(props) {
  return (
    <div className='about'>
      <section>
        <h1 className='about-title'>What is everee?</h1>
        <p>
          everee is a <strong>crowd-sourced bucket list for completionists</strong>.
        </p>
      </section>
      
      {StepsSection()}
      
      <section>
        <h1 className='about-title'>Explore</h1>
        <p>
          recent lists
        </p>
      </section>
      <section>
        <h1 className='about-title'>Contact</h1>
        <p>
          email, twitter
        </p>
      </section>
    </div>  
  )
}

function StepsSection(props) {
  return (
    <section className="steps">
      <div className='container'>
        <h1 className='about-title'>How does it work?</h1>
        <Row>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='plus' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>1</div>Add a new list
              </span>
            </div>
          </Col>
          <Col md='4' xs='12' className='step'>
            <FontAwesome name='search' className='fa-4x fa-fw step-icon'/>
            <div className="vertical-align">
              <span className="steps-title">
                <div className='step-number'>2</div>everee searches for your list
              </span>
            </div>
            <p className='step-text'>everee looks at existing lists that others have made to see if we have a collection of items that matches.
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
              get added to yours too.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About;