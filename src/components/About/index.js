import React from 'react';

// About Component
function About() {
  return (
    <section className='About page-fade'>
      <div className='about-image'>
      <img src={require(`../../assets/img/EmilyDokkenAbout.jpg`)} alt=''></img>
      </div>
      <div className='about-text'>
        <h2>Fullstack Web Developer | Senior QA Engineer</h2>
        <p>
         Emily is a Senior QA Engineer turned fullstack web developer leveraging ability to critically problem solve and locate issues within code to build better products for an intuitive user experience. She recently graduated from the University of Oregon's Full Stack Javascript Web Development Bootcamp and is currently searching for a Full Stack or Frontend Development position. As a QA Engineer she has been exposed to Agile processes, worked in large development teams for Enterprise software companies, and has spent numerous hours debugging software with developers.
        </p>
      </div>
    </section>
  )
}

export default About;