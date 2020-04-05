import React from 'react';
import rosary from '../../images/rosary.jpg';

export default function About() {
  return (
    <div className='about-container text-center'>
      <h3>About</h3>
      <div className='image-container'>
        <img src={rosary} alt='Holy Rosary' />
      </div>
      <p>
        This simple application was made for those people who wants to start
        praying the Rosary more often. In the beginning, the Rosary could be
        overwhelming for some people. People may find it hard to memorise the
        beautiful mysteries of the Rosary. Moreover, there are also some people
        who does not know the Our Father, Hail Mary, and Glory Be off by heart.
      </p>
      <p>
        If you are that someone who is struggling with praying the Rosary,
        hopefully this application can help make it easier for you to learn it.
        This application is user friendly and easy to use. What are you waiting
        for? Get to praying and learning!{' '}
      </p>
    </div>
  );
}
