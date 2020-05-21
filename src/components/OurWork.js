import React from 'react';
import CallToAction from './CallToAction'

class OurWork extends React.Component {

  render() {
    return (
      <div className='our-work'>
        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row'>
              <div className='col-xs-12'>
                <h3>Our Work</h3>
                <p>We aim to reduce mental health and educational disparities in Washington DC by bringing innovative best practices within the school walls of our city. Through a unique combination of consultation, student and family mental health services, and classroom coaching we create change on both individual and school-wide levels to help schools and students reach their full potential.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='gray-bg ow-how'>
          <div className='container'>
            <div className='pad-container-sm'>
              <div className='row center-text-xs'>
                <div className='col-xs-12'>
                  <h6 className='h6-lg'>how we do this</h6>
                  <div className='space-2'/>
                </div>
                <div className='col-xs'>
                  <img
                    src='/images/icons/develop.svg'
                    className='icon-xl m-b-1 m-x-auto'
                    alt='develop icon' />
                  <h4>Develop and refine transformational<br/> mental health solutions.</h4>
                </div>
                <div className='col-xs'>
                  <img
                    src='/images/icons/deploy.svg'
                    className='icon-xl m-b-1 m-x-auto'
                    alt='deploy icon' />
                  <h4>Deploy effective solutions <br/>within schools.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    )
  }
}

export default OurWork;
