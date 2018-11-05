import React from 'react';
import Comment from './Comment';
import '../css/Sort.css';
import Arrow from './Arrow';

const Sort = props => (
  <div className="sort">
    <div className="Header">
      <div className="sortOn">SORT ON</div>
      <div className="buttons">
        <div
          onClick={props.handleClick}
          id={props.view === 'relevant' ? 'active' : null}
          className="relevant"
        >
          RELEVANT
        </div>
        <div
          onClick={props.handleClick}
          id={props.view === 'helpfulButton' ? 'active' : null}
          className="helpfulButton"
        >
          HELPFUL
        </div>
        <div
          onClick={props.handleClick}
          id={props.view === 'newest' ? 'active' : null}
          className="newest"
        >
          NEWEST
        </div>
      </div>
    </div>
    {props.comments.map((comment, i) => (
      <Comment ratingToStarTranslation={props.ratingToStarTranslation} comment={comment} key={i} />
    ))}
    <div className="loadAndWrite">
      <button onClick={props.handleLoadClick} type="button" className="load">
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

export default Sort;
