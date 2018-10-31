import React from 'react';
import OverallRating from './OverallRating';
import Rating from './Rating';
import Specs from './Specs';
import Sort from './Sort';
import '../css/App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios
      .get('/api')
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
        });
        console.log('Fetch success');
      })
      .catch(err => {
        console.error('Fetch error, ', err);
      });
  }

  extractInfo(stats) {
    let length = this.state.data.length;
    let accum = 0;
    this.state.data.forEach(comment => {
      if (stats === 'percent' && comment.recommend) {
        accum += 1;
      }
    })
    return Math.floor(accum/length * 100);
  }

  render() {
    return (
      <div>
        <h3 id="RR">Ratings & Reviews</h3>
        <div className="container1">
          <OverallRating />
          <div className="percentage">
            <div className="percent">48%</div>
            <div className="customersRec">
              of customers recommend this product
            </div>
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
