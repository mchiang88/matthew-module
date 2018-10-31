import React from 'react';
import '../css/OverallRating.css';
import Star from './Star';

const OverallRating = props => (
  <div className="overallRating">
    <div className="ratingNumber">4.9</div>
    <div className="container2">
      <div className="ratingStars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <span className="reviewNumber">
        <strong>38</strong> Reviews
      </span>
    </div>
  </div>
);

export default OverallRating;
