import React from 'react';
import StarListEntry from './StarListEntry';
import '../css/Rating.css'

const Rating = props => (
  <div className="rating">
    <h5 id="breakdown">Rating Breakdown</h5>
    {/* if click, show "showing reviews: ..." so possibly change to class component for state */}
    <ul>
      <StarListEntry />
      <StarListEntry />
      <StarListEntry />
      <StarListEntry />
      <StarListEntry />
    </ul>
  </div>
);

export default Rating;
