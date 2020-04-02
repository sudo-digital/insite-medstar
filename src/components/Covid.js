import React from 'react';
import {
  EveryoneSection,
  ParentSection,
  EducatorSection,
  MentalHealthProviderSection
} from './CovidSections'

class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      title: 'Everyone',
      body: 0
    };
  }

  toggleSection = (s, t) => {
    console.log('current section is ' + this.state.section);
    this.setState({
      section: s,
      title: t,
      body: s
    })
  }

  renderCovidResource = () => {
    if (this.state.section === 3) {
      return MentalHealthProviderSection
    } else if (this.state.section === 1) {
      return ParentSection
    } else if (this.state.section === 2) {
      return EducatorSection
    } else {
      return EveryoneSection
    }
  }
  render() {
    return (
      <div className='covid'>
        <div className='container'>
          <div className='pad-container-sm'>

            <div className='row'>
              <div className='col-xs-12'>
                <h2>COVID-19 Resources</h2>
                <p><b>In response to the onset of COVID-19 in the United States, the WISE Center has developed a multipronged approach to address two central needs:</b></p>
                <ol>
                  <li>Via this webpage, the creation of a feedback platform from which families and schools can reach out to the WISE Center for support.</li>
                  <li>The creation of a clearinghouse of carefully screened resources outlining the most effective mental health responses related to COVID-19.</li>
                </ol>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-12'>
                <p>
                  <b>Our Clinical Response</b>
                  <br/>
                    From the first days of the COVID-19 pandemic in the United States, the WISE Center has partnered with state and local agencies to launch a service through which WISE clinicians can be virtually deployed into some of the hardest impacted communities of the Washington, DC metro area to help support the mental health needs of children, youth, families and educators.
                </p>
                <p>The WISE Center recognizes that the amount of information pertaining to mental health resources related to COVID-19 can be overwhelming to process. Therefore, our team is committed to combing through the latest resources pertaining to the mental health impact of COVID-19 and posting them here for simple access. Resources are divided into four content areas:</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container full sticky'>
          <div className='covid-sticky-section'>
            <div className='row center-xs middle-xs'>
              <div className='col-md-3 col-xs-12'>
                <button
                  onClick={ () =>this.toggleSection(0, 'Everyone') }
                  className={
                    this.state.section === 0?
                    'active'
                    : null}
                    >
                  Everyone
                </button>
              </div>
              <div className='col-md-3 col-xs-12'>
                <button
                  onClick={ () =>this.toggleSection(1, 'Parents') }
                  className={
                    this.state.section === 1?
                    'active'
                    : null}
                    >
                  Parents
                </button>
              </div>
              <div className='col-md-3 col-xs-12'>
                <button
                  onClick={ () =>this.toggleSection(2, 'Educators') }
                  className={
                    this.state.section === 2?
                    'active'
                    : null}
                    >
                  Educators
                </button>
              </div>
              <div className='col-md-3 col-xs-12'>
                <button
                  onClick={ () =>this.toggleSection(3, 'Mental Health Providers') }
                  className={
                    this.state.section === 3?
                    'active'
                    : null}
                    >
                  Mental Health Providers
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row'>
              <div className='col-xs-12'>
                <h3>Resources For {this.state.title}</h3>
                { this.renderCovidResource() }
              </div>
            </div>

          </div>
        </div>

        <div className='gray-bg'>
          <div className='container'>
            <div className='pad-container-xs'>
              <div className='row'>
                <div className='col-xs-12'>
                  <div className='gray-container'>
                    <p className='small'>
                      <b>Secure HIPAA Compliant Service Delivery</b>
                      <br/>
                      The WISE Center is working in close coordination with the school systems we support to continue services for those in need. Below are the specific steps the WISE Center has taken in response to COVID-19:
                    </p>
                    <ul>
                      <li className='small'>
                        The WISE Center has partnered with Google to establish a secure and HIPAA compliant virtual platform for uninterrupted mental health service delivery and school consultation. To continue uninterrupted supports, the WISE Center services have entirely migrated to this Google supported, HIPAA compliant online service platform.
                      </li>
                      <li className='small'>
                        WISE clinicians are providing details weekly to each student and family on the online service delivery model and related supports and will continue to distribute relevant resources and updates as relevant.
                      </li>
                      <li className='small'>
                        Our team of professional clinicians have worked diligently to prepare customized plans to help each of the students we support adapt to the scheduling changes that COVID-19 has caused.
                      </li>
                      <li className='small'>
                        The WISE Center has conducted a series of trainings to ensure that every student, educator, and school we support is familiar with the secure online platform WISE has migrated to.
                      </li>
                      <li className='small'>
                        The WISE Center is working with Georgetown University to launch a new website dedicated to the health and mental wellbeing of teachers in the face of COVID-19. This website will provide online modules based on the WISE Center’s Teacher Wellbeing Curriculum.
                      </li>
                    </ul>
                    <h6>The support of the schools we serve remains our top priority. Please check back on this site regularly for updates and additional supportive resources.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Covid;
