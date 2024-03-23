import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='w-full bg-primary'>
      <div className="container mx-auto h-full flex items-center flex-col">
        <div className="w-full"></div>
        <div className="w-full flex items-center ">
          <Navbar containerStyle={'w-full py-2'} />
        </div>
      </div>
    </header>
  )
}

export default Header
