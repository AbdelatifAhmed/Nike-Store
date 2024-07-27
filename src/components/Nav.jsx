import  { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger, moon, sun } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')

    }
  },[theme])

  const handelChangeTheme = () =>{
    setTheme(theme === 'dark' ? "light" : 'dark')
  }

  return (
    <header className={`padding-x py-6 fixed z-50 w-full transition duration-500 ${scrolled ? 'glass-effect' : ''}`}>
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
            className='cursor-pointer dark:bg-white p-1 rounded-lg'
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <ul className='absolute top-full  left-0 mt-2 w-full bg-white dark:bg-slate-900 dark:divide-slate-500
             dark:text-slate-50 border border-gray-200 rounded-lg shadow-lg divide-y-2 divide-stone-50'>
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
              <li className='flex gap-3 px-4  py-2 text-slate-gray'>
                <span>Switch Theme : </span>
                <span onClick={handelChangeTheme} className=' cursor-pointer' >
                  <img src={sun} alt="" width={24} height={24} className={`${theme === 'dark' ? '' : 'hidden'} `}/>
                  <img src={moon} alt="" width={24} height={24} className={`${theme === 'dark' ? 'hidden' : ''}`} />
                </span>
              </li>
            </ul>
          )}
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg  ${scrolled ? 'text-black' : 'text-slate-gray'} rounded-lg p-2 dark:text-slate-50 dark:hover:text-black hover:bg-red-50 hover:font-medium hover:text-red-500`}              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handelChangeTheme} className='flex cursor-pointer max-lg:hidden' >
        <img src={sun} alt="" width={28} height={28} className={`${theme === 'dark' ? '' : 'hidden'}`}/>
        <img src={moon} alt="" width={28} height={28} className={`${theme === 'dark' ? 'hidden' : ''}`} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
