import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow  } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
         <a href='https://github.com/emdok' rel="noreferrer" target="_blank"><FaGithub className="icons"/></a>
        </li>
        <li>
         <a href='https://www.linkedin.com/in/emdok/' rel="noreferrer" target="_blank"><FaLinkedinIn className="icons"/></a>
        </li>
        <li>
         <a href='https://stackoverflow.com/users/17066131/nokkemded' rel="noreferrer" target="_blank"><FaStackOverflow className="icons"/></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;

