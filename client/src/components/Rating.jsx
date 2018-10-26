import React from 'react';
import StarListEntry from './StarListEntry';

const Rating = props => (
  <div>
    <h5 id="breakdown">RATING BREAKDOWN</h5>
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
