import React from 'react'
import '../App.css'
import './About.css'
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className='about-container'>
    <h1>About Us</h1>
    <p>We are an easygoing society for lovers of all types of music. Our main purpose is running live music events at venues across the city in order to inject life into the Edinburgh music scene and to change "indie" music to be more inclusive and accessible. </p>
    <Link to='/about' className='btn-plz'><button className='btn-grad'>Find out more</button></Link>
     </div>
  )
}

export default About