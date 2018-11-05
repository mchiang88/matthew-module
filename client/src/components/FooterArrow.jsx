import React from 'react';
import '../css/FooterArrow.css';

const FooterArrow = props => (
  <svg viewBox="0 0 24 24" className="footerArrow" width="100%" height="100%">
    <path
      d="M17.59 7l5 5-5 5M0 12h22"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export default FooterArrow;