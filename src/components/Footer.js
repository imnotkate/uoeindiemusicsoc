import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div id='contact-us'>
    <div className='footer-container'>
      <section className='footer-email'>
        <p className='footer-email-heading'>
          Contact Us
        </p>
        <a href='mailto:edinburghindiemusicsoc@gmail.com' className='footer-email-text'>
         edinburghindiemusicsoc@gmail.com
        </a>    
            <Button buttonStyle='btn--outline'>GET YOUR MEMBERSHIP</Button>
            <a href='https://www.linkedin.com/in/kate-rankin-8025b325b/'><p className='footer-coder-text'>
         Website by Kate Rankin
        </p></a>
      </section>
       
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>University of Edinburgh Independent Music Society © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100088971404648'
              target='https://www.facebook.com/profile.php?id=100088971404648'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/uoeindiemusicsoc/'
              target='https://www.instagram.com/uoeindiemusicsoc/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link tik tok'
              to='https://www.tiktok.com/@uoeindiemusicsoc'
              target='https://www.tiktok.com/@uoeindiemusicsoc'
              aria-label='Tiktok'
            >
              <i class='fab fa-tiktok' />
            </Link>
            <Link
              class='social-icon-link x'
              to='https://twitter.com/uoeindiemusic'
              target='https://twitter.com/uoeindiemusic'
              aria-label='X'
            >
              <i class='fab fa-x' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}


export default Footer;