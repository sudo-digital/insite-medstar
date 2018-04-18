import React from 'react';
import Slider from 'react-slick';
import Quote from './Quote'

class HomeQuotes extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='container'>
        <div className='pad-container'>
          <div className='row middle-xs'>
            <div className='col-xs-12 relative'>
              <Slider {...settings}>

                <Quote
                  name={'Michelle Smith'}
                  title={'Director of Schools'}
                  location={'Washington, DC'}
                  quote='“The families we serve no longer have to be placed on a three- to six-month waiting list to get the mental health services their child needs to be successful in school and life. Our work on behalf of children is much more effective because of our partnership with InSite Solutions."' />

                <Quote
                  name={'Michelle Smith'}
                  title={'Director of Schools'}
                  location={'Washington, DC'}
                  quote='“The families we serve no longer have to be placed on a three- to six-month waiting list to get the mental health services their child needs to be successful in school and life. Our work on behalf of children is much more effective because of our partnership with InSite Solutions."' />

                <Quote
                  name={'Michelle Smith'}
                  title={'Director of Schools'}
                  location={'Washington, DC'}
                  quote='“The families we serve no longer have to be placed on a three- to six-month waiting list to get the mental health services their child needs to be successful in school and life. Our work on behalf of children is much more effective because of our partnership with InSite Solutions."' />

              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeQuotes;
