import React from 'react';
import Slider from 'react-slick';
import Quote from './Quote'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
            <ScrollAnimation className='col-xs-12 relative' animateIn='fadeIn'>
              <Slider {...settings}>

                <Quote
                  id={1}
                  title={'School Leader'}
                  location={'Washington, DC'}
                  quote='“As a result of our work with The MedStar Georgetown WISE Center, our school has turned students who have presented severe behavior challenges into the successful students the school and their families know they can be."' />

                <Quote
                  id={2}
                  title={'School Leader'}
                  location={'Washington, DC'}
                  quote='“The WISE Center meets weekly with me, my vice principals, and our school social worker to provide ongoing advisement around school, classroom, and individual student behavioral health needs. The advice and training they provide is invaluable, has improved confidence among school’s faculty, and has strengthened the emotional and academic success of our students.”' />

                <Quote
                  id={3}
                  title={'School Leader'}
                  location={'Washington, DC'}
                  quote='“Since collaborating with The MedStar Georgetown WISE Center, I have seen teachers handling classroom difficulties more effectively, parents being more open to mental health support for their children and themselves, and students feeling happier and better prepared to learn.”' />

              </Slider>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeQuotes;
