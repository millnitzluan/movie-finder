import React from 'react';
import logo from '../../assets/logos/logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={logo} className="logo" alt="Application logo" />
    </header>
  );
}

export default Header;
