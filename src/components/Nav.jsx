import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container relative'>
        <a href='/'>
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <div className='lg:hidden '>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className='cursor-pointer'
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <ul className='absolute top-full  left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg divide-y-2 divide-stone-50'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='block px-4 py-2 text-slate-gray hover:bg-red-50 hover:font-medium hover:text-red-500 '
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray rounded-lg p-2 hover:bg-red-50 hover:font-medium hover:text-red-500'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
