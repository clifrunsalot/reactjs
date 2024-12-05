import React from 'react';
import ReactPlayer from 'react-player'; // react-player needs to be installed locally to use it
import '../styles/About.css';

/** Describe the About component */
function About() {

  const vidUrl = "https://www.youtube.com/watch?v=N5SSWumNAp8";

  return (
    <div>
      <h1 className="title center">About</h1>
      <p>This is a simple shopping list application.</p>
      <div className="player-wrapper">
        <ReactPlayer className="react-player"
          url={vidUrl}
          playing={false}
          volume={0.5}
          width="100%"
          height="100%" />
      </div>
    </div>
  )
}

export default About