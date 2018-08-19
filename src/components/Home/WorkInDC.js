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

    const classroomCoaching = 'Classroom staff and instructional coaching teams receive coaching and capacity building for integrating trauma-sensitive and mindful teaching practices into the classroom to support universal prevention and student-specific intervention'

    const consultationSchoolLeaders = 'Our team engages in ongoing consultation with school leadership and support staff to fully address the needs of students with emotional and behavioral challenges, to increase communication and collaboration, and to enhance school-wide behavioral health policies and practices.'

    const professionalDevTraining = 'School staff receive foundational evidence-based pedagogy and concrete skill acquisition around the neurobiological impacts of stress and trauma, as well as relational and responsive strategies that reduce classroom behavioral issues, to increase staff’s feelings of efficacy and confidence.'

    const teacherWellbeing = 'Our team is equally as committed to taking care of the mental wellbeing of adults, so they can best support their students. We lead the citywide and school-based initiatives to decrease teacher burnout and turnover through school wellness programming, self-care trainings, and individual staff support.'

    let currentSection;
    let currentTitle;
    switch(section) {
      case 0:
        currentTitle = 'Mental health treatment services';
        currentSection = mentalHealthTreatment;
        break;
      case 1:
        currentTitle = 'Professional development training';
        currentSection = professionalDevTraining;
        break;
      case 2:
        currentTitle = 'Classroom Coaching';
        currentSection = classroomCoaching;
        break;
      case 3:
        currentTitle = 'Consultation with school leaders and support staff';
        currentSection = consultationSchoolLeaders;
        break;
      case 4:
        currentTitle = 'Teacher wellbeing initiatives';
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
                <h3 className='type-purple type-700 m-b-half'>Our Work in DC</h3>
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
                  <p>Mental health treatment services</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(3) }
                  className={this.state.active === 3?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 3?
                      '/images/icons/pin-purple.svg'
                      : '/images/icons/pin-gray.svg'}
                    className='icon-sm'
                    alt='pin icon'
                    />
                  <p>Professional development training</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(1) }
                  className={this.state.active === 1?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 1?
                      '/images/icons/users-purple.svg'
                      : '/images/icons/users-gray.svg'}
                    className='icon-sm'
                    alt='users icon'
                    />
                  <p>Classroom Coaching</p>
                </div>

                <div
                  onClick={ () =>this.clickToggle(2) }
                  className={this.state.active === 2?
                    'toggle-switch flex middle active'
                    : 'toggle-switch flex middle'}>
                  <img
                    src={this.state.active === 2?
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
