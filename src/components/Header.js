import { useEffect, useRef } from 'react';

const Header = () => {
  const navRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    toggleNav();
  }, []);

  const toggleNav = () => {
    menuRef.current.classList.toggle('hide');
    navRef.current.classList.toggle('show-nav');
  };

  return (
    <header className='navbar'>
      <nav className='container nav-items'>
        <div className='brand'>
          <p className='logo'>The Brand</p>
        </div>
        <div className='nav-links'>
          <div className='menu hide' ref={menuRef}>
            <button onClick={toggleNav}>Menu</button>
          </div>
          <ul className='links show-nav' ref={navRef}>
            <div className='close'>
              <button onClick={toggleNav}>X</button>
            </div>
            <li className='link-wrapper'>
              <a href='#' className='link'>
                Home
              </a>
            </li>
            <li className='link-wrapper'>
              <a href='#' className='link'>
                About
              </a>
            </li>
            <li className='link-wrapper'>
              <a href='#' className='link'>
                Projects
              </a>
            </li>
            <li className='link-wrapper'>
              <a href='#' className='link'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
