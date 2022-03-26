import React from 'react';
import Nav from '../Navigation/index';
import 'font-awesome/css/font-awesome.min.css'

function Header() {
  return (
    <header>
      <h1 className="site-title">Emily Dokken</h1>
      <Nav></Nav>
    </header>
  )
}

export default Header;