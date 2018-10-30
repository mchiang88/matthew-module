import React from 'react';
import OverallRating from './OverallRating';
import Rating from './Rating';
import Specs from './Specs';
import Sort from './Sort';
import '../css/App.css';

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
            <div className="customersRec">of customers recommend this product</div>
          </div>
        </div>
        <div className="container3">
          <div className="container4">          
            <Rating />
            <Specs />
          </div>
          <Sort />
        </div>
      </div>
    );
  }
}

export default App;
