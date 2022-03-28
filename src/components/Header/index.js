import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
console.log(props.pages[0]);
  return (
    <header>
      <h1 className="site-title">Emily Dokken</h1>
      <nav>
        <ul>
          <li>
            <a
              href='#about'
              onClick={() => setCurrentPage(props.pages[0])}
              className={`${currentPage === 'About' && 'navActive'}`}
              >About
            </a>
          </li>
          <li>            
            <a 
              href='#portfolio'
              onClick={() => setCurrentPage(props.pages[1])}
              className={`${currentPage === 'Portfolio' && 'navActive'}`}
              >Portfolio
            </a>
          </li>
          <li>            
            <a 
              href='#contact'
              onClick={() => setCurrentPage(props.pages[2])}
              className={`${currentPage === 'Contact' && 'navActive'}`}
              >Contact
            </a>
          </li>
          <li>            
            <a 
              href='#resume'
              onClick={() => setCurrentPage(props.pages[3])}
              className={`${currentPage === 'Resume' && 'navActive'}`}
              >Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
