import React from 'react';
import TeamMember from './TeamMember';
import Modal from './Modal';

class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      bio: ''
    };
  }

  renderModal = () => {
    let title;
    let bio;

    const aaron = (
      <div>
        <p>Dr. Aaron Rakow, PhD  is a founding partner of and clinical psychologist for InSite Solutions. Collectively, Dr. Rakow has fifteen years of experience working within the behavioral health field including at the National Institutes of Mental Health, Children's National Health System, The Medical University of South Carolina and the University of Vermont.</p>

        <p>Much of Dr. Rakow’s professional background focuses on improving access to empirically supported mental health treatments via training and dissemination efforts within school systems and primary care offices.</p>

        <p>Dr. Rakow has previously been involved in the successful launch of a statewide mental health training and dissemination efforts with the Departments of Health and Mental Health in Vermont.</p>
      </div>
    )

    const megan = (
      <div>
        <p>Dr. Megan McCormick, PhD is a founding partner of InSite Solutions and clinical psychologist. She has worked extensively within community-based organizations on improving public health causes and advocating for youth mental health issues within the Washington DC metro area.</p>

        <p>Her research background has focused on psychological factors that impact health outcomes, such as pain management and medication adherence, as well as the design, implementation, and evaluation of behavioral interventions to improve access to mental healthcare in primary healthcare settings and prevent negative medical outcomes in pediatric chronic illness populations.</p>
      </div>
    )

    switch(this.state.bio) {
      case 'aaron':
        title = 'Dr. Aaron Rakow'
        bio = aaron
        break;
      case 'megan':
        title = 'Dr. Megan McCormick'
        bio = megan
        break;
      case 'team2':
        title = 'title'
        bio = 'bio'
        break;
      case 'team3':
        title = 'title'
        bio = 'bio'
        break;
      case 'team4':
        title = 'title'
        bio = 'bio'
        break;
      case 'team6':
        title = 'title'
        bio = 'bio'
        break;
      default:
        title = ''
        bio = ''
    }

    if(this.state.showModal) {
      return (
        <Modal
          title={title}
          body={bio}
          close={this.closeModal} />
      )
    } else {
      return null
    }
  }

  openModal = (name) => {
    console.log('boom ' + name);
    this.setState({
      showModal: true,
      bio: name
    })
  }

  closeModal = () => {
    this.setState({ showModal:false })
  }

  helloWorld = () => {
    console.log('poops');
  }

  render() {
    return (
      <div className='container'>
        { this.renderModal() }
        <div className='pad-container'>
          <div className='row'>
            <div className='col-xs-12'>
              <h2>Our team</h2>
              <p>The clinical team includes 11 additional pediatric psychiatrists and five additional child psychologists with expertise in school based mental health strategies and solutions.</p>
            </div>
          </div>
          <div className='space-3' />
          <div className='row'>
            <TeamMember modal={(name) => this.openModal(name)} name={'aaron'} title={'Dr. Aaron Rakow'} />
            <TeamMember modal={(name) => this.openModal(name)} name={'megan'} title={'Dr. Megan McCormick'} />
            <TeamMember modal={(name) => this.openModal(name)} name={'team2'} title={'Dr. ?'} />
            <TeamMember modal={(name) => this.openModal(name)} name={'team3'} title={'Dr. ?'} />
            <TeamMember modal={(name) => this.openModal(name)} name={'team4'} title={'Dr. ?'} />
            <TeamMember modal={(name) => this.openModal(name)} name={'team6'} title={'Dr. ?'} />
          </div>
        </div>
      </div>
    )
  }
}

export default Team;
