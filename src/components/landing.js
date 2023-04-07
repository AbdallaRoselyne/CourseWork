import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/search');
      };
  return (
    <div>
    <div className="background">
      <div className="backgroundtext">
        <p>Discover Cities All Over The World</p>
      </div>
      <div className="button_div">
      <button type="button" onClick={handleClick}>Get started...</button>
    </div>
    </div>
    <div className="fin">
    <div className="key">
      <p>
        Welcome to Alone Word. Explore countries and their capital cities. If you have any inquiries,{' '}
        <Link to="/contact">Contact us</Link>.
      </p>
    </div>
    </div>  
    <footer>
      <div className="don"> 
        <p>© 2023 Alone World.com All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
};

export default Landing;
