import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import billy from '../images/billywoods.jpg'
import club from '../images/mondayclub.jpg'

function Events() {
  return (
      <div className='events__container'>
        <h1>Events</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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

export default Events;