import React from 'react';
import resources from '../data/resources.json'
import Slider from 'react-slick';

class Resources extends React.Component {

  renderResources = (group) => (
    resources.resources[group].map((r) => {
      return (
        <div
          key={r.id}
          className='block'
          >
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='resource-link large'
            href={r.link}>{r.name}
          </a>
        </div>
      )
    })
  );

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className='resources'>

        <div className='container'>
          <div className='pad-container-sm-top'>
            <div className='row'>
              <div className='col-xs-12'>
                <h3>Resources</h3>
                <p className='m-b-0'>General resources for parents, kids, teens, and specific topics.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='wrapper sticky p-t-0'>
          <div className='container'>
            <div className='row center-xs m-b-2'>
              <div className='col-md-6 col-xs-12'>
                <a href='#video' className='section-link icon'>
                  <img src='/images/icons/video.svg' alt='video icon'/>
                  Video Resources
                </a>
              </div>
              <div className='col-md-6 col-xs-12'>
                <a href='#links' className='section-link icon'>
                  <img src='/images/icons/link.svg' alt='link icon'/>
                  External Resources & Downloads
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='gray-bg m-b-2' id='video'>
          <div className='container'>
            <div className='pad-container-xs'>

              <div className='row'>
                <div className='col-xs-12'>
                  <h4>Video Resources</h4>
                    <p>
                      <a
                        className='link icon'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.youtube.com/channel/UCrYtnXBupknWn7nYeN6jzeA'>
                        Visit Our YouTube Channel
                        <img
                          className='icon-right'
                          src="/images/icons/external-link.svg"
                          />
                      </a>
                    </p>
                </div>
              </div>

              <div className='row middle-xs grab'>
                <div className='col-xs-12'>
                  <Slider {...settings}>
                    <div className='col-xs-12'>
                      <iframe
                        id='1'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/4uCmHl_mXPo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Parenting Series: Rewards and Effective Praise</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='2'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/rw4BfxjDNo4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Parenting Series: Spending Special Time With Your Child</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='3'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/OM4Gj6AWTW0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Educator Wellness Series: Time Management</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='4'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/3VSZuNDG5fM"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Educator Wellness Series: Savoring the Moment</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='5'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/EEzx6ad0nm8"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Removing Attention to Change Behavior</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='6'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/5tFPQ99YOvg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Educator Wellness Series: Stress and Breathing</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='7'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/esXA675C1a0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Educator Wellness Series: Finding Meaning and Purpose</p>
                    </div>
                    <div className='col-xs-12'>
                      <iframe
                        id='8'
                        className='video m-b-1'
                        src="https://www.youtube.com/embed/lVE5BV4hGTw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                      <p>Educator Wellness Series: Social Wellbeing Guided Strategies</p>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='gray-bg' id='links'>
          <div className='container'>
            <div className='pad-container-sm'>
              <div className='row middle-xs m-t-1'>

                <div className='col-xs-12'>
                  <h4>External Resources & Downloads</h4>
                </div>

                <div className='col-md-4 m-b-2 col-xs-12'>
                  <img
                    src='/images/resources/resources-parents.png'
                    className='full mini-phone'
                    alt='Parents'
                    />
                </div>
                <div className='col-md-8 m-b-2 col-xs-12'>
                  <h4>Resources for Parents</h4>
                  {this.renderResources('parents')}
                </div>

                <div className='col-md-4 m-b-2 col-xs-12'>
                  <img
                    src='/images/resources/resources-teens.png'
                    className='full mini-phone'
                    alt='Parents'
                    />
                </div>
                <div className='col-md-8 m-b-2 col-xs-12'>
                  <h4>Resources for Kids & Teens</h4>
                  {this.renderResources('kids')}
                </div>

                <div className='col-md-4 m-b-2 col-xs-12'>
                  <img
                    src='/images/resources/resources-educators.png'
                    className='full mini-phone'
                    alt='Parents'
                    />
                </div>

                <div className='col-md-8 m-b-2 col-xs-12'>
                  <h4>Resources for Educators</h4>
                    <div className='block'>
                      <a
                        download
                        className='resource-link download'
                        src='/resources/teacher-well-being-workbook-10-28-18.pdf'
                        href='/resources/teacher-well-being-workbook-10-28-18.pdf'><img src='/images/icons/download.svg' alt='download' />Teacher Well-Being Workbook
                      </a>
                    </div>
                </div>

                <div className='col-md-4 m-b-2 col-xs-12'>
                  <img
                    src='/images/resources/resources-topics.png'
                    className='full mini-phone'
                    alt='Parents'
                    />
                </div>
                <div className='col-md-8 m-b-2 col-xs-12'>
                  <h4>Resources for Specific Topics</h4>
                  {this.renderResources('topics')}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Resources;
