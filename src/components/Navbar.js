import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
    return (
<div className="alone">
      <div className="middle"> 
        <h1>Alone World</h1>
      </div>
      <div className="rightside">
        <div className="link">
          <Link to="/">Homepage</Link>
        </div>
        <div className="link">
          <Link to="/search">Search</Link>
        </div>
        <div className="link">
          <Link to="/about">About us</Link>
        </div>
        <div className="link">
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </div>



    );
};

export default About;
