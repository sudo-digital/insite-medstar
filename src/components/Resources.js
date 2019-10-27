import React from 'react';
import resources from '../data/resources.json'

class Resources extends React.Component {

  renderResources = (group) => (
    resources.resources[group].map((r) => {
      return (
        <div key={r.id} className='block'>
          <a
            target='_blank'
            rel="noopener noreferrer"
            className='resource-link'
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
              <div className='col-xs-12'>
                <h3>Resources</h3>
                <p>General resources for parents, kids, teens, and specific topics:</p>
              </div>
            </div>
            <div className='row m-t-1'>
              <div className='col-md-6 m-b-2 col-xs-12'>
                <h4>Resources for Parents</h4>
                {this.renderResources('parents')}
              </div>
              <div className='col-md-6 m-b-2 col-xs-12'>
                <h4>Resources for Kids & Teens</h4>
                {this.renderResources('kids')}
              </div>
              <div className='col-md-6 col-xs-12'>
                <h4>Resources for Specific Topics</h4>
                {this.renderResources('topics')}
              </div>
              <div className='col-md-6 col-xs-12'>
                <h4>Resources for Educators</h4>
                  <div className='block'>
                    <a
                      download
                      className='resource-link'
                      src='/resources/teacher-well-being-workbook-10-28-18.pdf'
                      href='/resources/teacher-well-being-workbook-10-28-18.pdf'>Teacher Well-Being Workbook
                    </a>
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
