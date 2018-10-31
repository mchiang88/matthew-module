import React from 'react';
import '../css/SpecEntry.css'

const SpecEntry = props => (
  <div className="specEntry">
    <div className="specName">Size</div>
    <div className="comparisonbar">
      <div className="barIndicator"></div>
      <div className="steps s1"></div>
      <div className="steps s2"></div>
      <div className="steps s3"></div>
    </div>
    <div className="comparisonBarLabel">
      <div className="attribute1">TOO SMALL</div>
      <div className="attribute2">PERFECT</div>
      <div className="attribute3">TOO LARGE</div>
    </div>
  </div>
)

export default SpecEntry;