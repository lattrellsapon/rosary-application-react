import React from 'react';
import rosary from '../../images/rosary.jpg';

export default function About() {
  return (
    <div className='about-container text-center'>
      <h3>About</h3>
      <div className='image-container'>
        <img src={rosary} alt='Holy Rosary' />
      </div>
      <p className='mtb-20px'>
        This simple application was created to assist those who want to pray the
        Rosary more often, or for those who simply want to start this beautiful
        devotion.
      </p>
      <p className='mtb-20px'>
        Initially, some may find the Rosary overwhelming due to the different
        prayers and mysteries involved. However, this application is user
        friendly and easy to use, therefore making it an ideal supplement for
        your Rosary journey.
      </p>
      <p className='mtb-20px'>Happy praying and learning!</p>
    </div>
  );
}
