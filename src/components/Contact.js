import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='pad-container'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 col-xs-12'>
              <h2>Contact us</h2>
              <p>Fill out the form below and we'll get back to you soon.</p>
            </div>
          </div>
          <div className='space-2' />
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 col-xs-12'>
              <form action="https://formspree.io/aaron@insitesolutions.org" method='POST'>
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
                      <input type='submit' name='Submit' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
