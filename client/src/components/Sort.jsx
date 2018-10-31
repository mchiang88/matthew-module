import React from 'react';
import Comment from './Comment';
import '../css/Sort.css';
import Arrow from './Arrow';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'relevant',
      //pass in comments from props
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //handle props.filter function

  handleClick(e) {
    this.setState({
      view: e.target.className
    })
  }

  render() {
    return (
      <div className="sort">
        <div className="commentHeader">
          <div className="sortOn">SORT ON</div>
          <div className="buttons">
            <div onClick={this.handleClick} id={this.state.view === 'relevant' ? 'active' : null} className="relevant">RELEVANT</div>
            <div onClick={this.handleClick} id={this.state.view === 'helpfulButton' ? 'active' : null} className="helpfulButton">HELPFUL</div>
            <div onClick={this.handleClick} id={this.state.view === 'newest' ? 'active' : null} className="newest">NEWEST</div>
          </div>
        </div>
        <Comment />
        <Comment />
        <div className="loadAndWrite">
          <button type="button" className="load">
            LOAD MORE
            <Arrow />
          </button>
          <button type="button" className="write">
            WRITE A REVIEW
            <Arrow />
          </button>
        </div>
      </div>
    )
  }
}

export default Sort;