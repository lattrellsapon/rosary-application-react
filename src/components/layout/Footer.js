import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='text-center'>
      <h3>
        Website by{' '}
        <a
          href='https://www.treezywebdesign.com/'
          target='_blank'
          className='treezy'
        >
          Treezy Web Design.
        </a>
      </h3>
    </footer>
  );
}
