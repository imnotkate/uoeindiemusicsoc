import React from 'react';
import { Link } from 'react-router-dom';

function CardItemNew(props) {
  return (
    <>
      <li className='cards__newitem'>
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

export default CardItemNew;