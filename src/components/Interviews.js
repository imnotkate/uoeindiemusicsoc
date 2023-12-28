import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import first from '../images/1img1.jpg'
import second from '../images/1img2.jpg'
import third from '../images/1img3.jpg'
import fourth from '../images/1img4.jpg'


function Interviews() {
  return (
      <div className='interviews__container'>
        <h1>Interviews</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={first}
              text='Woke Up and Asked Armand Hammer a Few Questions: An Interview'
              label='Interview'
              path='/events'
            />
            <CardItem
              src={second}
              text='...To Be Recognised: An Interview with Kara Jackson'
              label='Interview'
              path='/events'
            />
            <CardItem
              src={third}
              text="You Are Burning Me Up Like This: An Interview with Death's Dynamic Shroud"
              label='Interview'
              path='/events'
            />
            <CardItem
              src={fourth}
              text="If John Dwyer Had His Way: An Interview with Osees's Frontman"
              label='Interview'
              path='/events'
            />
          </ul>
        </div>
      </div>
  );
}

export default Interviews;