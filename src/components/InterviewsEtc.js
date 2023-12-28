import React from 'react';
import './other.css';
import CardIR from './CardIR';
import i from '../images/i.jpg'
import ii from '../images/ii.jpg'
import iii from '../images/iii.jpg'
import iv from '../images/iv.jpg'
import v from '../images/v.jpg'
import vi from '../images/vi.jpg'
import first from '../images/1img1.jpg'
import second from '../images/1img2.jpg'
import third from '../images/1img3.jpg'
import fourth from '../images/1img4.jpg'

function InterviewsEtc() {
  return (
      <div className='interviews__container'>
         <h1>Interviews</h1>
         <p>Exclusive interviews for the society from an extensive range of worldwide artists.</p>
         <div className='cards__newwrapper'>
  <ul className='cards__newitems'>
      <CardIR
        src={first}
        text='Woke Up and Asked Armand Hammer a Few Questions: An Interview'
        label='Interview'
        path='/interviews'
        author='Lachlan Kiddie'
        date='Sep 13, 2023'
      />
      <CardIR
        src={second}
        text='...To Be Recognised: An Interview with Kara Jackson'
        label='Interview'
        path='/interviews'
        author='Lachlan Kiddie'
        date='Aug 8, 2023'
      />
  </ul>
</div>
<div className='cards__newwrapper'>
  <ul className='cards__newitems'>
  
      <CardIR
        src={third}
        text="You Are Burning Me Up Like This: An Interview with Death's Dynamic Shroud"
        label='Interview'
        path='/interviews'
        author='Lachlan Kiddie'
        date='Jul 25, 2023'
      />
      <CardIR
        src={fourth}
        text="If John Dwyer Had His Way: An Interview with Osees's Frontman"
        label='Interview'
        path='/interviews'
        author='Lachlan Kiddie'
        date='Jun 12, 2023'
      />
  </ul>
</div>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
            
            <CardIR
              src={i}
              text='Disposing of AJJ (Andrew Jackson Jihad): An Interview'
              label='Interview'
              path='/interviews'
              author='Lachlan Kiddie'
              date='Jun 12, 2023'
            />
            <CardIR
              src={ii}
              text='A tape called interview with the Open Mike Eagle'
              label='Interview'
              path='/interviews'
              author='Lachlan Kiddie'
              date='Feb 10, 2023'
            />
            </ul>
            </div>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
        
            <CardIR
              src={iii}
              text="An Interview with Mogwai's Stuart Braithwaite"
              label='Interview'
              path='/interviews'
              author='Cameron Bilsland'
              date='Jan 31, 2023'
            />
            <CardIR
              src={iv}
              text="The Boys with the Arab Strap: An Interview"
              label='Interview'
              path='/interviews'
              author='Lachlan Kiddie'
              date='Jan 23, 2023'
            />
          </ul>
        </div>
        <div className='cards__newwrapper'>
          <ul className='cards__newitems'>
        <CardIR
              src={v}
              text="'The Wrong Thing' Done Right: An Interview with Xiu Xiu's Jamie Stewart"
              label='Interview'
              path='/interviews'
              author='Lachlan Kiddie'
              date='Jan 9, 2023'
            />
            <CardIR
              src={vi}
              text="It's clipping. Bitch: An Interview"
              label='Interview'
              path='/interviews'
              author='Lachlan Kiddie'
              date='Nov 16, 2023'
            />
            </ul>
            </div>
      </div>
  );
}

export default InterviewsEtc;