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
      <div className="sort">
        <div class="commentHeader">
          <div className="sortOn">SORT ON</div>
          <div className="buttons">
            <button className="relevant">RELEVANT</button>
            <button className="helpfulButton">HELPFUL</button>
            <button className="newest">NEWEST</button>
          </div>
        </div>
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