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

  render() {
    return (
      <div>
        <h3 id="RR">Ratings & Reviews</h3>
        <div className="container1">
          <OverallRating rating={this.state.overallRating} data={this.state.data}/>
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
          <Sort />
        </div>
      </div>
    );
  }
}

export default App;
