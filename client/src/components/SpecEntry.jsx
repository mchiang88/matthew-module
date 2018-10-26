import React from 'react';

const SpecEntry = props => (
  <div className="specEntry">
    <span className="specName">Size</span>
    <div className="progressBar">
      <div className="progressIndicator"></div>
    </div>
    <div>
      <span className="attribute">TOO SMALL</span>
      <span className="attribute">PERFECT</span>
      <span className="attribute">TOO LARGE</span>
    </div>
  </div>
)

export default SpecEntry;