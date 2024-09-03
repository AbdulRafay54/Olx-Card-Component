

import React from 'react';
import '../App.css';  

const OlxCard = ({ image, title, price, location }) => {
  return (
    <div className="olx-card">
      <img src={image} alt={title} className="olx-card-image" />
      <div className="olx-card-details">
        <h3 className="olx-card-title">{title}</h3>
        <p className="olx-card-price">{price}</p>
        <p className="olx-card-location">{location}</p>
      </div>
    </div>
  );
};

export default OlxCard;
