import React from 'react';
import StarListEntry from './StarListEntry';
import '../css/Rating.css'

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  calculateStars(num) {
    let count = 0;
    this.props.data.forEach(comment => {
      if (comment.prodRating === num) {
        count += 1;
      }
    })
    return count;
  }

  render() {
    return (
      <div className="rating">
        <h5 id="breakdown">Rating Breakdown</h5>
        {/* if click, show "showing reviews: ..." so possibly change to class component for state */}
        <ul>
          <StarListEntry id={5} length={this.props.data.length} count={this.calculateStars(5)}/>
          <StarListEntry id={4} length={this.props.data.length} count={this.calculateStars(4)}/>
          <StarListEntry id={3} length={this.props.data.length} count={this.calculateStars(3)}/>
          <StarListEntry id={2} length={this.props.data.length} count={this.calculateStars(2)}/>
          <StarListEntry id={1} length={this.props.data.length} count={this.calculateStars(1)}/>
        </ul>
      </div>
    )
  }
};

export default Rating;
