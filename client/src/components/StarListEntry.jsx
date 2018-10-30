import React from 'react';

const StarListEntry = props => (
  <li className="starListEntry">
    <div className="starRating">5 STARS</div>
    <div className="starPercentage">
      <div className="filled"></div>
    </div>
    <div className="starCount">35</div>
  </li>
);

export default StarListEntry;