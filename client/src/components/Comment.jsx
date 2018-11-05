import React from 'react';
import '../css/Comment.css';
import Star from './Star';
import CheckMark from './CheckMark';
import moment from 'moment';

const Comment = props => {
  let recommend = (
    <div className="recommend">
      <CheckMark />
      <span className="recommendComment">I recommend this product</span>
    </div>
  );

  let verified = <span className="verified"> - Verified Purchaser</span>;

  let response = (
    <div className="response">
      <div className="shoedidas">
        <div className="responseHeader">
          <img id="logo" src='\shoedidas_black_3.svg'></img>
          <span>Response from Shoedidas</span>
        </div>
        <div className="responseBody">{props.comment.response}</div>
      </div>
    </div>
  );

  return (
    <div className="comment">
      <div className="container5">
        <div className="commentStars">
          {props.ratingToStarTranslation(props.comment.prodRating).map((filling, i) => (
            <Star filling={filling} key={i} id={Math.random()}/>
          ))}
        </div>
        <div className="date">{moment(props.comment.date).format('ll')}</div>
      </div>
      <div className="commentHeader">
        {props.comment.header === null ? '' : props.comment.header}
      </div>
      <div className="commentBody">{props.comment.body}</div>
      {props.comment.recommend ? recommend : ''}
      <div className="userInfo">
        <span className="userName">{props.comment.user}</span>
        {props.comment.verified ? verified : ''}
      </div>
      {props.comment.response === null ? '' : response}
      <div className="commentFooter">
        <a className="reply">
          Reply
        </a>
        <div className="reviewHelpful">
          <div className="reviewQuestion">Was this review helpful? </div>
          <div className="helpful">
            <div className="yes">Yes</div>
            <span className="yesCount">({props.comment.yesRating})</span>
          </div>
          <div className="unhelpful">
            <div className="no" href="">
              No
            </div>
            <span className="noCount">({props.comment.noRating})</span>
          </div>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Comment;
