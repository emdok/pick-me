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
        Senior QA Engineer turned fullstack web developer leveraging ability to critically problem solve and locate issues within code to build better products for an intuitive user experience.A recent graduate of the University of Oregon's Full Stack Javascript Web Development Bootcamp and on the hunt for a FullStack Web Development position.
        </p>
      </div>
    </section>
  )
}

export default About;