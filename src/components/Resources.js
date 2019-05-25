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
              <div className='col-md-4 col-xs-12'>
                <h4>Resources for Parents</h4>
                {this.renderResources('parents')}
              </div>
              <div className='col-md-4 col-xs-12'>
                <h4>Resources for Kids & Teens</h4>
                {this.renderResources('kids')}
              </div>
              <div className='col-md-4 col-xs-12'>
                <h4>Resources for Specific Topics</h4>
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
