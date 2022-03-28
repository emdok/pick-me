import React from "react";

// nav component used in header
function Nav(props) {
  // passed props to help in conditional render of each 'page'
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => setCurrentPage(pages[0])}
            className={`${currentPage === "About" && "navActive"}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => setCurrentPage(pages[1])}
            className={`${currentPage === "Portfolio" && "navActive"}`}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setCurrentPage(pages[2])}
            className={`${currentPage === "Contact" && "navActive"}`}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => setCurrentPage(pages[3])}
            className={`${currentPage === "Resume" && "navActive"}`}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
