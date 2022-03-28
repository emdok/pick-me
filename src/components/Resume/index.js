import React from "react";
import { FaDownload } from "react-icons/fa";
import myResume from '../../assets/EmilyDokken-Resume.pdf'

function Resume() {
  const downloadFile = () => {
    window.open(myResume)
  }
  return (
    <div className="resume">
      <h1>Proficiences</h1>
      <div className="prof-list">
        <ul>
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        <ul>
          <li>Express</li>
          <li>MySQL</li>
          <li>HTML/CSS</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <button type="submit" onClick={downloadFile}>
        <FaDownload className="resume-icon"></FaDownload>Resume
      </button>
    </div>
  );
}

export default Resume;
