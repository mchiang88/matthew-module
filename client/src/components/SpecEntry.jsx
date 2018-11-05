import React from 'react';
import '../css/SpecEntry.css';

const SpecEntry = props => (
  <div className="specEntry">
    <div className="specName">{props.id}</div>
    <div className="comparisonbar">
      <div className="barIndicator" style={{ left: `${props.bar}%` }} />
      <div className="steps s1" />
      <div className="steps s2" />
      <div className="steps s3" />
    </div>
    <div className="comparisonBarLabel">
      <div className="attribute1">{props.attribute1}</div>
      <div className="attribute2">{props.attribute2 === 'null' ? '' : props.attribute2}</div>
      <div className="attribute3">{props.attribute3}</div>
    </div>
  </div>
);

export default SpecEntry;
