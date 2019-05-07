import React from 'react';

class OurWorkSeciton extends React.Component {

  renderIconText = () => {
    let c = this.props.child;
    let s = this.props.school;
    let t = this.props.teacher;
    let o;

    switch(c) {
      case 0:
        c = 'Many students face stress and trauma that impact their learning.'
        s = 'School systems are not equipped to mitigate these challenges.'
        t = 'Teachers experience secondary trauma and burnout.'
        o = 'Lower academic outcomes and growing unmet mental health needs.'
        break;
      case 1:
        c = 'Some high needs students receive support out of class but often feel marginalized and to blame.'
        s = 'Schools receive periodic updates on progress but do not regularly collaborate to create environmental change for the student.'
        t = 'Teachers receive little to no information that helps them best support the student’s needs in the classroom.'
        o = 'Unmet academic potential and partially unmet mental health needs.'
        break;
      case 2:
        c = 'Students benefit from prevention, early intervention, and responsive best practices in their school environment.'
        s = 'School leaders receive regular support to enhance school practices for all students.'
        t = 'Teachers experience increased efficacy, feel supported, and more effectively manage their students.'
        o = 'Improved mental wellbeing and outcomes for all.'
        break;
      default:
        c = 'Many students face stress and trauma that impact their learning.'
        s = 'School systems are not equipped to mitigate these challenges.'
        t = 'Teachers experience secondary trauma and burnout.'
        o = 'Lower academic outcomes and growing, unmet mental health needs.'

    }
    return {
      child: c,
      school: s,
      teacher: t,
      outcome: o
    }
  }

  render() {
    const text = this.renderIconText()
    return (
      <div className='row middle-xs center-text-xs'>
        <div className='col-md-8 col-md-offset-2 col-xs-12'>
          <p>{this.props.headline}</p>
        </div>
        <div className='m-t-2 col-md-4 col-xs-12'>
          <img
            src={'/images/icons/child-' + this.props.child + '.svg'}
            className='icon-xl m-x-auto m-b-1'
            alt='child icon' />
          <p className='m-t-2 small'>{text.child}</p>
        </div>
        <div className='m-t-2 col-md-4 col-xs-12'>
          <img
            src={'/images/icons/school-' + this.props.school + '.svg'}
            className='icon-xl m-x-auto m-b-1'
            alt='school icon' />
          <p className='m-t-2 small'>{text.school}</p>
        </div>
        <div className='m-t-2 col-md-4 col-xs-12'>
          <img
            src={'/images/icons/teacher-' + this.props.teacher + '.svg'}
            className='icon-xl m-x-auto m-b-1'
            alt='teacher icon' />
          <p className='m-t-2 small'>{text.teacher}</p>
        </div>
        <div className='m-t-2 col-md-10 col-md-offset-1 col-xs-12'>
          <div
            className={'containerify border-' + this.props.section}>
            <p className='m-b-0'>{text.outcome}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default OurWorkSeciton;
