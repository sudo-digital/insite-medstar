import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class WorkInDC extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      title: 'Mental health treatment services',
      section: 'Clinical psychotherapy and medication management (if needed); Clinical psychologist and doctoral externs provide psychotherapy to students in both general education and special education; psychiatrists provide psychodiagnostic and medication management support.'
    };
  }

  clickToggle = (section) => {
    const mentalHealthTreatment = 'Our team of highly-qualified child clinical psychologists, child psychiatrists, and doctoral trainees provide diagnostic evaluations, psychotherapy, and medication management for students and families in the school setting to improve accessibility.'

    const professionalDevTraining = 'School staff receives foundational evidence-based pedagogy and concrete skill acquisition around the neurobiological impacts of stress and trauma, as well as relational and responsive strategies that reduce classroom behavioral issues, to increase staff’s feelings of efficacy and confidence.'

    const classroomCoaching = 'Capacity building for teachers in integrating universal classroom-wide trauma-sensitive instructional approaches and individualized behavioral strategies for children with individual emotional and behavioral health needs.'

    const consultationSchoolLeaders = 'Our team consults with school leadership and mental health team to ensure that mental health treatment services, classroom coaching, and professional development are uniquely tailored to fit the school’s culture, strengths, and needs. Consultation is provided for school-wide efforts related to culture change, policy development, and crisis support.'

    const teacherWellbeing = 'Our team is equally as committed to taking care of the mental wellbeing of adults, so they can best support their students. We lead the citywide and school-based initiatives to decrease teacher burnout and turnover through school wellness programming, self-care training, and individual staff support.'

    let currentSection;
    let currentTitle;
    switch(section) {
      case 0:
        currentTitle = 'Mental Health Treatment Services';
        currentSection = mentalHealthTreatment;
        break;
      case 1:
        currentTitle = 'Professional Development Training';
        currentSection = professionalDevTraining;
        break;
      case 2:
        currentTitle = 'Classroom Coaching';
        currentSection = classroomCoaching;
        break;
      case 3:
        currentTitle = 'Consultation With School Leaders & Support Staff';
        currentSection = consultationSchoolLeaders;
        break;
      case 4:
        currentTitle = 'Teacher Wellbeing Initiatives';
        currentSection = teacherWellbeing;
        break;
      default:
      currentTitle = 'Mental health treatment services';
      currentSection = mentalHealthTreatment;
    }

    this.setState({
      active: section,
      title: currentTitle,
      section: currentSection
    })
  }

  render() {
    return (
      <div className='gray-bg'>
        <div className='container'>
          <div className='pad-container'>
            <div className='row'>
              <ScrollAnimation className='col-xs-12 center-text-xs' animateIn='fadeIn'>
                <h3 className='type-purple type-700 m-b-half'>Our Work in DC Schools</h3>
                <p>Our team provides multi-tiered support to DC schools through five primary services.</p>
              </ScrollAnimation>
            </div>
            <div className='space-3'/>
            <div className='row our-work-toggle top-xs'>

              <div className='col-md-5 col-xs-12'>
                <div
                  onClick={ () =>this.clickToggle(0) }
                  className={this.state.active === 0?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 0? '/images/icons/sun-purple.svg' : '/images/icons/sun-gray.svg'}
                    className='icon-sm'
                    alt='sun icon'
                    />
                  <p>Mental Health Treatment Services</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(1) }
                  className={this.state.active === 1?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 1?
                      '/images/icons/pin-purple.svg'
                      : '/images/icons/pin-gray.svg'}
                    className='icon-sm'
                    alt='pin icon'
                    />
                  <p>Professional Development Training</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(2) }
                  className={this.state.active === 2?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 2?
                      '/images/icons/users-purple.svg'
                      : '/images/icons/users-gray.svg'}
                    className='icon-sm'
                    alt='users icon'
                    />
                  <p>Classroom Coaching</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(3) }
                  className={this.state.active === 3?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 3?
                      '/images/icons/stack-purple.svg'
                      : '/images/icons/stack-gray.svg'}
                    className='icon-sm'
                    alt='stack icon'
                    />
                  <p>Consultation with school leaders and support staff</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(4) }
                  className={this.state.active === 4?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 4?
                      '/images/icons/share-purple.svg'
                      : '/images/icons/share-gray.svg'}
                    className='icon-sm'
                    alt='share icon'
                    />
                  <p>Teacher wellbeing initiatives</p>
                </div>
              </div>

              <div className='col-md-7'>
                <div className='containerify'>
                  <h4 className='m-b-half type-purple'>{this.state.title}</h4>
                  <p>{this.state.section}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkInDC;
