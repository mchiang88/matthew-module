import React from 'react';
import Comment from './Comment';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'relevant',
      //pass in comments from props
    };
  }

  //handle props.filter function

  render() {
    return (
      <div>
        <span className="sortOn">SORT ON</span>
        <button className="relevant">RELEVANT</button>
        <button className="helpful">HELPFUL</button>
        <button className="NEWEST">NEWEST</button>
        <Comment />
        <Comment />
        <div className="loadAndWrite">
          <button className="load">LOAD MORE</button>
          <button className="write">WRITE A REVIEW -></button>
        </div>
      </div>
    )
  }
}

export default Sort;