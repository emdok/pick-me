import React from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow  } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
         <FaGithub className="icons"/>
        </li>
        <li>
         <FaLinkedinIn className="icons"/>
        </li>
        <li>
         <FaStackOverflow className="icons"/>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;

