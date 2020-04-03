import React from 'react';
import {
  EveryoneSection,
  ParentSection,
  EducatorSection,
  MentalHealthProviderSection
} from './CovidSections'
import { Link } from 'react-router-dom';

const EveryoneImg = '/images/resources/resources-everyone.png'
const ParentsImg = '/images/resources/resources-parents.png'
const EducatorsImg = '/images/resources/resources-educators.png'
const MentalHealthImg = '/images/resources/resources-mental-health.png'

class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      title: 'Everyone',
      body: 0,
      img: EveryoneImg
    };
  }

  toggleSection = (s, t, i) => {
    console.log('current section is ' + this.state.section);
    this.setState({
      section: s,
      title: t,
      body: s,
      img: i
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
          <div className='pad-container-xs'>

            <div className='row'>
              <div className='col-xs-12'>
                <h3>COVID-19 Resources</h3>
                <p className='small'><b>In response to the onset of COVID-19 in the United States, the WISE Center has developed a multipronged approach to address two central needs:</b></p>
                <ol>
                  <li className='small'>Via this webpage, the creation of a feedback platform from which families and schools can reach out to the WISE Center for support.</li>
                  <li className='small'>The creation of a clearinghouse of carefully screened resources outlining the most effective mental health responses related to COVID-19.</li>
                </ol>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-12'>
                <p className='small'>
                  <b>Keeping You Informed</b>
                  <br/>
                    The WISE Center recognizes that the amount of information pertaining to mental health resources related to COVID-19 can be overwhelming to process. Therefore, our team has identified some of the most helpful resources pertaining to the mental health impact of COVID-19. Resources are divided into four content areas:
                </p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <Link
                  to='/contact'
                  className='btn-default btn-tertiary'>
                  CONNECT WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='container full sticky'>
          <div className='covid-sticky-section'>
            <div className='row center-xs middle-xs'>
              <div className='col-md-3 col-xs-12'>
                <button
                  onClick={ () =>this.toggleSection(0, 'Everyone', EveryoneImg) }
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
                  onClick={ () =>this.toggleSection(1, 'Parents', ParentsImg) }
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
                  onClick={ () =>this.toggleSection(2, 'Educators', EducatorsImg) }
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
                  onClick={ () =>this.toggleSection(3, 'Mental Health Providers', MentalHealthImg) }
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
          <div className='pad-container-xs'>
            <div className='row middle-xs m-b-2'>
              <div className='col-md-2 col-xs-12'>
                <img
                  src={this.state.img}
                  className='full covid-section-img'
                  alt='Parents'
                  />
              </div>
              <div className='col-md-10 col-xs-12'>
                <h3 className='m-b-0'>Resources For {this.state.title}</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
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
                      <b>Our Clinical Response</b>
                      <br/>
                      The WISE Center is working in close coordination with the school systems we support to continue services for those in need. Below are the specific steps the WISE Center has taken in response to COVID-19:
                    </p>
                    <ul>
                      <li className='small'>The WISE Center has partnered with Google to establish a secure and HIPAA compliant virtual platform for uninterrupted mental health service delivery and school consultation.</li>
                      <li className='small'>WISE clinicians are providing services weekly to each student and family on the online service delivery model and related supports.</li>
                      <li className='small'>The WISE Center is working with Georgetown University to launch a new website dedicated to the health and mental wellbeing of teachers in the face of COVID-19. This website will provide online modules based on the WISE Center’s Teacher Wellbeing Curriculum.</li>
                    </ul>
                    <h6>THE SUPPORT OF THE SCHOOLS WE SERVE REMAINS OUR TOP PRIORITY. PLEASE CHECK BACK ON THIS SITE REGULARLY FOR UPDATES AND ADDITIONAL SUPPORTIVE RESOURCES.</h6>
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
