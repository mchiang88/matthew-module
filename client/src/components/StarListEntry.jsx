import React from 'react';
import '../css/StarListEntry.css'

const StarListEntry = props => (
  <div onClick={props.handleRateClick} id={props.id}>
    <li className="starListEntry">
      <div className="starRating">{props.id} STARS</div>
      <div className="starPercentage">
        <div className="filled" style={{width: `${(props.count/props.length * 100)}%`}}></div>
      </div>
      <div className="starCount">{props.count}</div>
    </li>
  </div>
);

export default StarListEntry;