import React from 'react';
import Modal from '../Modal'

class HomeHero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal:false })
  }

  renderModal = () => {
    const form = (
      <form className='p-a-2' action="https://formspree.io/aaron@insitesolutions.org" method='POST'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <div className='form-item'>
              <label>Name</label>
              <input type='text' placeholder='John Smith' name='name' />
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <div className='form-item'>
              <label>Email</label>
              <input type='text' placeholder='john@email.com' name='email' />
            </div>
          </div>
          <div className='col-xs-12'>
            <div className='form-item'>
              <label>Message</label>
              <textarea placeholder='Message...' name='message' rows='5' />
            </div>
          </div>
          <div className='col-xs-12 end-xs'>
            <div className='form-item'>
              <input className='m-b-0' type='submit' name='Submit' />
            </div>
          </div>
        </div>
      </form>
    )
    if(this.state.showModal) {
      return <Modal title={'Partner with us'} body={form} close={this.closeModal} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='home-hero'>
        { this.renderModal() }
        <img
          className='img-bg'
          src='/images/placeholder-bg.png'
          alt='Home Hero'
          />
        <div className='overlay' />
        <div className='container'>
          <div className='pad-container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2 className='type-white'>MedStar Georgetown WISE Center.</h2>
                <h4 className='type-white'>MedStar Georgetown University Hospital</h4>
                <br />
              </div>
              <div className='col-md-8 col-xs-12'>
                <h3 className='type-white'>Supporting schools with comprehensive approaches for mental wellness.</h3>
                <a onClick={this.openModal} className='btn-default btn-tertiary'>PARTNER WITH US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHero;
