import React from 'react';
import '../css/Comment.css';
import Star from './Star';
import CheckMark from './CheckMark';

const Comment = props => {
  let recommend = (
    <div className="recommend">
      <CheckMark />
      <span className="recommendComment">I recommend this product</span>
    </div>
  );

  let verified = <span className="verified"> - Verified Purchaser</span>;

  return (
    <div className="comment">
      <div className="container5">
        <div className="commentStars">
        {props.comment.prodRating}
          {props.ratingToStarTranslation(props.comment.prodRating).map((filling, i) => (
            <Star filling={filling} key={i}/>
          ))}
        </div>
        <div className="date">{props.comment.date}</div>
      </div>
      <div className="commentHeader">
        {props.comment.header === 'null' ? '' : props.comment.header}
      </div>
      <div className="commentBody">{props.comment.body}</div>
      {props.comment.recommend ? recommend : ''}
      <div className="userInfo">
        <span className="userName">{props.comment.user}</span>
        {props.comment.verified ? verified : ''}
      </div>
      <div className="commentFooter">
        <a className="reply" href="">
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
