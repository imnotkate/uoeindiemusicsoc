import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
    const [click, setClick] = useState(false);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on route change
      }, [location.pathname]); // Re-run the effect when the URL changes


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    
    const scrollDown = () => {
        const footer = document.getElementById('contact-us'); // Get the footer element by ID
        footer.scrollIntoView({ }); // Scroll to the footer with smooth behavior
      };

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            
            <a className="logo_image" href="/uoeindiemusicsoc"  onClick={closeMobileMenu}> </a>

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/events' className='nav-links' onClick={closeMobileMenu}>Events</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/interviews' className='nav-links' onClick={closeMobileMenu}>Interviews</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>Reviews</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={(e) => {
              e.preventDefault(); // Prevent the default behavior of the link
              if (location.pathname === '/') {
                scrollDown(); // Scroll to footer if on the home page
              } else {
                // If on other pages, append the hash to the URL to scroll to the footer
                window.location.hash = '#contact-us';
              }
              closeMobileMenu();
            }}>Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar