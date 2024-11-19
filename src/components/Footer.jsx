import './Footer.css';
import { faTwitter,faFacebook,faGoogle, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTwitter, faFacebook, faGoogle, faLinkedin, faWhatsapp, faInstagram)

export default function Footer() {
  return (
    <div className="backGroundFooter">
        <div className="container p-4">
        <div className="row line">
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
                <img src="https://aigate.me/assets/logo-DZvQUOOp.png" alt="error" />
            </div>
            <div>
                <p className='text-light mt-5 fs-5 fw-bold'>Where technology meets innovation</p>
            </div>
            <div className="icons row mt-4">
            <div className='col-2'>
            <FontAwesomeIcon className='text-light fs-4'  icon="fa-brands fa-facebook" />
            </div>
            <div className='col-2'>
            <FontAwesomeIcon className='text-light fs-4'  icon="fa-brands fa-twitter" />
            </div>
            <div className='col-2'>
            <FontAwesomeIcon className='text-light fs-4'  icon="fa-brands fa-google" />
            </div>
            <div className='col-2'>
            <FontAwesomeIcon className='text-light fs-4'  icon="fa-brands fa-instagram" />
            </div>
            <div className="col-2">
            <FontAwesomeIcon className='text-light fs-4'  icon="fa-brands fa-linkedin" />
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='h5'>Company</h5>
            <p className='pStyle'>Home</p>
            <p className='pStyle'>About</p>
            <p className='pStyle'>Services</p>
            <p className='pStyle'>Contact</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='h5'>Business</h5>
            <p className='pStyle'>Project</p>
            <p className='pStyle'>Our Team</p>
            <p className='pStyle'>Facts</p>
            <p className='pStyle'>Customers</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='h5'>Get In Touch</h5>
            <p className='pStyle'>Home</p>
            <p className='pStyle'>About</p>
            <p className='pStyle'>Services</p>
            <p className='pStyle'>Contact</p>
        </div>
      </div>
      <div className='text-center'>
        <p className='noMargin text-light mt-3 fw-bold'>Copyright © 2024 AI GATE | Powrered by AI GATE</p>
      </div>
        </div>
    </div>
  )
}
