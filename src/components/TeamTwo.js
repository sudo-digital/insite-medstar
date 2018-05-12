import React from 'react';
import teamMembers from '../data/team.json'
import TeamMember from './TeamMember'
import Modal from './Modal';

class TeamTwo extends React.Component {

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
        <div className='pad-container'>
          <div className='row'>
            <div className='col-xs-12'>
              <h2>Our team</h2>
              <p>The clinical team includes 11 additional pediatric psychiatrists and five additional child psychologists with expertise in school based mental health strategies and solutions.</p>
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

export default TeamTwo;
