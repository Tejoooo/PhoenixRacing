import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
  const phoneNumber = '123-456-7890';
  return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-4'>
            <MDBCol md='3' lg='4' xl='3' className='mt-4 text-center mx-auto mb-4'>
              <div className="logo-section">
              <img src='./logo.png' alt='logo' className='w-50'></img>
              <h6 className='fw-bold mb-4'>
                Phoenix Racing
              </h6>
              <p>
                Tagline
              </p>
              </div>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mt-4 mx-auto mb-4 text-md-center'>
              <div className="footer-section">
              <h5 className='text-uppercase fw-bold mb-4'>Contact</h5>
              <p className='d-flex justify-content-center justify-content-md-start align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='me-3' size='lg'/>
                <a href="mailto:example@example.com">Email Us</a>
              </p>
              <p className='d-flex justify-content-center justify-content-md-start align-items-center'>
                <FontAwesomeIcon icon={faPhone} className='me-3' size='lg'/>
                <a href={`tel:${phoneNumber}`}>Call Us</a>
              </p>
              <p className='d-flex justify-content-center align-items-center mt-5'>
                <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faFacebookF} className='me-4' size='xl'/>
                </a>
                <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faTwitter} className='me-4' size='xl'/>
                </a>
                <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faInstagram} className='me-4' size='xl' />
                </a>
                <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl'/>
                </a>
              </p>
              </div>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mt-4 mx-auto mb-4'>
              <div className="footer-section">
              <h5 className='text-uppercase fw-bold mb-4'>Address</h5>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className='me-3' size='lg'/>
                <a href='https://www.google.com/maps/place/IC+Engine+And+Automobile+Lab/@21.1637865,72.7816719,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04d116cd22c51:0xb8ad8212cb355df3!8m2!3d21.1637865!4d72.7842468!16s%2Fg%2F11gl1n_x09?entry=ttu'>
                IC Engine Lab, SVNIT Campus, Ichchhanath, Surat -395007, Gujarat, India
                </a>
              </p>
              </div>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className=' mt-4 mx-auto mb-md-0 mb-4'>
            <div className='ratio ratio-16x9'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.713764100641!2d72.78424679999999!3d21.1637865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d116cd22c51%3A0xb8ad8212cb355df3!2sIC%20Engine%20And%20Automobile%20Lab!5e0!3m2!1sen!2sin!4v1688125239627!5m2!1sen!2sin" 
              width="400" height="300" 
              style={{border:0}}
              allowFullScreen="" loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title='address'>

            </iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}