import React from 'react';
import StarListEntry from './StarListEntry';
import styles from '../css/Rating.css';

const Rating = props => {

  const filterStatus = (
      <div className={styles.filterStatus}>
        Showing reviews:{' '}
        <ul className={styles.filterList}>
          {props.filters.map((star, i) => (
            <li className={styles.filterListItem} key={i}>{star} STARS</li>
          ))}
        </ul>
        <a className={styles.removeFilter} onClick={props.handleRemoveFilterClick}>Remove all filters</a>
      </div>
    );

  // const calculateStars = num => {
  //   let count = 0;
  //   props.data.forEach(comment => {
  //     if (comment.prodRating === num) {
  //       count += 1;
  //     }
  //   });
  //   return count;
  // }

  return (
    <div className={styles.ratingM}>
      <h5 id={styles.breakdown}>Rating Breakdown</h5>
      {props.filters.length > 0 ? filterStatus : ''}
      <ul className={styles.listOfStars}>
        <StarListEntry
          id={5}
          handleRateClick={props.handleRateClick}
          length={props.data.numRatings}
          count={props.data.num5star}
        />
        <StarListEntry
          id={4}
          handleRateClick={props.handleRateClick}
          length={props.data.numRatings}
          count={props.data.num4star}
        />
        <StarListEntry
          id={3}
          handleRateClick={props.handleRateClick}
          length={props.data.numRatings}
          count={props.data.num3star}
        />
        <StarListEntry
          id={2}
          handleRateClick={props.handleRateClick}
          length={props.data.numRatings}
          count={props.data.num2star}
        />
        <StarListEntry
          id={1}
          handleRateClick={props.handleRateClick}
          length={props.data.numRatings}
          count={props.data.num1star}
        />
      </ul>
    </div>
  );
}

export default Rating;
