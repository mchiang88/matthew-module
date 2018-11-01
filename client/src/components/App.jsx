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
      percent: 0,
      overallRating: 0,
    };
    this.extractInfo = this.extractInfo.bind(this);
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
        this.extractInfo();
      })
      .catch(err => {
        console.error('Fetch error, ', err);
      });
  }

  extractInfo() {
    let length = this.state.data.length;
    let percent = 0;
    let overallRating = 0;
    this.state.data.forEach(comment => {
      if (comment.recommend) {
        percent += 1;
      }
      overallRating += comment.prodRating;
    });
    this.setState({
      percent: Math.round((percent / length) * 100),
      overallRating: (overallRating / length).toFixed(1)
    });
  }

  ratingToStarTranslation(rating) {
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

  render() {
    return (
      <div>
        <h3 id="RR">Ratings & Reviews</h3>
        <div className="container1">
          <OverallRating ratingToStarTranslation={this.ratingToStarTranslation} rating={this.state.overallRating} data={this.state.data}/>
          <div className="percentage">
            <div className="percent">{this.state.percent}%</div>
            <div className="customersRec">of customers recommend this product</div>
          </div>
        </div>
        <div className="container3">
          <div className="container4">
            <Rating data={this.state.data}/>
            <Specs data={this.state.data}/>
          </div>
          <Sort ratingToStarTranslation={this.ratingToStarTranslation}/>
        </div>
      </div>
    );
  }
}

export default App;
