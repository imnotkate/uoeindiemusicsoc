import React from 'react';
import { Link } from 'react-router-dom';

function CardIR(props) {
  return (
    <>
      <li className='cards__newitem'>
      <div className='cards__newitem__ad'>
        <span className='cards__newitem__author'>{props.author}</span>
        <span className='cards__newitem__date'>{props.date}</span>
      </div>
        <Link className='cards__newitem__link' to={props.path}>
          <figure className='cards__newitem__pic-wrap' data-category={props.label}>
            <img
              className='cards__newitem__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__newitem__info'>
            <h5 className='cards__newitem__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardIR;