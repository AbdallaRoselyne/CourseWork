import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
       
        <div className="rationale">
          <h1>Alone World</h1>
          <p> Alone World assists people in making educated decisions about where they want to travel, live, work, or learn. With increased globalization and mobility, there is a greater demand for accurate and up-to-date knowledge about various parts of the globe. Alone World aims to fill this void by providing users with a wealth of information that they can use to compare and evaluate various alternatives. </p>
          <p> Alone World aims to provide users with a more complete picture of the economic and social realities of various locations by comparing the cost of living across different cities and countries. This can assist users in making more informed decisions about where they want to reside or work based on their budget, lifestyle, and personal preferences.</p>
        </div>
        <div className="author">
          <h1>About the Author</h1>
          <div className="mypic">
            <img src="pic.jpg" />
          </div>
          <p>My name is Roselyne Abdalla Osundwa, and I am a Kenyan with a strong interest in globalization and extensive travel experience. My personal experiences and exposure to various cultures motivated me to create a website that provides detailed information about cities and countries all over the world.</p>
          <p>I hope to provide users with a wealth of knowledge that they can use to compare and evaluate various options for travel, work, study, or living through Alone World. My background in travel, foreign business, <br /> economics, or related areas has influenced the design and content of this website. The objective and informative approach of the website aims to provide users with the information they need to make informed choices in a globalized world.</p>
        </div>
        <footer>
          <div className="don"> 
            <p>© 2023 Alone World.com All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }


export default About;
