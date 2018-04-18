import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className='purple-bg footer'>
        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row'>
              <div className='col-xs-12'>
                <h6>LOGO</h6>
              </div>
            </div>
            <div className='space-2' />
            <div className='row top-xs'>
              <div className='col-md-4 col-xs-12'>
                <a>Our Work</a>
                <a>Team</a>
                <a>Hiring! Join Our Team</a>
                <a>Contact Us</a>
              </div>
              <div className='col-md-4 col-xs-12'>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
              </div>
              <div className='col-md-4 col-xs-12'>
                <a>
                  <img
                    src='/images/medstar-logo.png'
                    alt='medstar logo'
                    />
                </a>
                <a>MedStar Psychiatry</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
