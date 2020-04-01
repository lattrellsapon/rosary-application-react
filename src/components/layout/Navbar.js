import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='flex-container'>
        <div className='flex-box'>
          <h1>Holy Rosary</h1>
        </div>

        <div className='text-center flex-box'>
          <p>
            "Abandon yourself in the hands of Mary. She will take care of you."
          </p>
          <p>- St. Padre Pio</p>
        </div>

        <div className='flex-box'>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
