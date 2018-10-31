import React from 'react';
import '../css/OverallRating.css';
import Star from './Star';

const OverallRating = props => {

  const ratingToStarTranslation = rating => {
    let arr = Array(5).fill('0%');
    let decimal = 1 - (Math.ceil(rating) - rating).toFixed(1);
    for (let i = 0; i < Math.ceil(rating); i++) {
      if (i === Math.ceil(rating) - 1) {
        arr[i] = (decimal * 100).toString() + "%";
      } else {
        arr[i] = "100%";
      }
    }
    return arr;
  };

  console.log(ratingToStarTranslation(props.rating))

  return (
    <div className="overallRating">
      <div className="ratingNumber">{props.rating}</div>
      <div className="container2">
        <div className="ratingStars">
          {ratingToStarTranslation(props.rating).map((filling, i) => (
            <Star filling={filling} key={i} />
          ))}
        </div>
        <span className="reviewNumber">
          <strong>{props.data.length}</strong> Reviews
        </span>
      </div>
    </div>
  )
};

export default OverallRating;
