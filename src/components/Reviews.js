import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import { Link } from 'react-router-dom';

function Reviews() {
  return (
      <div className='reviews__container'>
        <h1>Reviews</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Our 50 Best Singles of 2023'
              label='Review'
              path='/events'
            />
            <CardItem
              src={img2}
              text='Our 100 Best Albums of the 2010s'
              label='Review'
              path='/events'
            />
            <CardItem
              src={img3}
              text='Our Review of Connect Festival 2023'
              label='Review'
              path='/events'
            />
            <CardItem
              src={img4}
              text="Album Review: 'Disposable Everything' - AJJ"
              label='Review'
              path='/events'
            />
          </ul>
        </div>
        <Link to='/reviews' className='btn-plz'><button className='btn-grad'>See more</button></Link>
      </div>
  );
}

export default Reviews;