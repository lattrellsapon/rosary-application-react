import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='text-center'>
      <h3>
        Website by{' '}
        <Link to='https://www.treezywebdesign.com/' className='treezy'>Treezy Web Design.
        </Link>
      </h3>
    </footer>
  );
}
