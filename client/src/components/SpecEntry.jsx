import React from 'react';
import styles from '../css/SpecEntry.css';

const SpecEntry = props => (
  <div className={styles.specEntry}>
    <div className={styles.specName}>{props.id}</div>
    <div className={styles.comparisonbar}>
      <div className={styles.barIndicator} style={{ left: `${props.bar}%` }} />
      <div className={`${styles.steps} ${styles.s1}`} />
      <div className={`${styles.steps} ${styles.s2}`} />
      <div className={`${styles.steps} ${styles.s3}`} />
    </div>
    <div className={styles.comparisonBarLabel}>
      <div className={styles.attribute1}>{props.attribute1}</div>
      <div className={styles.attribute2}>{props.attribute2 === 'null' ? '' : props.attribute2}</div>
      <div className={styles.attribute3}>{props.attribute3}</div>
    </div>
  </div>
);

export default SpecEntry;
