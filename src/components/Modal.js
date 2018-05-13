import React from 'react';

class Modal extends React.Component {

  render() {
    return (
      <div className='modal'>
        <div className='container modal-container'>
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
                  <h4>{this.props.name}</h4>
                  <p className='small'>{this.props.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
