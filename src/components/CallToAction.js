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
      headline: 'Schools are not equipped with developmental expertise for mental wellness, which contributes to low academic outcomes.'
    };
  }

  toggleSection = (section) => {
    let headline;
    switch(section) {
      case 0:
        headline = 'Most schools are not equipped with expertise to support student mental wellbeing across all tiers, which can contribute to lower academic success school wide.'
        break;
      case 1:
        headline = 'School- and community-based counseling and medication management provide meaningful support but do not prevent or fully address the growing challenge.'
        break;
      case 2:
        headline = 'Comprehensive, aligned, whole-school approaches to mental wellbeing on all levels.'
        break;
      default:
        headline = 'Most schools are not equipped with expertise to support student mental wellbeing across all tiers, which can contribute to lower academic success school wide.'
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
      <div className='container cta'>
        <div className='pad-container-sm'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='top-line'/>
              <h2 className='type-purple'>Our call to action</h2>
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
