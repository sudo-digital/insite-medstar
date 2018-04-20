import React from 'react';

class OurWorkSeciton extends React.Component {

  renderIconText = () => {
    let c = this.props.child;
    let s = this.props.school;
    let t = this.props.teacher;
    let o;

    switch(c) {
      case 0:
        c = 'Students enter school with trauma and ACEs.'
        s = 'School culture and systems are not optimized for mental health.'
        t = 'Teachers experience secondary trauma and may not be equipped with supportive practices.'
        o = 'Low academic outcomes and unmet mental health needs.'
        break;
      case 1:
        c = 'Students in need receive counseling or psychiatry support.'
        s = 'Leaders receive coaching; one-off programs are implemented.'
        t = 'Some trained in self-care or equipped for trauma sensitive pedagogy.'
        o = 'Low academic outcomes and partially met mental health needs.'
        break;
      case 2:
        c = 'Support all students through aligned, multi-tiered behavioral and SEL approaches.'
        s = 'Identify opportunities to improve school culture and systems.'
        t = 'Provide teachers skills for self-care and for developmentally responsive pedagogy.'
        o = 'Improved student academic outcomes + mental wellness.'
        break;
      default:
        c = 'Students enter school with trauma and ACEs.'
        s = 'School culture and systems are not optimized for mental health.'
        t = 'Teachers experience secondary trauma and may not be equipped with supportive practices.'
        o = 'Low academic outcomes and unmet mental health needs.'

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
