import React from 'react';
class TeamMember extends React.Component {

  clickTeamMember = (name) => {
    this.props.modal(name)
  }

  render() {
    return (
      <div onClick={ () => this.clickTeamMember(this.props.name)} className='col-md-4 col-xs-12 team-member'>
        <div className='relative'>
          <img
            src={'/images/team/' + this.props.name + '.png'}
            alt={this.props.name}
            className='full m-b-1'
             />
           <div className='team-overlay' />
           <h4 className='title'>{this.props.title}</h4>
        </div>
      </div>
    )
  }
}

export default TeamMember;
