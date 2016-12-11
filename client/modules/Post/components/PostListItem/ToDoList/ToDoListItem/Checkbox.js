import React, { Component, PropTypes } from 'react';

var Checkbox = React.createClass({
	getDefaultProps: function() {
 	 	return {
    	value: true,
      name: '',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#c3c4c6',
      borderRadius: '4px',
      checkColor: '#60cd18',
      height: '1px',
      width: '',
      namePaddingLeft: '10px',
      namePaddingRight: ''
  	};
	},
  render: function() {
    var style = {
    	boxStyle: {
      	borderWidth: this.props.borderWidth,
        borderStyle: this.props.borderStyle,
        borderColor: this.props.borderColor,
        borderRadius: this.props.borderRadius,
        paddingLeft: this.props.width,
				paddingRight: this.props.width,
        paddingTop: this.props.height,
        paddingBottom: this.props.height
      },
      show: {
      	visibility: 'visible',
        color: this.props.checkColor
      },
      hidden: {
      	visibility: 'hidden',
        color: this.props.checkColor
      },
      name: {
      	paddingLeft: this.props.namePaddingLeft,
        paddingRight: this.props.namePaddingRight
      }
    };
    return (
    <div>
    	<span style={style.boxStyle}>
				<i className="fa fa-check fa-lg" style={(this.props.value) ? style.show : style.hidden}></i>
			</span>
       <span style={style.name}>{this.props.name}</span>
    </div>
    );
  }
});

var WrapperCheckbox = React.createClass({ 
	getInitialState: function(){
  	return {value: this.props.checked}
  },
  handleClick: function(){
    this.props.onClick();
    this.setState({value: !this.state.value});
  },
	render: function(){
  	return (
    	<div onClick={this.handleClick}>
    		<Checkbox name={this.props.name} value={this.state.value}/>
      </div>
    );
  }
});

WrapperCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WrapperCheckbox;