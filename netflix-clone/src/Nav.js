
import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const transitionNavBar = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav__logo">HEeeeh</h1>
      
    </div>
  );
}

export default Nav;