import React from 'react';
import './other.css';
import CardItem from './CardItemNew';
import billy from '../images/billywoods.jpg'
import club from '../images/mondayclub.jpg'

function EventsEtc() {
  return (
      <div className='events__container'>
        <h1>Events</h1>
        <p>Upcoming society events.</p>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            <CardItem
              src={billy}
              text='Billy Woods @ Summerhall'
              label='Event'
              path='https://tickets.summerhall.co.uk/event/26:5902/26:88283/'
            />
            <CardItem
              src={club}
              text='Monday Club'
              label='Event'
              path='/events'
            />
          </ul>
        </div>
      </div>
  );
}

export default EventsEtc;