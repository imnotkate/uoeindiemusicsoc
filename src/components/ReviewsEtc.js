import React from 'react';
import './other.css';
import CardIR from './CardIR';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import ri from '../images/ri.jpg'
import rii from '../images/rii.jpg'
import riii from '../images/riii.jpg'


function ReviewsEtc() {
  return (
      <div className='reviews__container'>
        <h1>Reviews</h1>
        <p>Reviews from the committee.</p>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            <CardIR
              src={img1}
              text='Our 50 Best Singles of 2023'
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='Dec 12, 2023'
            />
            <CardIR
              src={img2}
              text='Our 100 Best Albums of the 2010s'
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='Sep 20, 2023'
            />
            </ul>
            </div>
            <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            <CardIR
              src={img3}
              text='Our Review of Connect Festival 2023'
              label='Review'
              path='/reviews'
              author='Most of the Committee'
              date='Sep 10, 2023'
            />
            <CardIR
              src={img4}
              text="Album Review: 'Disposable Everything' - AJJ"
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='May 27, 2023'
            />
          </ul>
        </div>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            <CardIR
              src={ri}
              text="Reviews: 'Ignore Grief' Xiu Xiu, 'UGLY' Slowthai, 'Red Moon in Venus' Kali Uchis"
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='Mar 4, 2023'
            />
            <CardIR
              src={rii}
              text="Indie Soc's Top 20 Albums of 2022"
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='Dec 20, 2022'
            />
          </ul>
        </div>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            <CardIR
              src={riii}
              text="Indie Soc's Top 30 Singles of 2022"
              label='Review'
              path='/reviews'
              author='Lachlan Kiddie'
              date='Dec 9, 2022'
            />
          </ul>
        </div>
      </div>
  );
}

export default ReviewsEtc;