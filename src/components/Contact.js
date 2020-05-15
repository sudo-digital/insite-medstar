import React from 'react';
import PropTypes from "prop-types";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      covid: false
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  renderCopy = () => {
    if (this.state.covid) {
      return (
        <p>
          To participate in COVID-19 text message program, please enter your <b>name</b> and <b>phone number</b> in the message below. We will be in touch shortly to help you get started.
          <a
            download
            className='resource-link download block'
            src='/resources/faq-texting-program.docx'
            href='/resources/faq-texting-program.docx'>
            <img src='/images/icons/download.svg' alt='download' />FAQ - Texting Program
          </a>
        </p>
      )
    } else {
      return (
        <p>Please fill out the form below, and we'll get back to you soon.</p>
      )
    }
  }

  renderContactInput = () => {
    if (this.state.covid) {
      return (
        <div className='form-item'>
          <label>Phone Number</label>
          <input type='tel' placeholder='Phone number...' name='phone' />
        </div>
      )
    } else {
      return (
        <div className='form-item'>
          <label>Email</label>
          <input type='text' placeholder='john@email.com' name='email' />
        </div>
      )
    }
  }

  componentDidMount() {
    let path = this.props.location.pathname;

    if ( path.includes('/contact/') ) {
      this.setState({covid: true})
    }
  }

  render() {
    const { match, location, history } = this.props;
    const loc = location.pathname
    return (
      <div className='container contact'>      
        <div className='pad-container-sm'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 col-xs-12'>
              <h2>Contact us</h2>
              { this.renderCopy() }
            </div>
          </div>
          <div className='space-2' />
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 col-xs-12'>
              <form action="https://formspree.io/aaron@medstarwise.org" method='POST'>
                <div className='row'>
                  <div className='col-md-6 col-xs-12'>
                    <div className='form-item'>
                      <label>Name</label>
                      <input type='text' placeholder='John Smith' name='name' />
                    </div>
                  </div>
                  <div className='col-md-6 col-xs-12'>
                    { this.renderContactInput() }
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
