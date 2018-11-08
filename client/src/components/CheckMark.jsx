import React from 'react';
import styles from '../css/CheckMark.css';

const CheckMark = props => (
  <svg viewBox="0 0 19 19" id={styles.checkmark} width="100%" height="100%">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokemmiterlimit="10"
      d="M2.5 10.5l4 4 10-10"
    />
  </svg>
);

export default CheckMark;
