import React from 'react';
class TeamMember extends React.Component {

  clickTeamMember = (name, bio) => {
    this.props.modal(name, bio)
  }

  render() {
    return (
      <div
        onClick={ () => this.clickTeamMember(this.props.name, this.props.bio)}
        className='col-md-4 col-xs-12 team-member'>
        <div className='relative'>
          <img
            src={'/images/team/' + this.props.img}
            alt={this.props.name}
            className='full m-b-1'
             />
           <div className='team-overlay' />
           <h4 className='title'>{this.props.name}</h4>
        </div>
      </div>
    )
  }
}

export default TeamMember;
