import React from 'react'
import '../App.css'
import './About.css'
import {Link} from 'react-router-dom';
import gig from '../images/gig.jpg'

function About() {
  return (
    <div className='whit'>
    <img src={gig} className='gig'></img>
    <div className='aboutNew-container'>
    <h1>About Us</h1>
    <p>We are an easygoing society for lovers of all types of music. Our main purpose is running live music events at venues across the city, such as: Sneaky Pete's, The Caves, Mash House and many more. We also meet up every Monday at Southsider to have drinks and a chat, and you don't need to be a member to show up. We also have more exciting projects on the way for those who wish to play live music and network with fellow musicians!</p>
    <p>There are many events always running throughout the year including Monday Club, social nights, pub crawls, club nights, gig nights and musician meet-ups. Members get perks like discounted tickets to all of our events, as well as discounts at associated venues such as sneaky petes even if its not one of our events! All members receive a Sneaky Pete's discount card.</p>
    <Link to='https://www.eusa.ed.ac.uk/shop?activity_id=193' className='btn-plz'><button className='btn-grad'>Become a member</button></Link>
    <p>Our main aims are to inject life into the Edinburgh music scene and to change the zietgiest in independent music to be more inclusive and accessible, as we believe that good music is for everyone. </p>
    <Link to='https://www.eusa.ed.ac.uk/activities/view/indiemusicsoc' className='btn-plz'><button className='btn-grad'>Our EUSA page</button></Link>
    </div>
    </div>
  )
}

export default About