import React from 'react'
import { Link } from 'react-router-dom';
import  '../styles/Welcome.css'

 const Welcome = () => {
    return (
        <div className="overlay">
              <section class="hero">
    <div class="overlay">
      <h2>Join Our Enthusiasm!</h2>
      <p class="slogan">One Team, One Dream!</p>
      <Link to="/AboutUs">
            <button className="aboutButton">About Us</button>
            </Link>
    </div>
  </section>
        </div>
    );
 }

 export default Welcome;