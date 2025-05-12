import React from 'react';
import './App.css';

function ThingsToRead() {
  return (
    <div className="page-container">
      <h1 className="main-heading">Anushka's Travel & Food Adventures</h1>

      <p className="intro-paragraph">
      When I'm not working, I enjoy focusing on personal growth through fitness, travel, and cooking. These activities help me relax and give me the chance to invest more time in myself. I've been grateful to explore them more this year. 
      Below are a few photos I've taken along the way.
      </p>

      <h2 className="section-heading travel-heading">🌍 Traveling: Exploring countries</h2>
      <img src="/travel.jpg" alt="Miami, Florida" className="image" />
      <p>Image Discription: Flying over Miami, Florida during Spring Break </p>

      <h2 className="section-heading food-heading">👩‍🍳 Cooking: Various Cuisines</h2>
      <img src="/cooking.jpg" alt="Cooking dishes" className="image" />
      <p>Image Discription: Made Chicken Biryani with Raita during the summer </p>


      <h2 className="section-heading treat-heading">🏋️‍♀️ Working Out: Weightlifting</h2>
      <img src="/workingout.jpg" alt="Weightlifting" className="image" />
      <p>Image Discription: Leg day, in the middle of hip thrusts</p>

    </div>
  );
}

export default ThingsToRead;
