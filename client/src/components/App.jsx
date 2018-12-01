import React from 'react';
import OverallRating from './OverallRating';
import Rating from './Rating';
import Specs from './Specs';
import Sort from './Sort';
import styles from '../css/App.css';
import axios from 'axios';

let randomId = Math.floor(Math.random() * (1000)) + 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodId: randomId,
      data: {},
      percent: 0,
      overallRating: 0,
      view: 'relevant',
      limit: 2,
      comments: [],
      filters: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLoadClick = this.handleLoadClick.bind(this);
    this.handleRateClick = this.handleRateClick.bind(this);
    this.handleRemoveFilterClick = this.handleRemoveFilterClick.bind(this);
    // axios.defaults.baseURL = 'http://' + process.env.HOSTNAME + ':' + process.env.PORT;
  }

  componentDidMount() {
    this.fetch(this.state.prodId);
    this.fetchComments(this.state.view, this.state.limit, this.state.filters, this.state.prodId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.limit !== prevState.limit || this.state.view !== prevState.view) {
      this.fetchComments(this.state.view, this.state.limit, this.state.filters, this.state.prodId);
    }
  }

  fetch(prodId) {
    axios
      .get(`http://localhost:80/api/prodId:${prodId}`)
      // .get(`/api/prodId:${prodId}`)
      .then(result => {
        this.setState({
          data: result.data[0],
          overallRating: result.data[0].avgRating.toFixed(1),
          percent: Math.round(result.data[0].recommendCount / result.data[0].numRatings * 100)
        });
      })
      .catch(err => {
        console.error('Fetch error, ', err);
      });
  }

  fetchComments(type, limit, filters, prodId) {
    filters = JSON.stringify(filters);
    axios
      .get(`http://localhost:80/api/prodId:${prodId}/${type}/limit=${limit}?filters=${filters}`)
      // .get(`/api/prodId:${prodId}/${type}/limit=${limit}?filters=${filters}`)
      .then(result => {
        this.setState({
          comments: result.data,
        });
      })
      .catch(err => {
        console.error('Fetch error, ', err);
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
    let view = e.target.textContent.toLowerCase();
    if (view === 'helpful') {
      view = 'helpfulButton';
    }
    this.setState({
      view
    });
  }

  handleLoadClick() {
    if (this.state.limit <= this.state.data.numRatings) {
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
        this.fetchComments(
          this.state.view,
          this.state.limit,
          this.state.filters,
          this.state.prodId,
        );
      },
    );
  }

  handleRemoveFilterClick() {
    this.setState(
      {
        filters: [],
      },
      () => {
        this.fetchComments(
          this.state.view,
          this.state.limit,
          this.state.filters,
          this.state.prodId,
        );
      },
    );
  }

  render() {

    return (
      <div className={styles.main}>
        <div className={styles.RatingReviews}>
          <h3 id={styles.RR}>Ratings & Reviews</h3>
          <div className={styles.container1}>
            <OverallRating
              ratingToStarTranslation={this.ratingToStarTranslation}
              rating={this.state.overallRating}
              data={this.state.data}
            />
            <div className={styles.percentage}>
              <div className={styles.percent}>{this.state.percent}%</div>
              <div className={styles.customersRec}>of customers recommend this product</div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.container4}>
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
      </div>
    );
  }
}

export default App;
