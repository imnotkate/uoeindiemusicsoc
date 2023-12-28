import React from 'react';
import '../App.css'
import Banner from '../components/Banner'
import Events from '../components/Events'
import Interviews from '../components/Interviews'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer';
import About from '../components/About'

function Home() {
    return (
        <>
        <Banner />
        <About />
        <Events />
        <Interviews />
        <Reviews />
        <Footer />
        </>
    );
}

export default Home;