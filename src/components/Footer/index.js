import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow  } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
         <a href='https://github.com/emdok'><FaGithub className="icons"/></a>
        </li>
        <li>
         <a href='https://www.linkedin.com/in/emdok/'><FaLinkedinIn className="icons"/></a>
        </li>
        <li>
         <a href='https://stackoverflow.com/users/17066131/nokkemded'><FaStackOverflow className="icons"/></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;

