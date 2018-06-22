import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Modal extends React.Component {

  render() {
    const {name, bio, body} = this.props
    const renderName = name? <h4>{name}</h4> : null
    const renderBio = bio? <p>{bio}</p> : null
    const renderBody = body? <div>{body}</div> : null

    return (
      <div className='modal'>
        <ScrollAnimation className='container modal-container' animateIn='fadeInUp' delay={300}>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='modal-content'>
                <a onClick={this.props.close}>
                  <img
                    src='/images/icons/x-circle.svg'
                    className='icon-sm'
                    alt='close' />
                </a>
                <div className='modal-body'>
                  {renderName}
                  {renderBio}
                  {renderBody}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Modal;
