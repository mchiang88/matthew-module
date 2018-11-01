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
      data: [],
      percent: 0,
      overallRating: 0,
      view: 'relevant',
      limit: 2,
      comments: [],
      filters: [],
    };
    this.extractInfo = this.extractInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoadClick = this.handleLoadClick.bind(this);
    this.handleRateClick = this.handleRateClick.bind(this);
    this.handleRemoveFilterClick = this.handleRemoveFilterClick.bind(this);
  }

  componentDidMount() {
    this.fetch();
    this.fetchComments(this.state.view, this.state.limit, this.state.filters);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.limit !== prevState.limit || this.state.view !== prevState.view) {
      this.fetchComments(this.state.view, this.state.limit, this.state.filters);
    }
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

  fetchComments(type, limit, filters) {
    filters = JSON.stringify(filters);
    axios
      .get(`/api/${type}/${limit}?filters=${filters}`)
      .then(result => {
        this.setState({
          comments: result.data,
        });
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
      overallRating: (overallRating / length).toFixed(1),
    });
  }

  ratingToStarTranslation(rating) {
    let arr = Array(5).fill('0%');
    let decimal = 1 - (Math.ceil(rating) - rating).toFixed(1);
    for (let i = 0; i < Math.ceil(rating); i++) {
      if (i === Math.ceil(rating) - 1) {
        arr[i] = (decimal * 100).toString() + '%';
      } else {
        arr[i] = '100%';
      }
    }
    return arr;
  }

  handleClick(e) {
    this.setState({
      view: e.target.className,
    });
  }

  handleLoadClick() {
    if (this.state.limit <= this.state.data.length) {
      let addition = this.state.limit + 5;
      this.setState({
        limit: addition,
      });
    }
  }

  handleRateClick(e) {
    let currentFilters = this.state.filters;
    if (this.state.filters.includes(e.currentTarget.id)) {
      currentFilters.splice(currentFilters.indexOf(e.currentTarget.id), 1);
    } else {
      currentFilters.push(e.currentTarget.id);
    }
    this.setState(
      {
        filters: currentFilters,
      },
      () => {
        this.fetchComments(this.state.view, this.state.limit, this.state.filters);
      },
    );
    console.log(this.state.filters);
  }

  handleRemoveFilterClick() {
    this.setState(
      {
        filters: [],
      },
      () => {
        this.fetchComments(this.state.view, this.state.limit, this.state.filters);
      },
    );
  }

  render() {
    return (
      <div>
        <h3 id="RR">Ratings & Reviews</h3>
        <div className="container1">
          <OverallRating
            ratingToStarTranslation={this.ratingToStarTranslation}
            rating={this.state.overallRating}
            data={this.state.data}
          />
          <div className="percentage">
            <div className="percent">{this.state.percent}%</div>
            <div className="customersRec">of customers recommend this product</div>
          </div>
        </div>
        <div className="container3">
          <div className="container4">
            <Rating
              handleRateClick={this.handleRateClick}
              data={this.state.data}
              filters={this.state.filters}
              handleRemoveFilterClick={this.handleRemoveFilterClick}
            />
            <Specs data={this.state.data} />
          </div>
          <Sort
            view={this.state.view}
            limit={this.state.limit}
            comments={this.state.comments}
            handleClick={this.handleClick}
            handleLoadClick={this.handleLoadClick}
            ratingToStarTranslation={this.ratingToStarTranslation}
          />
        </div>
      </div>
    );
  }
}

export default App;
