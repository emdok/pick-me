import React from 'react';

// About Component
function About() {
  return (
    <section className='About'>
      <div className='about-image'>
      <img src={require(`../../assets/img/EmilyDokkenAbout.jpg`)} alt=''></img>
      </div>
      <div className='about-text'>
        <h2>Fullstack Web Developer | Senior QA Engineer</h2>
        <p>
          Emily is currently working as a Senior QA Engineer for Instrument LLC. She recently finished the University of Oregon's FullStack Javascript Web Development Bootcamp and is on the hunt for a FullStack Web Development position. As a QA Engineer she has been exposed to Agile processes, worked in large development teams for Enterprise software companies, and has spent numerous hours debugging software with developers. Emily is ready to turn the table and start building that software she has been testing for so long. 
        </p>
      </div>
    </section>
  )
}

export default About;