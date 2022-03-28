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
              onclick={() => setCurrentPage(props.pages[0])}
              >About
            </a>
          </li>
          <li>            
            <a 
              href='#portfolio'
              onclick={() => setCurrentPage(props.pages[1])}
              >Portfolio
            </a>
          </li>
          <li>            
            <a 
              href='#contact'
              onclick={() => setCurrentPage(props.pages[2])}
              >Contact
            </a>
          </li>
          <li>            
            <a 
              href='#about'
              onclick={() => setCurrentPage(props.pages[3])}
              >Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
