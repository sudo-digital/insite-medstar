import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class HomeMission extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='pad-container-top'>
          <div className='row middle-xs'>
            <ScrollAnimation className='col-md-7' animateIn='fadeInUp'>
              <div className='top-line'/>
              <h2 className='type-purple'>Our Mission</h2>
              <p>We operate at the intersection of research and practice to develop innovative approaches that link together rigorous academics with mental wellness to improve academic and mental health outcomes for students, families, and schools.</p>
            </ScrollAnimation>
            <div className='col-md-5 col-xs-12'>
              <img
                src='/images/mission-girl.png'
                className='full'
                alt='School Girl'
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMission;
