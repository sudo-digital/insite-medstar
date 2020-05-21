import React from 'react';
import OurWorkSeciton from './OurWorkSeciton'

class CallToAction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      child: 0,
      school: 0,
      teacher: 0,
      headline: 'The mental health needs of DC students are outweighing the existing developmental expertise and mental health resources in schools. The most prepared schools and teachers are not meeting their full potential due to the overwhelming mental health and developmental needs of the student population.'
    };
  }

    toggleSection = (section) => {
    let headline;
    switch(section) {
      case 0:
        headline = 'The mental health needs of DC students are outweighing the existing developmental expertise and mental health resources in schools. The most prepared schools and teachers are not meeting their full potential due to the overwhelming mental health and developmental needs of the student population.'
        break;
      case 1:
        headline = 'School- and community-based counseling and medication management provide meaningful support but do not prevent or fully address the growing challenge.'
        break;
      case 2:
        headline = 'Following best practices in both educational and child psychology, we promote a collaborative, systems-based approach to mental well-being that builds capacity across the school setting.'
        break;
      default:
        headline = 'The mental health needs of DC students are outweighing the existing developmental expertise and mental health resources in schools. The most prepared schools and teachers are not meeting their full potential due to the overwhelming mental health and developmental needs of the student population.'
    }
    this.setState({
      section: section,
      headline: headline,
      child: section,
      school: section,
      teacher: section
    })
  }

  render() {
    return (
      <div className='container tabs'>
        <div className='pad-container-sm'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='top-line'/>
              <h2 className='type-purple'>Our Call To Action</h2>
            </div>
          </div>
          <div className='space-2' />
          <div className='row middle-xs'>
            <div className='col-md-4 col-xs-12'>
              <h6
                onClick={ () =>this.toggleSection(0) }
                className={this.state.section === 0? 'active' : null}>
                current situation
              </h6>
            </div>
            <div className='col-md-4 col-xs-12'>
              <h6
                onClick={ () =>this.toggleSection(1) }
                className={this.state.section === 1? 'active' : null}>
                Co-Located Mental Health Care
              </h6>
            </div>
            <div className='col-md-4 col-xs-12'>
              <h6
                onClick={ () =>this.toggleSection(2) }
                className={this.state.section === 2? 'active' : null}>
                our solution
              </h6>
            </div>
          </div>
          <div className='space-2' />
          <OurWorkSeciton
            section={this.state.section}
            headline={this.state.headline}
            child={this.state.child}
            school={this.state.school}
            teacher={this.state.teacher}
             />
        </div>
      </div>
    )
  }
}

export default CallToAction;
