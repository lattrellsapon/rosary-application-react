import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='flex-container text-center'>
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
            <li>
              <Link to='/' className='link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='link'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
