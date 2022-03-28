import React from "react";
import Nav from "../Nav";
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
      <Nav         
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
    </header>
  );
}

export default Header;
