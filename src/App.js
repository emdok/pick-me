import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {

  return (
    <div className="root-child">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
