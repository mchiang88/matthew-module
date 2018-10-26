import React from 'react';
import OverallRating from './OverallRating';
import Rating from './Rating';
import Specs from './Specs';
import Sort from './Sort';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
    };
  }

  render() {
    return (
      <div>
        <h3 id="RR">REVIEWS & RATINGS</h3>
        <OverallRating />
        <div className="percentage">98% of customers recommend this product</div>
        <Rating />
        <Specs />
        <Sort />
      </div>
    );
  }
}

export default App;
