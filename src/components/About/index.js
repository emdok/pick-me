import React from 'react';

function About() {
  return (
    <section className='About'>
      <div className='about-image'>
      <img src={require(`../../assets/img/EmilyDokkenAbout.jpg`)} alt=''></img>
      </div>
      <div className='about-text'>
        <h2>Fullstack Web Developer | Senior QA Engineer</h2>
        <p>
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.

          Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </p>
      </div>
    </section>
  )
}

export default About;