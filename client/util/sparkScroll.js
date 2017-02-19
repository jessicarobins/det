import React, { Component } from 'react';

class ReactSparkLoader extends Component {
  constructor(props) {
    super(props)

    this.setRef = this.setRef.bind(this)
    this.state = {}
  }

  setRef() {
    this.setState({
      reactSparkScrollGsap: require('react-spark-scroll-gsap')({
        invalidateAutomatically: true
      }),
    })
  }

  render() {
    const { children } = this.props

    return (
      <div ref={this.setRef}>
        {this.state.reactSparkScrollGsap && children(this.state.reactSparkScrollGsap)}
      </div>
    )
  }
}

export default ReactSparkLoader;