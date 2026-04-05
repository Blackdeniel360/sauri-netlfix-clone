
import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav({ onSearch, activeProfile, setActiveProfile, profiles }) {
  const [show, handleShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav__logo">Nutflix</h1>

      <div className="nav__searchContainer">
        <input
          className="nav__searchInput"
          type="text"
          placeholder="Titles, people, genres"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    <div className="nav__profileContainer">

        <img
          className="nav__avatar"
          src={activeProfile.img}
          alt="Profile icon"
        />
        
        <div className="nav__profileDropdown">
          <div className="nav__dropdownTriangle" />

          {profiles.map((p) => (
  <div key={p.id} className="nav__dropdownItem" onClick={() => setActiveProfile(p)}>
    <img src={p.img} alt="" className="nav__dropdownAvatar" />
    <p>{p.name}</p>
  </div>
))}
        </div>
      </div>
    </div>
  );
}

export default Nav;