import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

function App() {
  // states used to conditionally render each page
  const [pages] = useState([
    'About',
    'Portfolio',
    'Contact',
    'Resume',
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='root-child'>
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
          {currentPage === 'About' && <About></About>}
          {currentPage === 'Portfolio' && <Portfolio></Portfolio>}
          {currentPage === 'Contact' && <Contact></Contact> }
          {currentPage === 'Resume' && <Resume></Resume> }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
