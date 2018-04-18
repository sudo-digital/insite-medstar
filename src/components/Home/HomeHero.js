import React from 'react';

class HomeHero extends React.Component {

  render() {
    return (
      <div className='home-hero'>
        <img
          className='img-bg'
          src='/images/placeholder-bg.png'
          alt='Home Hero'
          />
        <div className='overlay' />
        <div className='container'>
          <div className='pad-container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2 className='type-white'>The Center for School Wellbeing</h2>
                <h4 className='type-white'>MedStar Georgetown University Hospital</h4>
                <br />
              </div>
              <div className='col-md-8 col-xs-12'>
                <h3 className='type-white'>Supporting schools with comprehensive approaches for mental wellness.</h3>
                <a className='btn-default btn-tertiary'>PARTNER WITH US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHero;
