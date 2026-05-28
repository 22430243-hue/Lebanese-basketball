import React from 'react';
import '../styles/Aboutus.css';
import teamPhoto from '../Img/Team.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Lebanese Basketball League! We are more than just a team —
        we are a family united by passion, discipline, and the love of the game.
      </p>
      <p>
        Our mission is to inspire the next generation of athletes, promote
        sportsmanship, and bring communities together through basketball. With
        every game, we strive to showcase the strength, resilience, and spirit
        of Lebanon.
      </p>
      <p>
        Whether on the court or off, we believe in teamwork, dedication, and
        pushing beyond limits. Join us in celebrating the journey of Lebanese
        basketball — one team, one dream!
      </p>
      <img src={teamPhoto} alt="Lebanese Basketball Team" className="team-photo" />
    </div>
  );
};

export default AboutUs;
