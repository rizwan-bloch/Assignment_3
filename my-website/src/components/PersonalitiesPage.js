// PersonalitiesPage.js
import React from 'react';
import './PersonalitiesPage.css'; // Create PersonalitiesPage.css for styling
import Navbar from './Navbar';
function PersonalitiesPage() {
  return (
    <div>
<Navbar />

    <div className="personalities">
    <h1>Favorite Personalities</h1>
    <div className=" personality">
      <img src="rizubhai.jpg" alt="Personality 1" />
      <div className="personality-info">
        <h2>Personality 1</h2>
        <p>Introduction about Personality 1.</p>
      </div>
    </div>
    <div className="personality">
      <img src="rizubhai.jpg" alt="Personality 2" />
      <div className="personality-info">
        <h2>Personality 2</h2>
        <p>Introduction about Personality 2.</p>
      </div>
    </div>
    {/* Add more personalities */}
  </div>
    </div>
  )
}

export default PersonalitiesPage
