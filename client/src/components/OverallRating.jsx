import React from 'react';
import '../css/OverallRating.css';

const OverallRating = props => (
  <div className="overallRating">
    <div className="ratingNumber">4.9</div>
    <div className="container2">
      <div className="ratingStars">*****</div>
      <span className="reviewNumber">
        <strong>38</strong> Reviews
      </span>
    </div>
  </div>
);

export default OverallRating;
