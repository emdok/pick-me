import React, { useState } from "react";

// card component used on Portfolio page
function Card() {
  //array of project objects
  const [photos] = useState([
    {
      img: 'plantzzz.jpg',
      title: 'Plantzzz',
      deployed: 'https://plantzzz.herokuapp.com/',
      repo: 'https://github.com/emdok/Plantzzz ',
    },
    {
      img: 'streamView.jpg',
      title: 'StreamView',
      deployed: 'https://emdok.github.io/bang-imdb/',
      repo: 'https://github.com/emdok/bang-imdb',
    },
    {
      img: 'typin-tech.jpg',
      title: 'Typin Tech',
      deployed: 'https://mysterious-river-71927.herokuapp.com/',
      repo: 'https://github.com/emdok/typin-tech',
    },
    {
      img: 'weather-dashboard.jpg',
      title: 'Weather Dashboard',
      deployed: 'https://emdok.github.io/weather-dashboard/',
      repo: 'https://github.com/emdok/weather-dashboard',
    },
    {
      img: 'code-quiz.jpg',
      title: 'Code Quiz',
      deployed: 'https://github.com/emdok/time-based-code-quiz',
      repo: 'https://github.com/emdok/time-based-code-quiz',
    },
    {
      img: 'portfolio-v1.jpg',
      title: 'Portfolio V1',
      deployed: 'https://emdok.github.io/Portfolio-Website/',
      repo: 'https://github.com/emdok/Portfolio-Website',
    },
  ]);

  return (
    <>
    {photos.map((project) => (
    <div key={photos.img} className="Card">
      <img src={require(`../../assets/img/${project.img}`)} alt="Project"></img>
      <div className="card-info">
        <h3>{project.title}</h3>
        <a href={`${project.repo}`} rel="noreferrer" target="_blank">Repository</a>
        <a href={`${project.deployed}`} rel="noreferrer" target="_blank">Deployed Link</a>
      </div>
    </div>
    ))}
    </>
  )
}

export default Card;