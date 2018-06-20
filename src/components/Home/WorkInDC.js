import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class WorkInDC extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      title: 'Direct mental health service',
      section: 'Clinical psychotherapy and medication management (if needed); Clinical psychologist and doctoral externs provide psychotherapy to students in both general education and special education; psychiatrists provide psychodiagnostic and medication management support.'
    };
  }

  clickToggle = (section) => {
    const directMentalHealth = 'Clinical psychotherapy and medication management (if needed); Clinical psychologist and doctoral externs provide psychotherapy to students in both general education and special education; psychiatrists provide psychodiagnostic and medication management support.'

    const behaviorCoaching = 'For students with the greatest emotional and behavioral needs, a clinical psychologist observes the student in class for an hour each week to understand success of supports and interventions; observation data is used to provide coaching support to leaders and the teacher.'

    const capacityBuilding = 'Clinical psychologists meet with school leadership to provide consultation on the students with the highest levels of emotional and behavioral needs; review and refine school wide behavioral health protocols and assessment strategies.'

    const teacherTrain = 'In partnership with nationally recognized teacher training programs, CAPD leads training in self-care and trauma informed pedagogy for teachers entering the field.'

    const cityWide = 'CAPD participates in several DC-wide initiatives that bring together expertise and best practices from various stakeholder groups, and improve access to services for schools and families, to help the District address its urgent mental health need.'

    let currentSection;
    let currentTitle;
    switch(section) {
      case 0:
        currentTitle = 'Direct mental health service';
        currentSection = directMentalHealth;
        break;
      case 1:
        currentTitle = 'Behavioral coaching with classroom teachers';
        currentSection = behaviorCoaching;
        break;
      case 2:
        currentTitle = 'Capacity building with school leadership and support staff';
        currentSection = capacityBuilding;
        break;
      case 3:
        currentTitle = 'New teacher training';
        currentSection = capacityBuilding;
        break;
      case 4:
        currentTitle = 'Citywide collaboratives';
        currentSection = teacherTrain;
        break;
      default:
        currentTitle = 'Direct mental health service';
        currentSection = cityWide;
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
                <p>Our team provides multi-tieredsupport to DC schools through five primary services.</p>
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
                  <p>Direct mental health service</p>
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
                  <p>Behavioral coaching with classroom teachers</p>
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
                  <p>Capacity building with school leadership and support staff</p>
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
                  <p>New teacher training</p>
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
                  <p>Citywide collaboratives</p>
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
