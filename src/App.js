import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Events from './pages/Events';
import Interviews from './pages/Interviews';
import Reviews from './pages/Reviews';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element= {<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/events' exact element={<Events/>} />
        <Route path='/interviews' exact element={<Interviews/>} />
        <Route path='/Reviews' exact element={<Reviews/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;