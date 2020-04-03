import React from 'react';
import resources from '../data/resources.json'

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
    return (
      <div className='resources'>
        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row m-b-3'>
              <div className='col-xs-12 m-b-2'>
                <h2>Resources</h2>
                <p>General resources for parents, kids, teens, and specific topics.</p>
              </div>
            </div>
            <div className='row middle-xs m-t-1'>
              <div className='col-md-4 m-b-2 col-xs-12'>
                <img
                  src='/images/resources/resources-parents.png'
                  className='full mini-phone'
                  alt='Parents'
                  />
              </div>
              <div className='col-md-8 m-b-2 col-xs-12'>
                <h3>Resources for Parents</h3>
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
                <h3>Resources for Kids & Teens</h3>
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
                <h3>Resources for Educators</h3>
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
                <h3>Resources for Specific Topics</h3>
                {this.renderResources('topics')}
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Resources;
