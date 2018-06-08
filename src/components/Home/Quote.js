import React from 'react';

class Quote extends React.Component {

  render() {
    return (
      <div className='row middle-xs grab'>

        <div className='col-md-2 col-xs-8'>
          <img
            src={ '/images/quotes/quote-' + this.props.id + '.png' }
            className='full'
            alt='quote' />
        </div>

        <div className='col-md-3 col-xs-12'>
          <p className='small'>{this.props.title}<br/>{this.props.location}</p>
        </div>

        <div className='col-md-7 col-xs-12'>
          <p className='m-b-0 type-purple'>{this.props.quote}</p>
        </div>

      </div>
    )
  }
}

export default Quote;
