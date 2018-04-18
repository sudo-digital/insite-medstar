import React from 'react';

class HomePartners extends React.Component {

  render() {
    return (
      <div className='gray-bg'>
        <div className='container'>
          <div className='pad-container'>
            <div className='row middle-xs'>
              <div className='col-md-5'>
                <div className='top-line'/>
                <h2 className='type-purple'>Our Partners</h2>
                <p>We’ve partnered with 32 schools in the Washington, DC area and brought our mental health model.</p>
              </div>
              <div className='col-md-7 col-xs-12'>
                <img
                  src='/images/partners-group.png'
                  className='full'
                  alt='Partners'
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePartners;
