import React,{ Component, PropTypes } from 'react';
import { FacebookButton, TwitterButton, EmailButton } from 'react-social';
import { SocialIcon } from 'react-social-icons';


if (process.env.BROWSER) {
  require('./Social.scss');
}

class Social extends Component {
  
  render() {
    return (
      <div className='social-section text-center'>
        <FacebookButton
          message={this.props.list.fullName}
          className="btn btn-link"
          windowOptions={['status=0', 'toolbar=0', 'width=480', 'height=350']}
          appId={1821098288164182}>
          <SocialIcon network="facebook" />
        </FacebookButton>
        <TwitterButton
          message={this.props.list.fullName}
          className="btn btn-link"
          windowOptions={['status=0', 'toolbar=0', 'width=480', 'height=350']} >
          <SocialIcon network="twitter" />
        </TwitterButton>
        <EmailButton
          message={this.props.list.fullName}
          className="btn btn-link" >
          <SocialIcon network="email" />
        </EmailButton>
      </div>
    )
  }
}

Social.propTypes = {
  list: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Social;
