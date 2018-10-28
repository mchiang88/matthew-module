import React from 'react';

const StarListEntry = props => (
  <li className="starListEntry">
    <div className="starRating"><a href="">5 STARS</a></div>
    <div className="starPercentage">
      <div className="filled"></div>
    </div>
    <div className="starCount">35</div>
  </li>
);

export default StarListEntry;