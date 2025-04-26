import React, { useState } from 'react';
import './App.css';

function Home() {
  const [hobbies, setHobbies] = useState([
    'Reading',
    'Cooking/Baking',
    'Painting',
    'Traveling',
    'Weightlifting',
    'Hiking',
    'Shopping'
  ]);

  const [isHobbyListSorted, setIsHobbyListSorted] = useState(false);

  const toggleHobbyListSort = () => {
    const newOrder = [...hobbies];
    newOrder.sort();
    if (isHobbyListSorted) newOrder.reverse();
    setHobbies(newOrder);
    setIsHobbyListSorted(!isHobbyListSorted);
  };

  const buttonText = isHobbyListSorted ? 'Unsort List' : 'Sort List Alphabetically';

  return (
    <div>
      <header>
        <h1>Welcome to Anushka's Homepage!</h1>
        <p>Hello, CSS480!</p>
        <img 
          src="/lil.jpg" 
          alt="Anushka's Profile" 
          className="profile-image" 
        />
      </header>

      <section className="intro">
        <h2>About Me</h2>
        <p>
        Hi! I’m currently a senior at the University of Washington, majoring in Computer Science with a focus on Software Engineering. 
        I’ve lived in Seattle, WA my whole life, but I love traveling and exploring food from different cultures.
        </p>
      </section>

      <section className="hobbies">
        <h2>My Hobbies: </h2>
        <ul>
          {hobbies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={toggleHobbyListSort} tabIndex="0">
          {buttonText}
        </button>
      </section>
    </div>
  );
}

export default Home;
