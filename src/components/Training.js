import React from 'react';

class Training extends React.Component {

  render() {
    return (
      <div className='training'>

        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2>Training</h2>
                <h4>Externship Training in School-Based Mental Health</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='gray-bg ow-how'>
          <div className='container'>
            <div className='pad-container-sm'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h6 className='h6-lg'>Program Overview: School-Based Mental Health Track</h6>
                  <p>In 2018, InSite Solutions and Georgetown University’s Department of Child Psychiatry merged to create a regional center for school-based mental health: The MedStar Georgetown Center for Wellbeing in School Environments (WISE Center). This partnership seeks to expand access to our high-quality, multidisciplinary school-based experts in direct clinical service and trauma-informed whole-school programming; train the next generation of mental health practitioners, skilled in the application of evidence-based clinical knowledge to individuals, families, and systems; and provide a deeper evaluation of programmatic outcomes and disseminate knowledge in the wider educational and mental health communities.</p>
                  <p>
                    <a
                      href='/resources/medstar-wise-training.pdf'
                      className='link download'><img src='/images/icons/download.svg' alt='download' />View complete summary of the externship program.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='pad-container-sm'>
            <div className='row between-xs center-text-xs bottom-xs'>
              <div className='col-md col-xs-12 m-b-xs-2'>
                <a href='#program' className='link'><img
                  src='/images/icons/program.svg'
                  className='icon-lg m-x-auto m-b-1'
                  />Program Details</a>
              </div>
              <div className='col-md col-xs-12 m-b-xs-2'>
                <a href='#qualifications' className='link'><img
                  src='/images/icons/qualifications.svg'
                  className='icon-lg m-x-auto m-b-1'
                  />Qualifications</a>
              </div>
              <div className='col-md col-xs-12 m-b-xs-2'>
                <a href='#application' className='link'><img
                  src='/images/icons/app-deadline.svg'
                  className='icon-lg m-x-auto m-b-1'
                  />App Deadline</a>
              </div>
              <div className='col-md col-xs-12 m-b-xs-2'>
                <a href='#location' className='link'><img
                  src='/images/icons/location.svg'
                  className='icon-lg m-x-auto m-b-1'
                  />Location</a>
              </div>
              <div className='col-md col-xs-12 m-b-xs-2'>
                <a href='#contact' className='link'><img
                  src='/images/icons/contact.svg'
                  className='icon-lg m-x-auto m-b-1'
                  />Contact</a>
              </div>
            </div>

            <div className='space-3'></div>

            <div className='row'>
              <div className='col-xs-12'>
                <p id='program'><b>Program Details</b><br/>Externs are placed within our partnering school systems, each of which are well-experienced at utilizing and valuing the important role of doctoral externs. These schools serve students ages 3 to 18, most of whom live in communities of poverty and experience chronic adverse childhood experiences (ACEs). As a result, the WISE Center utilizes <b>a trauma-informed approach</b> to the services we provide to schools and the training we provide to externs.</p>
                <p>This externship is intended for advanced doctoral students (e.g., rising 3rd year or above) in clinical psychology. Supervised by an attending psychologist via The WISE Center, doctoral externs will provide school-based services, including:</p>
                <ul>
                  <li>Evidence-Based Psychotherapy</li>
                  <li>Psychodiagnostic Assessment</li>
                  <li>Consultation and Teacher Wellbeing</li>
                  <li>Parent Engagement</li>
                  <li>Psychoeducational Testing</li>
                </ul>
                <p><i>Supervision, didactics will be provided to externs on a weekly basis.</i></p>

                <p id='qualifications'><b>Qualifications</b><br/>Applicants should be doctoral externs in Clinical, Counseling, or School Psychology entering their 3rd year or higher and have experience delivering psychotherapy. Preference is given to applicants with experience working with children, as well as those with experience in schools or other multidisciplinary settings.</p>

                <p id='application'><b>Application Deadline</b><br/>February 15th or before. Offers are extended on a rolling basis; however, externs are not required to accept or decline offers until Consortium Match Day.</p>

                <p id='location'><b>Location for MedStar Georgetown WISE Center track</b><br/>DC public and public charter schools partnering with the WISE Center for mental health consultation and support and MGUH Department of Psychiatry, located at <a href='https://goo.gl/maps/N9bS2rY6cL4uS7AR9' className='link' target='_blank' rel='noopener noreferrer'>2115 Wisconsin Ave NW, Washington, DC 20007</a>.</p>

                <p id='contact'>
                  <b>Contact Information</b>
                  <br/>
                  Karimah Ware, Psy.D.
                  <br/>
                  Director of Clinical Training
                  MedStar Georgetown University Hospital, Department of Psychiatry Center for Wellbeing in School Environments
                  <br/>
                  <a className='link' href='mailto:training@medstarwise.org'>training@medstarwise.org</a>
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Training;
