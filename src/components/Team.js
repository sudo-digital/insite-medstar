import React from 'react';
import teamMembers from '../data/team.json'
import TeamMember from './TeamMember'
import Modal from './Modal';

class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      bio: ''
    };
  }

  renderTeamMembers = () => {
    let eachMember = teamMembers.map((member) => {
      return member
    });

    return (
      eachMember.map((member) => {
        return (
          <TeamMember
            key={member.id}
            name={member.name}
            bio={member.bio}
            img={member.img}
            modal={ (name, bio) => this.openModal(name, bio) } />
        );
      })
    )
  }

  openModal = (name, bio) => {
    this.setState({
      showModal: true,
      name: name,
      bio: bio
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  renderModal = () => {
    if(this.state.showModal) {
      return (
        <Modal
          name={this.state.name}
          bio={this.state.bio}
          close={this.closeModal} />
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='container'>
        { this.renderModal() }
        <div className='pad-container-sm'>
          <div className='row'>
            <div className='col-xs-12'>
              <h3>Our Team</h3>
              <p>Our team of highly trained psychiatrists, child psychologists, trainees, and staff are committed to providing culturally appropriate, evidence-based school-based mental health strategies and solutions. Our strength comes from our variety of individual and professional experiences which informed our collective mental health expertise.</p>
            </div>
          </div>
          <div className='space-3' />
          <div className='row'>
            { this.renderTeamMembers() }
          </div>
        </div>
      </div>
    )
  }
}

export default Team;
