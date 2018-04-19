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
                <h2>Our work</h2>
                <p>We support schools to implement aligned and comprehensive whole-school approaches for mental wellness.</p>
                <p>We operate at the intersection of research and practice to develop innovative approaches that link together rigorous academics with mental wellness to improve academic and mental health outcomes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='gray-bg ow-how'>
          <div className='container'>
            <div className='pad-container-sm'>
              <div className='row center-text-xs'>
                <div className='col-xs-12'>
                  <h6>how we do this</h6>
                </div>
                <div className='col-xs'>
                  <img
                    src='/images/icons/develop.svg'
                    className='icon-lg m-b-1 m-x-auto'
                    alt='develop icon' />
                  <h4>Develop and refine transformational<br/> mental health solutions.</h4>
                </div>
                <div className='col-xs'>
                  <img
                    src='/images/icons/deploy.svg'
                    className='icon-lg m-b-1 m-x-auto'
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
