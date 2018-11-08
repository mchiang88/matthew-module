import React from 'react';
import Comment from './Comment';
import styles from '../css/Sort.css';
import Arrow from './Arrow';

const Sort = props => (
  <div className={styles.sort}>
    <div className={styles.Header}>
      <div className={styles.sortOn}>SORT ON</div>
      <div className={styles.buttons}>
        <div
          onClick={props.handleClick}
          id={props.view === 'relevant' ? styles.active : null}
          className={styles.relevant}
        >
          RELEVANT
        </div>
        <div
          onClick={props.handleClick}
          id={props.view === 'helpfulButton' ? styles.active : null}
          className={styles.helpfulButton}
        >
          HELPFUL
        </div>
        <div
          onClick={props.handleClick}
          id={props.view === 'newest' ? styles.active : null}
          className={styles.newest}
        >
          NEWEST
        </div>
      </div>
    </div>
    {props.comments.map((comment, i) => (
      <Comment ratingToStarTranslation={props.ratingToStarTranslation} comment={comment} key={i} />
    ))}
    <div className={styles.loadAndWrite}>
      <button onClick={props.handleLoadClick} type="button" className={styles.load}>
        LOAD MORE
        <Arrow />
      </button>
      <button type="button" className={styles.write}>
        WRITE A REVIEW
        <Arrow />
      </button>
    </div>
  </div>
);

export default Sort;
