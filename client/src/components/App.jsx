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
        <h3 id="RR">Ratings & Reviews</h3>
        <div className="container1">
          <OverallRating />
          <div className="percentage">
            <div className="percent">98%</div> 
            <p>of customers recommend this product</p>
          </div>
        </div>
        <Rating />
        <Specs />
        <Sort />
      </div>
    );
  }
}

export default App;
