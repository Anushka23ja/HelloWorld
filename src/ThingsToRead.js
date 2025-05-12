import React from 'react';
import './App.css';

function ThingsToRead() {
  const links = [
    { title: "Harry Potter", url: "https://www.amazon.com/Harry-Potter-Paperback-Box-Books/dp/0545162076/" },
    { title: "Why Has Nobody Told Me This Before?", url: "https://www.amazon.com/Why-Nobody-Told-This-Before/dp/0063227932/" },
    { title: "People We Meet on Vacation", url: "https://www.amazon.com/People-Meet-Vacation-Emily-Henry/dp/1984806750/" },
    { title: "The Psychology of Money", url: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681/" },
    { title: "Bhagavad Gita", url: "https://www.amazon.com/Bhagavad-Gita-Original-English-As/dp/B07MDTX8BR" },
    { title: "Atomic Habits", url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/" },
    { title: "Quit Like a Millionaire", url: "https://www.amazon.com/Quit-Like-Millionaire-Gimmicks-Required/dp/0525538690/" },
    { title: "A Good Girl's Guide to Murder", url: "https://www.amazon.com/Good-Girls-Guide-Murder-Boxed/dp/0593568478/" },
    { title: "Can't Hurt Me: Master Your Mind and Defy the Odds", url: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287/" },
    { title: "Act Like a Lady, Think Like a Man", url: "https://www.amazon.com/Like-Lady-Think-Expanded-Relationships/dp/0062351567/" }
  ];

  return (
    <div>
      <h1>Good Reads </h1>
      <img src="/read.jpg" alt="Weightlifting" className="accessibility-image" />
      <p>Reading is a great way to pass time while actively engaging your brain.
      Every year, many great books are published across a variety of genres, including self-help, biography, fiction, non-fiction, and more.
      </p>
      <p>Below are links to some of my favorite books:</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" tabIndex="0">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThingsToRead;
