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
          {/* <img src='\shoedidas.svg'></img> */}
          <svg viewBox="0 0 24 24" id="logo" width="5%" height="5%">
            <path d="M15.72 13.61h4.67l-6-10.47-3.5 2 4.87 8.45zm-5.17 1v-1h3.68l-3.92-6.79-3.51 2 2.75 4.78v1zm-7.83-2.19l.67 1.19h4.67l-1.85-3.2-3.49 2zm11.51 1.19v1.69a2 2 0 0 0-1.23-.37 2.08 2.08 0 0 0 0 4.16 2.12 2.12 0 0 0 1.19-.37V19h1v-5.39zm-6.17 0v1.69a2 2 0 0 0-1.19-.37 2.08 2.08 0 0 0 0 4.16 2.1 2.1 0 0 0 1.19-.37V19h1v-5.39zm12.22 4.08c0 .81.72 1.39 1.88 1.39.94 0 1.72-.41 1.72-1.32 0-.63-.35-1-1.17-1.15l-.64-.13c-.41-.08-.69-.16-.69-.4s.27-.39.62-.39.71.25.72.55h1c-.05-.78-.68-1.31-1.7-1.31s-1.67.57-1.67 1.32c0 .92.74 1.06 1.38 1.18l.53.1c.38.07.54.18.54.4s-.19.39-.64.39c-.65 0-.86-.34-.87-.63zM18.91 19h1v-4h-1v.32a2 2 0 0 0-1.19-.37 2.08 2.08 0 0 0 0 4.16 2.12 2.12 0 0 0 1.19-.37V19zM3.39 19h1v-4h-1v.32a2 2 0 0 0-1.19-.37 2.08 2.08 0 1 0 0 4.16 2.12 2.12 0 0 0 1.19-.37V19zm7.16 0v-4h-1v4zm-9.46-2a1.15 1.15 0 1 1 1.15 1.15A1.15 1.15 0 0 1 1.09 17zm4.68 0a1.15 1.15 0 1 1 1.15 1.15A1.14 1.14 0 0 1 5.77 17zm10.84 0a1.15 1.15 0 1 1 1.15 1.15A1.15 1.15 0 0 1 16.61 17zm-4.67 0a1.15 1.15 0 1 1 1.15 1.15A1.14 1.14 0 0 1 11.94 17z" />
          </svg>
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
          {props.comment.prodRating}
          {console.log(props.ratingToStarTranslation(props.comment.prodRating))}
          {props.ratingToStarTranslation(props.comment.prodRating).map((filling, i) => (
            <Star filling={filling} key={i} />
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
