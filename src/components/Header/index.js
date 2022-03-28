import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  return (
    <header>
      <h1 className="site-title">Emily Dokken</h1>
      <nav>
        <ul>
          <li>
            <a
              href='#about'
              onclick={() => setCurrentPage(pages)}
              >About
            </a>
          </li>
          <li>            
            <a 
              href='#portfolio'
              onclick={() => setCurrentPage(pages)}
              >Portfolio
            </a>
          </li>
          <li>            
            <a 
              href='#contact'
              onclick={() => setCurrentPage(pages)}
              >Contact
            </a>
          </li>
          <li>            
            <a 
              href='#about'
              onclick={() => setCurrentPage(pages)}
              >Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
