import { useState } from 'react';
import { hamburger } from "../assets/icons"; // Ensure this is a valid icon
import { headerLogo } from "../assets/images"; // Ensure this is a valid logo image
import { navLinks } from "../constants"; // Ensure this contains your navigation links

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <div className='max-container'>
        <nav className='flex justify-between items-center'>
          <div className='logo-container'>
            <a href='/'>
              <img
                src={headerLogo}
                alt='logo'
                width={129}
                height={29}
                className='m-0 w-[129px] h-[100px]'
                style={{ backgroundColor: 'transparent', display: 'block' }} // Ensure transparency
              />
            </a>
          </div>
          <div className='nav-links-container hidden md:flex w-1/2 ml-auto'>
            <ul className='flex justify-center items-center gap-16'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='hamburger-container md:hidden'>
            <img
              src={hamburger}
              alt='hamburger icon'
              width={25}
              height={25}
              onClick={toggleMenu}
              className='cursor-pointer'
            />
          </div>
        </nav>
        {/* Fullscreen menu for smaller screens */}
        {isMenuOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center'>
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 text-2xl font-bold'
            >
              &times; {/* This represents a close (X) button */}
            </button>
            <ul className='text-center'>
              {navLinks.map((item) => (
                <li key={item.label} className='mb-4'>
                  <a
                    href={item.href}
                    className='font-montserrat text-2xl text-slate-gray'
                    onClick={toggleMenu} // Close menu when link is clicked
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
