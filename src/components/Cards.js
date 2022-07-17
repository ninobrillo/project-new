import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img-10.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img8 from '../images/img-8.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>SERVICES OFFERED</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Interior Design'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Consultation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Construction'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Project Management'
              path='/services'
            />
            <CardItem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Arts & Events'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
