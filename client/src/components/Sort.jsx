import React from 'react';
import Comment from './Comment';
import '../css/Sort.css';
import Arrow from './Arrow';
import axios from 'axios';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'relevant',
      limit: 2,
      comments: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLoadClick = this.handleLoadClick.bind(this);
  }

  //handle props.filter function

  componentDidMount() {
    this.fetchComments(this.state.view, this.state.limit);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.limit !== prevState.limit || this.state.view !== prevState.view) {
      this.fetchComments(this.state.view, this.state.limit);
    }
  }

  fetchComments(type, limit) {
    axios
      .get(`/api/${type}/${limit}`)
      .then(result => {
        console.log(result);
        this.setState({
          comments: result.data,
        });
      })
      .catch(err => {
        console.error('Fetch error, ', err);
      });
  }

  handleClick(e) {
    this.setState({
      view: e.target.className,
    });
  }

  handleLoadClick() {
    let addition = this.state.limit + 5;
    this.setState({
      limit: addition,
    });
  }

  render() {
    return (
      <div className="sort">
        <div className="Header">
          <div className="sortOn">SORT ON</div>
          <div className="buttons">
            <div
              onClick={this.handleClick}
              id={this.state.view === 'relevant' ? 'active' : null}
              className="relevant"
            >
              RELEVANT
            </div>
            <div
              onClick={this.handleClick}
              id={this.state.view === 'helpfulButton' ? 'active' : null}
              className="helpfulButton"
            >
              HELPFUL
            </div>
            <div
              onClick={this.handleClick}
              id={this.state.view === 'newest' ? 'active' : null}
              className="newest"
            >
              NEWEST
            </div>
          </div>
        </div>
        {this.state.comments.map((comment, i) => (
          <Comment ratingToStarTranslation={this.props.ratingToStarTranslation} comment={comment} key={i} />
        ))}
        <div className="loadAndWrite">
          <button onClick={this.handleLoadClick} type="button" className="load">
            LOAD MORE
            <Arrow />
          </button>
          <button type="button" className="write">
            WRITE A REVIEW
            <Arrow />
          </button>
        </div>
      </div>
    );
  }
}

export default Sort;
